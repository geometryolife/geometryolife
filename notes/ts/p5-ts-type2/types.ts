// === object ===
let a: object;
a = {};
a = function() { };

// let b: {};

let b: { name: string };

b = { name: '孙悟空' };

// 属性数量必须匹配
// b = { name: '孙悟空', age: 18 };

// 属性可选
let b2: { name: string, age?: number };

b2 = { name: 'Joe' };

// JS 中属性名实际是一个字符串
let c: { name: string, [propName: string]: any };
c = { name: 'Tom', age: 18, gender: '男' };

let c2: { name: string, [propName: string]: string };
c2 = { name: 'Tom', age: '18', gender: '男' };

// 限制有几个参数，返回值是什么类型
// 箭头函数
let d: (a: number, b: number) => number;
d = function(n1: number, n2: number): number {
  return n1 + n2;
}

//参数数量不匹配
// d = function(n1: number, n2: number, n3): number {
//   return n1 + n2;
// }

// 参数类型不匹配
// d = function(n1: string, n2: string): number {
//   return 10;
// }

// === array ===
let e: string[];
e = ['a', 'b', 'c'];

let f: number[];
f = [1, 2, 3];

let g: Array<number>;
g = [1, 2, 3];
// g = [1, 2, 3, 'number'];

// === tuple ===
let h: [string, string];
h = ['hello', 'abc'];
// h = ['hello'];
// h = ['hello', 'abc', 123];
// h = ['hello', 123];

// === enum ===
// let i: { name: string, gender: string };
// i = { name: '孙悟空', gender: '男' };

// let i: { name: string, gender: 0 | 1 };
// i = {
//   name: 'Joe',
//   gender: 1 // 'male'
// }
// console.log(i.gender === 1);

enum Gender {
  Male,
  Female
}

let i: { name: string, gender: Gender };
i = {
  name: 'Joe',
  gender: Gender.Male // 'male'
}
console.log(i.gender === Gender.Male);

// === & ===
let j: { name: string } & { age: number };
// j = { name: 'Joe' }
j = { name: 'Joe', age: 18 }

// === Type ===
// type myType = string;
// let k: 1 | 2 | 3 | 4 | 5;
// let l: 1 | 2 | 3 | 4 | 5;
// let m: myType;
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;
let l: myType;
let m: myType;

// k = 6;
k = 5;
