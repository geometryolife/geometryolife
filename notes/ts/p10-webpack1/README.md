# 使用 webpack 打包 JS 代码（1）

## 准备

- `npm init -y` 初始化项目，生成 `package.json`
- `npm i -D webpack webpack-cli typescript ts-loader`
  - `webpack` => 核心代码
  - `webpack-cli` => 命令行程序
  - `typescript` => 语言
  - `ts-loader` => TS 加载器，将 ts 和 webpack 整合
- 新建 `webpack.config.js` => webpack 配置文件
- 新建 `tsconfig.js`
- 新建 `src/index.ts`
- 在 `package.json` 添加 `"build": "webpack"` 命令

## webpack 配置

### 导入

- `path` 模块 => 拼接路径
- webpack 中所有的配置信息都应该写在 `module.exports` 中

### 选项

- `entry` => 指定入口文件
  - `"./src/index.ts"`
- `output` => 指定打包文件所在目录
  - `path` => 指定打包文件的目录
    - `"./dist"` => 直接使用相对路径
    - `path.resolve(__dirname, 'dist')` => 借助模块获取完整路径
  - `filename` => 打包后文件的名字
    - `bundle.js`
- `module` => 指定 webpack 打包时要使用的模块
  - 各种文件：js、ts、json、图片、字体……
  - `rules` => 指定要加载的规则（数组）
    - `test` => 指定规则生效的文件
    - `use` => 指定处理文件的程序
    - `exclude` => 指定要排除的文件
- `mode` => `development` 或 `production`

