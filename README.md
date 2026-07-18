# 博客

Astro 静态博客，GitHub Actions 自动构建，发布到 GitHub Pages。

## 上线前必改一处

编辑 `astro.config.mjs`：

- 仓库叫 `<用户名>.github.io` → `site: 'https://<用户名>.github.io'`，删掉 `base` 那行
- 仓库叫别的（比如 `blog`）→ `site: 'https://<用户名>.github.io'`，`base: '/<仓库名>'`

改错了的表现是页面能开但 CSS/链接全挂，回来核对这一处即可。

## 写文章

`src/pages/posts/` 下新建 `.md`，frontmatter 见 `hello-world.md`。首页按日期倒序自动收录。

## 部署

push 到 `main` 即可。首次需要在仓库 Settings → Pages → Source 选 **GitHub Actions**。
