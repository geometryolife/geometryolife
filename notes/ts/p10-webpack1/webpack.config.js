// 引入一个包
const path = require('path');

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
  }
}
