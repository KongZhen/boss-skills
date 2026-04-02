'use client';

export type Locale = 'en' | 'zh-CN';

const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.skills': 'Skills',
    'nav.playground': 'Playground',
    'nav.about': 'About',
    'nav.contribute': 'Contribute',

    // Hero section
    'hero.title': 'BOSS SKILLS',
    'hero.tagline': 'Satirical AI Skills for Every Workplace Boss Archetype',
    'hero.description':
      'Turn any AI into your worst (or best) boss nightmare. A collection of fictionalized, hilariously on-point boss personas designed to expose workplace absurdity through humor.',
    'hero.cta_primary': 'Try the Playground',
    'hero.cta_secondary': 'View Skills',

    // Skills page
    'skills.title': 'Skills',
    'skills.subtitle': 'Pick your poison',
    'skills.filter_all': 'All',
    'skills.filter_workplace': 'Workplace',
    'skills.filter_management': 'Management',
    'skills.filter_satire': 'Satire',
    'skills.view_details': 'View Details',
    'skills.try_now': 'Try Now',

    // Playground
    'playground.title': 'Boss Playground',
    'playground.subtitle': 'Generate Boss-Style Responses',
    'playground.boss_type': 'Select Boss Type',
    'playground.mode': 'Communication Mode',
    'playground.task': 'Task or Project',
    'playground.progress': 'Current Progress (optional)',
    'playground.deadline': 'Deadline (optional)',
    'playground.generate': 'Generate Response',
    'playground.message': 'Boss Message',
    'playground.follow_up': 'Follow-Up Question',
    'playground.hidden_insight': 'Hidden Insight (What They Actually Mean)',
    'playground.clear': 'Clear',

    // Common
    'common.view_on_github': 'View on GitHub',
    'common.star_on_github': 'Star on GitHub',
    'common.version': 'v',
    'common.tags': 'Tags',
    'common.category': 'Category',
    'common.language': 'Language',
    'common.english': 'English',
    'common.chinese': '中文',

    // Footer
    'footer.tagline': 'Built with engineering discipline. Trained on emotional damage.',
    'footer.license': 'MIT License',
    'footer.made_with': 'Made with',

    // About page
    'about.title': 'About Boss Skills',
    'about.subtitle': 'Workplace Satire Through AI',
    'about.what_is': 'What is Boss Skills?',
    'about.what_is_desc':
      'Boss Skills is a collection of fictionalized, satirical AI personas representing common workplace boss archetypes. Each skill is carefully crafted to capture the essence of specific management dysfunction patterns — not to mock individuals, but to expose and satirize the systemic absurdities of workplace dynamics.',
    'about.why': 'Why Does This Exist?',
    'about.why_desc':
      'Workplace dysfunction is universal. By exaggerating recognizable boss behaviors to absurd levels, we create space for reflection and shared recognition. It is cathartic, funny, and occasionally genuinely educational about what not to do.',
    'about.how_built': 'How Are These Built?',
    'about.how_built_desc':
      'Each skill is built with a detailed personality framework, communication patterns for different modes (task assignment, progress checks, reviews, meetings, escalations), and template-based response generation. No LLM API calls — pure, deterministic absurdity.',

    // Contribute page
    'contribute.title': 'Contribute',
    'contribute.subtitle': 'Help Us Mock More Bosses',
    'contribute.how': 'How to Contribute',
    'contribute.new_skill':
      'Create a new boss skill by adding a skill directory to the skills/ folder with skill.yaml and SKILL.*.md files.',
    'contribute.improve':
      'Improve existing skills by enhancing personas, adding communication modes, or fixing translations.',
    'contribute.report_issue': 'Report issues or suggest improvements on GitHub.',
  },

  'zh-CN': {
    // Navigation
    'nav.home': '首页',
    'nav.skills': '技能',
    'nav.playground': '试验场',
    'nav.about': '关于',
    'nav.contribute': '贡献',

    // Hero section
    'hero.title': 'BOSS SKILLS',
    'hero.tagline': '各种职场老板原型的讽刺AI技能',
    'hero.description':
      '把任何AI变成你最噩梦的老板。一系列虚构的、幽默逼真的老板角色，通过讽刺揭露职场荒诞。',
    'hero.cta_primary': '进入试验场',
    'hero.cta_secondary': '查看技能',

    // Skills page
    'skills.title': '技能',
    'skills.subtitle': '选择你的毒药',
    'skills.filter_all': '全部',
    'skills.filter_workplace': '职场',
    'skills.filter_management': '管理',
    'skills.filter_satire': '讽刺',
    'skills.view_details': '查看详情',
    'skills.try_now': '试试看',

    // Playground
    'playground.title': '老板试验场',
    'playground.subtitle': '生成老板风格回复',
    'playground.boss_type': '选择老板类型',
    'playground.mode': '沟通模式',
    'playground.task': '任务或项目',
    'playground.progress': '当前进展（可选）',
    'playground.deadline': '截止日期（可选）',
    'playground.generate': '生成回复',
    'playground.message': '老板消息',
    'playground.follow_up': '跟进问题',
    'playground.hidden_insight': '隐藏见解（他们真正的意思）',
    'playground.clear': '清空',

    // Common
    'common.view_on_github': '在GitHub上查看',
    'common.star_on_github': '在GitHub上Star',
    'common.version': 'v',
    'common.tags': '标签',
    'common.category': '分类',
    'common.language': '语言',
    'common.english': 'English',
    'common.chinese': '中文',

    // Footer
    'footer.tagline': '用工程的严谨，诠释被伤害的灵魂。',
    'footer.license': 'MIT许可证',
    'footer.made_with': '用',

    // About page
    'about.title': '关于Boss Skills',
    'about.subtitle': '通过AI讽刺职场',
    'about.what_is': '什么是Boss Skills?',
    'about.what_is_desc':
      'Boss Skills是一系列虚构的、讽刺的AI角色，代表常见的职场老板原型。每个技能都精心设计来捕捉特定的管理职能障碍模式——不是嘲笑个人，而是通过讽刺揭露职场动态的系统性荒诞。',
    'about.why': '为什么要这么做?',
    'about.why_desc':
      '职场混乱是普遍的。通过将可识别的老板行为夸大到荒诞的程度，我们为反思和共识创造空间。这既是宣泄的、有趣的，有时也能让人学到什么不应该做。',
    'about.how_built': '这些是如何构建的?',
    'about.how_built_desc':
      '每个技能都有详细的人格框架、不同模式（任务分配、进度检查、评审、会议、升级）的沟通模式，以及基于模板的响应生成。没有LLM API调用——纯粹、确定性的荒诞。',

    // Contribute page
    'contribute.title': '贡献',
    'contribute.subtitle': '帮助我们嘲笑更多的老板',
    'contribute.how': '如何贡献',
    'contribute.new_skill':
      '通过在skills/文件夹中添加一个技能目录（包含skill.yaml和SKILL.*.md文件）来创建新的老板技能。',
    'contribute.improve':
      '通过增强人格设定、添加沟通模式或修复翻译来改进现有技能。',
    'contribute.report_issue': '在GitHub上报告问题或建议改进。',
  },
};

export function t(key: string, locale: Locale = 'en'): string {
  const localeDict = translations[locale];
  return localeDict[key] || translations.en[key] || key;
}

export function useLocale(): { locale: Locale; t: (key: string) => string } {
  // This is a client-side hook that would typically read from URL or context
  // For now, default to 'en'. In a real implementation, this would use
  // usePathname or context to determine the locale
  const locale: Locale = 'en';
  return {
    locale,
    t: (key: string) => t(key, locale),
  };
}

export const defaultLocale: Locale = 'en';
export const supportedLocales: Locale[] = ['en', 'zh-CN'];
