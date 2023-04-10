# 项目搭建

- 学会使用 TS
  - 如何把 TS 引入现有项目
  - 使用 TS 的好处
  - 如何用 TS 思维写代码
- 学以致用
- 避免使用 JS 思维写 TS 代码

## TS 思维

- 善用类（class）
  - 任何东西都写到类里，写什么代码首先应该有类
  - 面向对象

## 贪吃蛇

### 配置

- 在 Webpack 中引入 CSS 插件
- CSS 使用其预处理语言
- `npm i -D less less-loader css-loader style-loader`
  - `less` 核心工具
  - `less-loader` 将 less 和 webpack 连接到一起
  - `css-loader` 处理 CSS 代码
  - `style-loader` 把 CSS 引入到项目中
- 配置 webpack
  - 添加规则
  - `test` 使用正则表达式指定处理的文件
  - `use` 指定处理文件的 `loader`，从下到上
- CSS 存在版本差异，添加类似 babel 的工具，能将新的 CSS 代码转换成兼容旧版本的代码
  - 历史遗留
- `npm i -D postcss postcss-loader postcss-preset-env`

### 测试

- 新建 `src/style/index.less`

- `display: flex;` 弹性盒模型
  - 编译后，`postcss` 会自动添加前缀以适应
