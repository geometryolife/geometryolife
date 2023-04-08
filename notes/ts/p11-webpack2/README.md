# 使用 webpack 打包 JS 代码（2）

- 编译后运行代码需要网页，但是手动创建 `html` 文件太麻烦
  - 手动引入 html、css 等文件不优雅
- `html-webpack-plugin` => 自动生成 html 文件
  - `npm i -D html-webpack-plugin`
- webpack 开发服务器，热更新
  - `npm i -D webpack-dev-server`
- 在 `package.json` 中添加 `"start": webpack serve --open` 脚本
- 在编译前，清空存放编译输出的目录
  - `npm i -D clean-webpack-plugin`
- 

## 导入

- 在 webpack 配置中引入安装好的插件包

## 配置插件

- `plugins` => 数组
  - `new HTMLWebpackPlugin` => 对象
    - `title` => 自定义 title
    - `template` => 自定义模板文件
  - `new CleanWebpackPlugin` => 清空再编译
- `resolve` => 设置引用模块
  - `extensions` => 指定要解析的文件扩展名

