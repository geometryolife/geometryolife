# TS 编译选项（4）

## 语法检查相关的编译器选项

### alwaysStrict

- 设置编译后的文件是否使用严格模式，默认 `false`
- JS 中严格模式，语法严格，浏览器中的执行性能好些，通常会使用
- JS 文件开头添加 `"use strict";`
- 注意，如果使用模块，即使用 `import`，代码默认是严格模式，所以编译后不会再添加

### noImplicitAny

- 是否允许隐式的 `any` 类型，默认 `false`

### noImplicitThis

- 是否允许不明确类型的 `this`，默认 `false`
- 函数的 `this` 跟函数的调用方式有关
  - 前提：普通模式
  - 函数形式调用 => `this` 是 `window`
  - 方法形式调用 => `this` 是调用方法的对象

### strictNullChecks

- 是否严格检查空值，默认 `false`
- 举例判断 DOM 元素是否存在，使用了 `?` 来简化

### strict

- 所有严格检查的总开关，默认 `false`
- 建议都设置为 `true`，将个别不需要的严格检查设置为 `false`
