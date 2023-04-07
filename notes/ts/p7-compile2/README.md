# TS 编译选项（2）

## 编译器选项

- `compileOptions`

### target

- 指定 TS 被编译为的 ES 版本
- `ES3` 比较老，兼容性好
- 现在支持 'es3', 'es5', 'es6', 'es2015', 'es2016', 'es2017', 'es2018', 'es2019', 'es2020', 'es2021', 'es2022', 'esnext'

### module

- 指定要使用的模块化的规范
- 可选值 'none', 'commonjs', 'amd', 'system', 'umd', 'es6', 'es2015', 'es2020', 'es2022', 'esnext', 'node16', 'nodenext'

### lib

- 指定项目中要使用的库

### outDir

- 指定编译后文件所在的目录

### outFile

- 将代码合并为一个文件
- 设置 `outFile` 后，所有的全局作用域中的代码会合并到同一个文件中
- Only 'amd' and 'system' modules are supported alongside --outFile.
  - 要指定 `module` 选项为 `amd` 或 `system` 才不会报错
- 不常用，一般交给打包工具完成
