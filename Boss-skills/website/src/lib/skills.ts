import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, resolve } from 'path';
import { load as yamlLoad } from 'js-yaml';
import matter from 'gray-matter';

interface SkillYAML {
  id: string;
  name: { en: string; 'zh-CN': string };
  version: string;
  category: string;
  tags: string[];
  tone: {
    style: string;
    realism: string;
    annoyance: string;
  };
  communication_modes: string[];
  inputs: Array<{ name: string; type: string; description: string; required: boolean }>;
  outputs: Array<{ name: string; type: string; description: string }>;
  [key: string]: unknown;
}

interface SkillDescription {
  en?: string;
  'zh-CN'?: string;
}

export interface Skill {
  id: string;
  slug: string;
  name: { en: string; 'zh-CN': string };
  description: SkillDescription;
  version: string;
  category: string;
  tags: string[];
  tone: {
    style: string;
    realism: string;
    annoyance: string;
  };
  communication_modes: string[];
  inputs: Array<{ name: string; type: string; description: string; required: boolean }>;
  outputs: Array<{ name: string; type: string; description: string }>;
}

interface SkillContent {
  name: string;
  description: string;
  content: string;
  typicalLines: string[];
}

const SKILLS_DIR = join(process.cwd(), '..', '..', 'skills');

function getSkillsPath(): string {
  const skillsPath = resolve(SKILLS_DIR);
  if (!existsSync(skillsPath)) {
    throw new Error(`Skills directory not found at ${skillsPath}`);
  }
  return skillsPath;
}

function readSkillYAML(skillDir: string): SkillYAML {
  const yamlPath = join(skillDir, 'skill.yaml');
  const content = readFileSync(yamlPath, 'utf-8');
  return yamlLoad(content) as SkillYAML;
}

function readSkillMarkdown(skillDir: string, locale: 'en' | 'zh-CN'): SkillContent {
  const mdPath = join(skillDir, `SKILL.${locale}.md`);
  if (!existsSync(mdPath)) {
    throw new Error(`Markdown file not found for locale ${locale} at ${mdPath}`);
  }

  const fileContent = readFileSync(mdPath, 'utf-8');
  const { data, content } = matter(fileContent);

  const typicalLines = extractTypicalLines(content);

  return {
    name: (data.name as string) || '',
    description: (data.description as string) || '',
    content,
    typicalLines,
  };
}

function extractTypicalLines(content: string): string[] {
  const lines: string[] = [];

  // Match "### Typical Lines" or "## Typical Lines" section
  const match = content.match(
    /#{2,3}\s+Typical\s+Lines\s*\n([\s\S]*?)(?=\n#{2,3}\s+|\Z)/i
  );

  if (!match) {
    return lines;
  }

  const section = match[1];

  // Extract lines that start with "- " (unordered list items)
  const lineMatches = section.match(/^-\s+(.+)$/gm);
  if (lineMatches) {
    return lineMatches.map((line) => line.replace(/^-\s+/, '').trim());
  }

  return lines;
}

export function getAllSkills(): Skill[] {
  const skillsPath = getSkillsPath();
  const dirs = readdirSync(skillsPath).filter((name) => {
    const fullPath = join(skillsPath, name);
    return statSync(fullPath).isDirectory() && name.startsWith('boss.');
  });

  return dirs
    .map((dir) => {
      try {
        const skillDir = join(skillsPath, dir);
        const yamlData = readSkillYAML(skillDir);
        const slug = yamlData.id.replace('boss.', '');

        // Read descriptions from both locales
        const descriptionEn = (() => {
          try {
            return readSkillMarkdown(skillDir, 'en').description;
          } catch {
            return '';
          }
        })();

        const descriptionZhCN = (() => {
          try {
            return readSkillMarkdown(skillDir, 'zh-CN').description;
          } catch {
            return '';
          }
        })();

        return {
          id: yamlData.id,
          slug,
          name: yamlData.name,
          description: {
            en: descriptionEn,
            'zh-CN': descriptionZhCN,
          },
          version: yamlData.version,
          category: yamlData.category,
          tags: yamlData.tags,
          tone: yamlData.tone,
          communication_modes: yamlData.communication_modes,
          inputs: yamlData.inputs,
          outputs: yamlData.outputs,
        };
      } catch (error) {
        console.error(`Error loading skill ${dir}:`, error);
        return null;
      }
    })
    .filter((skill): skill is NonNullable<typeof skill> => skill !== null)
    .sort((a, b) => a.id.localeCompare(b.id));
}

export function getSkillBySlug(slug: string): Skill | null {
  const skills = getAllSkills();
  return skills.find((skill) => skill.slug === slug) || null;
}

export function getSkillContent(
  slug: string,
  locale: 'en' | 'zh-CN' = 'en'
): SkillContent | null {
  const skill = getSkillBySlug(slug);
  if (!skill) {
    return null;
  }

  try {
    const skillDir = join(getSkillsPath(), skill.id);
    return readSkillMarkdown(skillDir, locale);
  } catch (error) {
    console.error(`Error reading skill content for ${slug} (${locale}):`, error);
    return null;
  }
}
