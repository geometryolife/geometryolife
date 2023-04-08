(function() {
  abstract class Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    // 定义一个抽象方法
    abstract sayHello(): void;
  }

  class Dog extends Animal {
    sayHello() {
      console.log('汪汪汪');
    }
  }

  // class Cat extends Animal {
  // }

  const dog = new Dog('旺财');
  dog.sayHello();

  // 不能实例化抽象类
  // const an = new Animal();
})();
