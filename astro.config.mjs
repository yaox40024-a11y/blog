import { defineConfig } from 'astro/config';

// 改成你自己的：
//   用户主页仓库 <用户名>.github.io  -> site: 'https://<用户名>.github.io', base 删掉
//   普通项目仓库 <用户名>/<仓库名>   -> base: '/<仓库名>'
export default defineConfig({
  site: 'https://yaox40024-a11y.github.io',
  base: '/blog',
});
