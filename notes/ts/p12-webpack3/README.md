# 使用 webpack 打包 JS 代码（3）

- ES 有不同的标准
  - 代码用最新标准写，但需要兼容旧版本
  - 可以配置 `tsconfig.json` 的 `target` 支持旧版本
  - 但是只能做语法层面转换
  - 但是有一些新增的特性无法通过语法层面转换来向下兼容
- babel
  - 新语法 -> 旧语法
  - 通过一些方式让旧浏览器支持新特性
  - 解决兼容性问题

## 安装依赖

- `npm i -D @babel/core`
  - babel 核心工具
- `npm i -D @babel/preset`
  - 预置环境，兼容不同的浏览器
- `npm i -D babel-loader`
  - 与 webpack 结合
- `npm i -D core-js`
  - 模拟 JS 的运行环境，让老版本浏览器使用新技术
  - 包含的东西比较多，后面通过设置自定义引入需求的功能

## 箭头函数

- ie 无法使用箭头函数
- 自调用，立即执行
- webpack 自动生成

### webpack 配置

- `output` 中添加 `environment`
  - `arrowFunction: false` => 不使用箭头函数
