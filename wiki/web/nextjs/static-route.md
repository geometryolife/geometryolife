# 静态路由

- 在 `pages` 目录加 `xxx.js` 文件，就会产生相应的路由页面。
- 嵌套式静态路由
  - 例如 `posts/posts` => `posts.tsx`
  - 访问目录时，如果目录里有 `index.tsx` 那么就是路由到这个文件。
- 文件名、目录结构就决定的路由
- 使用 `yarn dev` => 编译过程，会罗列路由，分为静态路由和服务端渲染路由
