# Boss Skills 上线前 Checklist

## 已完成的修复

- [x] YAML配置路径修正：`skills/boss/${slug}` → `skills/boss.${slug}`（Claude Desktop tab的source路径与实际目录结构一致）
- [x] Footer GitHub URL统一：`anthropics/boss-skills` → `KongZhen/boss-skills`
- [x] skills/[slug]详情页 GitHub URL补全：`github.com/boss-skills` → `github.com/KongZhen/boss-skills`
- [x] 底部credits的Vercel → Cloudflare（匹配实际部署平台）
- [x] TypeScript编译检查通过（零错误）

## 部署配置验证

- [x] `next.config.ts` 已设置 `output: 'export'`（静态导出，兼容 Cloudflare Pages）
- [x] `images.unoptimized: true`（静态导出必需）
- [x] `generateStaticParams()` 已配置（skills/[slug] 动态路由静态生成）
- [x] 所有12个boss的 en/zh 图片资源齐全（24张boss图 + 2张hero图）
- [x] 自托管字体文件完整（Ark Pixel 7个woff2文件）
- [x] Google Fonts预加载配置正确（6个字体族）

## Skill部署流程验证

- [x] Claude Desktop tab：YAML配置路径正确指向 `github:KongZhen/boss-skills/skills/boss.{slug}`
- [x] API/Code tab：`git clone` URL正确，`fs.readFileSync` 路径正确
- [x] 每个boss目录都有：SKILL.en.md, SKILL.zh-CN.md, skill.yaml, assets/, examples/

## 上线前需要你手动完成的事项

### 1. GitHub仓库准备
- [ ] 确认 `github.com/KongZhen/boss-skills` 仓库为 public
- [ ] 确认 main 分支是最新代码
- [ ] 添加合适的 GitHub Topics（如: claude, ai-skills, boss, satire, workplace）
- [ ] 设置 Repository Description
- [ ] 上传 Social Preview 图片（用 preview-hero-light.png）

### 2. Cloudflare Pages 部署
- [ ] 登录 Cloudflare Dashboard → Pages
- [ ] 创建新项目，连接 GitHub 仓库 `KongZhen/boss-skills`
- [ ] 构建配置：
  - **Framework preset**: Next.js (Static HTML Export)
  - **Build command**: `cd website && npm install && npm run build`
  - **Build output directory**: `website/out`
  - **Node.js version**: 18+（环境变量 `NODE_VERSION=18`）
- [ ] 部署成功后获得 `*.pages.dev` 临时域名

### 3. 自定义域名 boss-skills.com
- [ ] 在 Cloudflare Pages 项目设置 → Custom domains → 添加 `boss-skills.com`
- [ ] 添加 `www.boss-skills.com` 并设置重定向到根域名
- [ ] Cloudflare 会自动配置 DNS（因为域名已在 Cloudflare 管理）
- [ ] 确认 SSL/TLS 证书自动签发（Full strict 模式）
- [ ] 等待 DNS 生效（通常几分钟内）

### 4. Cloudflare 优化配置
- [ ] 开启 Auto Minify（HTML/CSS/JS）
- [ ] 开启 Brotli 压缩
- [ ] 设置 Browser Cache TTL（建议30天）
- [ ] 开启 Always Online
- [ ] 配置 Page Rules：`www.boss-skills.com/*` → 301 redirect to `boss-skills.com/$1`

### 5. SEO与元数据
- [ ] 确认 `<title>` 和 `<meta description>` 设置合理
- [ ] 确认 Open Graph 标签（用于社交分享）
- [ ] 添加 `robots.txt`（允许所有爬虫）
- [ ] 添加 `sitemap.xml`（列出所有页面）
- [ ] 确认 favicon.ico 存在

### 6. 最终验证
- [ ] 在 boss-skills.com 上逐一测试 EN/ZH 切换
- [ ] 测试所有导航链接（Skills / Playground / About / Contribute）
- [ ] 测试 Boss 卡片点击 → Setup Panel展开 → 两个Tab切换
- [ ] 测试 Boss Simulator 随机生成
- [ ] 测试移动端响应式（iPhone/Android尺寸）
- [ ] 测试暗色模式切换
- [ ] 运行 Lighthouse 评分（目标 Performance > 90）
