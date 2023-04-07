// 声明变量 a，同时指定类型为 number
let a: number;

// a 设置了 number，使用过程中 a 只能是数字
a = 10;
a = 33;
// a = 'hello'; // a 是 number，不能赋值字符串
let b: string;
b = 'hello';
// b = 123;

// 声明变量同时赋值
let c: boolean = false;

c = true;

// c = 123;

let d = false;

// JS 函数不考虑参数类型和个数
// function sum(a, b) {
//   return a + b;
// }

// // console.log(sum(123, 456)); // 579
// console.log(sum(123, "456")); // "123456"

function sum(a: number, b: number): number {
  return a + b;
}

// sum(123, "456");
let result = sum(123, 456);