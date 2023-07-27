# MoveOS 标准库源码笔记

## 存储上下文模块

```text
~/i/rooch/moveos/moveos-stdlib/moveos-stdlib/sources/storage_context.move
```

`StorageContext` 是 `StorageAbstraction` 的一部分，用于为存储操作提供上下文，对存储进行抽象，让开发者可以自定义存储

有关全局存储上下文的信息我们不能将 StorageContext 放入 TxContext，因为 `object` 模块依赖于 `tx_context` 模块，而 `storage_context` 模块也依赖于 `object` 模块。为了方便开发者，我们将 TxContext 放到 StorageContext 中。StorageContext 不能是 `drop` 或 `store`，因此开发人员需要将 `&StorageContext` 或 `&mut StorageContext` 传递给 `entry` 函数。

### 结构

```move
struct StorageContext {
    tx_context: TxContext,
    /// The Global Object Storage
    object_storage: ObjectStorage,
}
```

`StorageContext` 包含 `TxContext` 和 `ObjectStorage` 两个字段，对交易上下文和对象存储进行封装。

### 函数

#### tx_context 和 tx_context_mut

```move
public fun tx_context(self: &StorageContext): &TxContext {
    &self.tx_context
}
```

```move
public fun tx_context_mut(self: &mut StorageContext): &mut TxContext {
    &mut self.tx_context
}
```

从存储上下文中获取交易上下文的引用，`tx_context` 函数获取的是不可变的引用，无法对交易上下文的相关属性进行修改；`tx_context_mut` 函数获取的是可变的引用，可以对交易上下文中的属性进行修改。

#### object_storage 和 object_storage_mut

```move
public fun object_storage(self: &StorageContext): &ObjectStorage {
    &self.object_storage
}
```

```move
public fun object_storage_mut(self: &mut StorageContext): &mut ObjectStorage {
    &mut self.object_storage
}
```

从存储上下文中获取对象存储的引用，`object_storage` 函数获取的是不可变的引用，无法对对象存储的相关属性进行修改；`object_storage_mut` 函数获取的是可变引用，可以对对象存储中的属性进行修改。

### 包装函数

`storage_context` 模块包含了几个对 `tx_context` 模块中的函数的包装。

#### sender

```move
public fun sender(self: &StorageContext): address {
    tx_context::sender(&self.tx_context)
} 
```

`sender` 函数接收一个存储上下文的不可变引用，并返回签署当前交易的用户的地址。

#### fresh_address

```move
public fun fresh_address(self: &mut StorageContext): address {
    tx_context::fresh_address(&mut self.tx_context)
}
```

`fresh_address` 函数接收一个存储上下文的可变引用，并返回一个新生成的唯一的地址。

#### fresh_object_id

```move
public fun fresh_object_id(self: &mut StorageContext): ObjectID {
    tx_context::fresh_object_id(&mut self.tx_context)
}
```

`fresh_object_id` 函数接收一个存储上下文的可变引用，并返回一个新生成的唯一的对象 ID。

#### add

```move
/// Add a value to the context map
public fun add<T: drop + store + copy>(self: &mut StorageContext, value: T) {
    tx_context::add(&mut self.tx_context, value); 
}
```

`add` 函数接收一个存储上下文的可变引用和一个要添加到交易上下文的键-值映射值。

#### get

```move
/// Get a value from the context map
public fun get<T: drop + store + copy>(self: &StorageContext): Option<T> {
    tx_context::get(&self.tx_context)
}
```

`get` 函数接收一个存储上下文的不可变引用，并返回一个从交易上下文中获取的映射值。

#### tx_hash

```move
public fun tx_hash(self: &StorageContext): vector<u8> {
    tx_context::tx_hash(&self.tx_context)
} 
```

`tx_hash` 函数接收一个存储上下文的不可变引用，并返回当前交易的哈希值，类型是 `u8` 类型的向量。

### 单元测试

#### new_test_context

```move
#[test_only]
/// Create a StorageContext and AccountStorage for unit test
public fun new_test_context(sender: address): StorageContext {
    let tx_context = tx_context::new_test_context(sender);
    let object_storage = object_storage::new_with_id(object_storage::global_object_storage_handle());
    StorageContext {
        tx_context,
        object_storage,
    }
}
```

创建 StorageContext 用于单元测试，`new_test_context` 函数只用于测试，它接收一个 `address` 类型的参数，并返回一个存储上下文。

函数首先调用 `tx_context::new_test_context` 函数来创建一个交易上下文，再调用 `object_storage::new_with_id` 函数来创建一个对象存储，最后将两者放进结构体里，并将其返回。

#### drop_test_context

```move
#[test_only]
/// Testing only: allow to drop oject storage
public fun drop_test_context(self: StorageContext) {
    test_helper::destroy<StorageContext>(self);
}
```
