class Person {
  // 定义实例属性
  // readonly name: string = 'Joe';
  name: string = 'Joe';
  // 定义类属性
  static age: number = 18;

  // 定义实例方法
  sayHello() {
    console.log('Hello 大家好！');
  }
  // 定义类方法
  static howOld() {
    console.log('我 20 啦！');
  }

}

const per = new Person();

console.log(per);
console.log(per.name, Person.age);

// 类属性或静态属性
console.log(Person.age);

console.log(per.name);
per.name = 'tom';
console.log(per.name);

Person.age = 20;
console.log(Person.age);

per.sayHello();

Person.howOld();
