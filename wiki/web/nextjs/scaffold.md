# 创建项目

## 脚手架 `create-next-app`

```shell
npx create-next-app@latest
# or
yarn create next-app
# or
pnpm create next-app
```

## 预览项目

- `package.json`
  - 开发模式 => `dev` => `next dev`
    - 有些框架使用 `start`
  - 构建 => `build` => `next build`
  - 生产环境模式 => `start` => `next start`
  - 生成全静态文件 => `export` => `next export`
    - 所有页面可预生成
    - 数据全是预先拿到
    - 不需要经常动态变化
    - 不需要服务端渲染
    - 这个命令生成一个纯静态网站
  - 检查 => `link` => `next lint`
- `next.config.js`
- `tsconfig.json`
- styles
  - 样式
- public
  - 图标、图片资源
- pages
  - `_app.tsx` => 类似于 React 的 index，框架展开的位置，日后的页面都会成为其 component
  - `_document.tsx`
  - `index.tsx` => 类似于 React 的 App

