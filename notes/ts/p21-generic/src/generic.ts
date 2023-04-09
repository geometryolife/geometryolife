// function fn(a: any): any {
//   return a;
// }

// 使用泛型，类型 T 只有在执行时才确定
function fn<T>(a: T): T {
  return a;
}

// 隐式类型自动推断 -> number
let ret = fn(10);
// 显式指定泛型类型 -> string
let ret2 = fn<string>('hello');

function fn2<T, K>(a: T, b: K): T {
  console.log(b);
  return a;
}

fn2(123, 'hello');

interface Inter {
  length: number;
}

function fn3<T extends Inter>(a: T): number {
  return a.length;
}

fn3('123');
// fn3(123); // 数字无 length 属性
fn3({ length: 10 }); // length 属性

class MyClass<T>{
  name: T;

  constructor(name: T) {
    this.name = name;
  }
}

const mc = new MyClass('孙悟空');
const mc2 = new MyClass<string>('猪八戒');
