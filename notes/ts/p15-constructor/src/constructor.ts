class Dog {
  // name = '旺财';
  // age = 3;
  name: string;
  age: number;

  // constructor() {
  //   // console.log('构造函数执行了……')
  //   this.name = '旺财';
  //   this.age = 18;
  // }

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  bark() {
    // alert('汪汪汪');
    // 在方法中可以通过 this 来表示当前调用方法的对象
    // console.log(this);
    console.log(this.name);
  }
}

const dog = new Dog('小黑', 4);
const dog2 = new Dog('小白', 2);
// const dog3 = new Dog();
// const dog4 = new Dog();

// console.log(dog);
// console.log(dog2);
// console.log(dog3);
// console.log(dog4);

dog.bark();
