// === 字面量 ===
// 可以直接使用字面量进行类型声明

let a: string;

// 联合类型
let b: "male" | "female";
b = "male";
b = "female";
// c = "unknow";

let c: boolean | string;
c = true;
c = 'hello';
c = 'world';

// === any ===
let d: any; // 显式声明
let id; // 隐式声明

d = 10;
d = 'hello';
d = true;

id = 1; id = 'world';

// === unknown ===
let e: unknown;
e = 10;
e = "hello";
e = true;

let s: string;

// d 是 any，它可以赋值给任意变量，any 不好之处
s = d;

e = 'hello';
// s is string, e is unkonwn 类型不匹配，报错
// s = e;
d = e;

if (typeof e === "string") {
  s = e;
}

// 类型断言
s = e as string;
s = <string>e;

// === void ===
function fnn(): number {
  return 123;
}

function fnb(): boolean {
  return true;
}

// 自动判断类型
function fn() {
}

function fnt(num) {
  if (num > 0) {
    return true;
  } else {
    return 123;
  }
}

// function fn2(): string | number{
// }


function fn3(): void {
  // return; // 正常
  // return undefined; // 可
  // return null; // 不可
}

// === never ==
// function fn4(): never {
// }

// 代码报错，代码立即结束，没有可用的返回值
function fn4(): never {
  throw new Error('报错了！');
}