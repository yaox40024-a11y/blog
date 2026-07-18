---
layout: ../../layouts/Post.astro
title: 第一篇文章
date: 2026-07-18
description: 博客跑通了，记录一下怎么继续写。
---

博客已经跑起来了。这篇是示例，可以直接删掉。

## 怎么发新文章

在 `src/pages/posts/` 下新建一个 `.md` 文件，开头带上这段 frontmatter：

```markdown
---
layout: ../../layouts/Post.astro
title: 标题
date: 2026-07-18
description: 一句话摘要，可选
---
```

正文用 Markdown 写就行。`git push` 之后 GitHub Actions 会自动构建并发布，大概一两分钟。

首页会按 `date` 倒序自动列出所有文章，不需要手动维护列表。

## 本地预览（可选）

这台机器上目前没装 Node，所以本地预览暂时用不了。装了之后：

```bash
npm install
npm run dev
```

不装也行 —— 直接 push，让 CI 构建。
