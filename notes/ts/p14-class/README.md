# 类的简介

- 创建对象，需要有类
- 类是对象的抽象，对象是类的实例

## 定义属性

- `class` 关键字用来定义一个类
- 对象包含`属性`和`方法`
- 实例属性
- 类属性或静态属性
  - 使用 `static` 关键字定义的属性
  - 不需要创建对象就可以使用

### 实例属性

- 直接定义的属性，需要通过对象实例去访问
  ```ts
  const per = new Person();
  per.name
  ```

### 类属性（静态属性）

- 使用 `static` 定义的属性，可以直接通过类来访问
  ```ts
  Person.age
  ```

### 只读属性

- 创建对象后，可以修改对象的属性
- 添加 `readonly` 关键字修饰属性，则无法修改
- `static readonly` 静态只读属性

## 定义方法

- `static` 开头，静态方法或类方法 => 直接通过类来调用
- 直接定义的方法是实例方法，创建对象，通过对象调用
