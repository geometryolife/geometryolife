// === 字面量 ===
// 可以直接使用字面量进行类型声明
var a;
// 联合类型
var b;
b = "male";
b = "female";
// c = "unknow";
var c;
c = true;
c = 'hello';
c = 'world';
// === any ===
var d; // 显式声明
var id; // 隐式声明
d = 10;
d = 'hello';
d = true;
id = 1;
id = 'world';
// unknown
var e;
e = 10;
e = "hello";
e = true;
var s;
// d 是 any，它可以赋值给任意变量，any 不好之处
s = d;
e = 'hello';
// s is string, e is unkonwn 类型不匹配，报错
s = e;
