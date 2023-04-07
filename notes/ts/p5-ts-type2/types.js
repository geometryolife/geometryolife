// === object ===
var a;
a = {};
a = function () { };
// let b: {};
var b;
b = { name: '孙悟空' };
// 属性数量必须匹配
// b = { name: '孙悟空', age: 18 };
// 属性可选
var b2;
b2 = { name: 'Joe' };
// JS 中属性名实际是一个字符串
var c;
c = { name: 'Tom', age: 18, gender: '男' };
var c2;
c2 = { name: 'Tom', age: '18', gender: '男' };
// 限制有几个参数，返回值是什么类型
// 箭头函数
var d;
d = function (n1, n2) {
    return n1 + n2;
};
//参数数量不匹配
// d = function(n1: number, n2: number, n3): number {
//   return n1 + n2;
// }
// 参数类型不匹配
// d = function(n1: string, n2: string): number {
//   return 10;
// }
// === array ===
var e;
e = ['a', 'b', 'c'];
var f;
f = [1, 2, 3];
var g;
g = [1, 2, 3];
// g = [1, 2, 3, 'number'];
// === tuple ===
var h;
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
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: 'Joe',
    gender: Gender.Male // 'male'
};
console.log(i.gender === Gender.Male);
// === & ===
var j;
// j = { name: 'Joe' }
j = { name: 'Joe', age: 18 };
var k;
var l;
var m;
// k = 6;
k = 5;
