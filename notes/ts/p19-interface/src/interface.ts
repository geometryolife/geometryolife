(function() {
  // 描述一个对象的类型
  type myType = {
    name: string,
    age: number,
  }

  // 不能重复
  // type myType = {}

  // 定义接口
  interface myInterface {
    name: string;
    age: number;
  }

  interface myInterface {
    gender: string;
  }

  // const obj: myType = {
  //   name: 'joe',
  //   age: 18
  // }

  const obj: myInterface = {
    name: 'joe',
    age: 18,
    gender: '男'
  }

  interface myInter {
    name: string;

    sayHello(): void;
  }

  class MyClass implements myInter {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello(): void {
      console.log('大家好～～');
    }
  }

  const mc = new MyClass('Joe');
  console.log(mc.name);
  mc.sayHello();
}
)();
