(function() {
  // 定义一个表示动物的类
  class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    sayHello() {
      console.log('动物在叫～');
    }
  }

  // 定义一个表示狗的类
  class Dog extends Animal {
    run() {
      console.log(`${this.name}在跑～`);
    }

    sayHello() {
      console.log('汪汪汪！');
    }
  }

  // class Dog {
  //   name: string;
  //   age: number;

  //   constructor(name: string, age: number) {
  //     this.name = name;
  //     this.age = age;
  //   }

  //   sayHello() {
  //     console.log('汪汪汪');
  //   }
  // }

  // 定义一个表示猫的类
  class Cat extends Animal {
    sayHello() {
      console.log('喵喵～');
    }
  }

  // class Cat {
  //   name: string;
  //   age: number;

  //   constructor(name: string, age: number) {
  //     this.name = name;
  //     this.age = age;
  //   }

  //   sayHello() {
  //     console.log('喵喵');
  //   }
  // }

  const dog = new Dog('旺财', 5);
  const cat = new Cat('咪咪', 3);
  console.log(dog);
  dog.sayHello();
  dog.run();
  console.log(cat);
  cat.sayHello();
})();
