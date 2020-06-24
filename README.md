# Practice 1 - AWS CLI

### 1. 创建Table: Project_Yuanyuan, 分区键(KeyType为HASH)为projectName, 排序键(KeyType为Range)为projectType
```
./aws-cli/table/create-table
```

### 2. 更新Table: Project_Yuanyuan, 添加Attribute memberName, startDate
```
./aws-cli/table/update-table
```

### 3. 写入数据: 插入10条数据
```
./aws-cli/item/put-item
./aws-cli/item/batch-write-item
```

### 4. 更新数据: 
```

```

### 5. 读取数据: 根据主键读取数据
```

```

### 6. 查询数据: 根据分区键和排序键查询数据, 通过memberName查询数据
```

```

### 7. 扫描数据: 全表扫描, 根据memberName过滤数据
```

```

### 8. 创建GSI: 对memberName创建全局二级索引
```

```

### 9. 查询GSI: 根据memberName查询数据
```

```

### 10. 删除表: 
```
./aws-cli/table/delete-table
```

### 11. 其他
```
./aws-cli/table/list-tables 
./aws-cli/table/describe-limits 
```

# Questions

### 1. 以下哪种是NoSql数据库?

- 图数据库
- 键-值存储库
- 列式数据库
- 文档数据库

### 2. 下面哪些场景SQL不能发挥作用?

- 数据量非常大,无法把它存在同一个地方
- 数据不是结构化的
- 数据不是结构化的
- DynamoDB有哪两种类型的主键?

### 4. 主键不支持的数据类型?

- string
- number
- binary
- array

### 5. DynamoDB支持哪两种类型的索引,这两种索引的区别是什么?