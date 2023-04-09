(function() {
  // 定义一个表示人的类
  class Person {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
      this._name = name;
      this._age = age;
    }

    // // 定义 getName 方法，用来获取 name 属性
    // getName() {
    //   return this._name;
    // }

    // // 定义 setName 方法，用来设置 name 属性
    // setName(value: string) {
    //   this._name = value;
    // }

    // getAge() {
    //   return this._age;
    // }

    // setAge(value: number) {
    //   // 判断年龄是否合法
    //   if (value >= 0) {
    //     this._age = value;
    //   }
    // }

    // TS 中设置 getter 方法的方式
    get name() {
      console.log('get name() 执行了！');
      return this._name;
    }

    set name(value: string) {
      this._name = value;
    }

    get age() {
      return this._age;
    }

    set age(value: number) {
      if (value >= 0) {
        this._age = value;
      }
    }
  }

  const per = new Person('孙悟空', 18);

  // 现在属性是在对象中设置的，属性可以任意修改
  // per._name = '猪八戒';
  // per._age = -30;

  // per.setName('猪八戒');
  // per.setAge(-33);

  // console.log(per.getName());
  // console.log(per.getAge());

  per.name = '猪八戒';
  console.log(per.name);

  per.age = 30;
  console.log(per.age);

  class A {
    // private num: number;
    protected num: number;

    constructor(num: number) {
      this.num = num;
    }
  }

  class B extends A {
    test() {
      console.log(this.num);
    }
  }

  const b = new B(123);
  // 被 protected 保护的属性只能在类里访问，不能被实例访问
  // b.num = 33;

  // class C {
  //   name: string;
  //   age: number;

  //   constructor(name: string, age: number) {
  //     this.name = name;
  //     this.age = age;
  //   }
  // }

  // 省去写构造函数的方法
  class C {
    constructor(public name: string, public age: number) {
      // 同时省去了写 this
    }
  }
})();
