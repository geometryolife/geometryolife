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
    filename: "bundle.js",
    // 告诉 webpack 不使用箭头函数
    environment: {
      arrowFunction: false
    }
  },
  module: {
    rules: [
      {
        // 匹配所有以 .ts 结尾的文件
        test: /\.ts$/,
        use: [
          // babel 配置
          {
            // 指定加载器
            loader: "babel-loader",
            // 设置 babel
            options: {
              // 设置预定义的环境
              presets: [
                [
                  // 指定环境的插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      "chrome": "88",
                      "ie": "11",
                    },
                    // 指定 corejs 的版本
                    "corejs": "3",
                    // 使用 corejs 的方式，usage 表示按需加载
                    "useBuiltIns": "usage",
                  }
                ]
              ]
            }
          },
          // 用 ts-loader 处理 .ts 文件
          'ts-loader'
        ],
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
