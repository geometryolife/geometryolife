# MoveOS 标准库源码笔记

## 存储上下文模块

```text
~/i/rooch/moveos/moveos-stdlib/moveos-stdlib/sources/object_storage.move
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

#### 
<++>
