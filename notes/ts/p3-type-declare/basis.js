// 声明变量 a，同时指定类型为 number
var a;
// a 设置了 number，使用过程中 a 只能是数字
a = 10;
a = 33;
// a = 'hello'; // a 是 number，不能赋值字符串
var b;
b = 'hello';
// b = 123;
// 声明变量同时赋值
var c = false;
c = true;
// c = 123;
var d = false;
// JS 函数不考虑参数类型和个数
function sum(a, b) {
    return a + b;
}
console.log(sum(123, 456)); // 579
