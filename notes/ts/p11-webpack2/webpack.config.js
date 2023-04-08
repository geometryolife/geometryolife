// 引入一个包
const path = require('path');
// 引入 html 插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
// 引入 clean 插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        // 匹配所有以 .ts 结尾的文件
        test: /\.ts$/,
        // 用 ts-loader 处理 .ts 文件
        use: 'ts-loader',
        // 要排除的文件
        exclude: /node-modules/
      }
    ]
  },
  // 配置 webpack 插件
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      // title: "这是一个自定义的 title"
      template: "./src/index.html"
    }),
  ],
  // 设置引用模块
  resolve: {
    extensions: ['.ts', '.js']
  }
}
