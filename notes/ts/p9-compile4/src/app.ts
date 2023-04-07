import { hi } from "./m";

let a = 10;

console.log(hi);

console.log(a);

function fn(a: number, b: number) {
  return a + b;
}

function fn2(this: Window) {
  alert(this);
}

// strictNullChecks
let box1 = document.getElementById('box1');

// if (box1 !== null) {
//   box1.addEventListener('click', function() {
//     alert('hello');
//   })
// }

// 简化
box1?.addEventListener('click', function() { alert('hello'); })
