- `std::bcs` 将 Move 的值转换为 BCS（二进制规范序列化）中二进制的表示形式，没有提供反序列化的能力，需要通过扩展库 `moveos_std::bcs`
  - `to_bytes` 传入 Move 值，返回 BCS 格式的二进制值
- `std::vector` 可以容纳任何类型的可变大小容器。索引是从 0 开始的，并且向量是可以增长的。
  - `empty` 返回空向量
  - `singleton` 返回一个大小为 1 且包含元素“e”的向量。
- `std::option` 该模块定义了 Option 类型及其方法来表示和处理可选值。
  - `struct Option<Element> has copy, drop, store` 字段是 `vec: vector<Element>` 一个泛型向量
  - `some` 传递一个元素，调用了 `vector::singleton`，并将这个单元向量用 Option 包裹起来，返回的就是一个 Option 的结构体
  - `none` 返回一个空的 Option 结构体，字段是空向量，通过包装的 `std::vector::empty` 获取


--------------------------------------------------------------------------------

## Rooch

- `moveos_std::bcs` 提供 `std::bcs` 的反向操作（反序列化）
  - `to_bytes` 同标准库，`std::bcs::to_bytes` 直接包装
  - `public native fun from_bytes<MoveValue>(bytes: vector<u8>): MoveValue;`
  - `to_bool` 二进制值转为布尔值
  - `to_u8`
  - `to_u64`
  - `to_u128`
  - `to_address`
- `moveos_std::storage_context` StorageContext 是 StorageAbstraction 的一部分，用于为存储操作提供上下文，对存储进行抽象，让开发者可以自定义存储
  - `StorageContext` 有关全局存储上下文的信息，我们不能将StorageContext放入TxContext，因为对象模块依赖于tx_context模块，而storage_context模块又依赖于对象模块。为了方便开发者，我们将TxContext放到StorageContext中。StorageContext 不能是 `drop` 或 `store`，因此开发人员需要将 `&StorageContext` 或 `&mut StorageContext` 传递给 `entry` 函数。
    - `tx_context: TxContext,`
      - 交易上下文包含：签名当前交易的地址、当前交易哈希、计数器记录执行此事务时创建的新 ID 的数量。事务开始时始终为 0，`map: SimpleMap<String, Any>,` 可用于存储上下文信息的键值映射
      - 有关当前正在执行的交易的信息。它不能由事务构造 - 它是由 VM 创建的特权对象，并作为“&mut TxContext”传递到事务的入口点。
    - `object_storage: ObjectStorage,` 全局对象存储
  - `tx_context` 获取 `StorageContext` 中的 `TxContext` 不可变引用
  - `tx_context_mut` 同上，可变引用
  - `object_storage` 获取 `StorageContext` 中的 `ObjectStorage` 不可变引用
  - `object_storage_mut` 同上，可变引用
  - `sender` 从存储上下文中获取地址，这里开始都是对交易上下文函数的包装
    - `tx_context::sender(&self.tx_context)`
  - `fresh_address` 生成一个新的唯一的地址
  - `fresh_object_id` 生成一个新的唯一的对象 ID
  - `tx_hash` 返回当前交易的哈希
  - `add` 添加值到交易上下文 map，是交易上下文的封装方法
  - `get` 同上，获取值
- `moveos_std::event` EventHandle 具有唯一的事件句柄 ID (GUID)。它包含一个计数器，用于记录它生成的“EventHandle”的数量。 `EventHandle` 用于计算发送到句柄的事件数量并将事件发送到事件存储。
- `moveos_std::object_storage` 对象存储
  - `struct ObjectStorage has store` 字段只有一个 `ObjectID`
- `moveos_std::object_id` 对象 ID
  - `struct ObjectID has store, copy, drop` 字段只是一个地址
- `moveos_std::object` Rooch Move 对象，跟 Sui 的不同
  - `struct Object<T>` 字段有对象 ID、对象拥有者的地址、对象的值
