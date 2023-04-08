(function() {
  class Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello() {
      console.log('动物在叫～');
    }
  }

  class Dog extends Animal {
    age: number;

    constructor(name: string, age: number) {
      super(name); // 调用父类的构造函数
      this.age = age;
    }
    sayHello(): void {
      // 在类的方法中，super 表示当前类的父类
      super.sayHello();
    }
  }

  const dog = new Dog('旺财', 3);
  dog.sayHello();
  console.log(dog);
})();
