# Part 1 - Practice with AWS CLI

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
/aws-cli/item/update-item   
```

### 5. 读取数据: 根据主键读取数据
```
./aws-cli/item/get-item
```

### 6. 查询数据: 根据分区键查询数据
```
./aws-cli/item/query-data 
```

### 7. 扫描数据: 全表扫描, 根据memberName过滤数据
```
./aws-cli/item/scan-data
```

### 8. 创建GSI: 对memberName创建全局二级索引
```
./aws-cli/table/create-GSI
```

### 9. 查询GSI: 根据memberName查询数据
```
./aws-cli/item/query-data-with-GSI
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

# Part 2 - Questions & Answers

### 1. 以下哪种是NoSql数据库? 

A. 图数据库 \
B. 键-值存储库  \
C. 列式数据库 \
D. 文档数据库 \

答: A,B,C,D

### 2. 下面哪些场景SQL不能发挥作用?

A. 数据量非常大,无法把它存在同一个地方 \
B. 数据不是结构化的 \
C. 关系模型不需要一个明确定义的schema \

答: C

### 3. DynamoDB有哪两种类型的主键?
DynamoDB 支持两种不同类型的主键：

- 分区键 – 由一个名为 partition key 的属性构成的简单主键, 也是一个HASH KEY。
  
  DynamoDB 使用分区键的值作为内部散列函数的输入。来自散列函数的输出决定了项目将存储到的分区 (DynamoDB 内部的物理存储)。
  
  在只有分区键的表中，任何两个项目都不能有相同的分区键值。


- 分区键和排序键 – 称为复合主键，此类型的键由两个属性组成。第一个属性是分区键，第二个属性是排序键。
  
  具有相同分区键值的所有项目按排序键值的排序顺序存储在一起。

  在具有分区键和排序键的表中，两个项目可能具有相同的分区键值。但是，这两个项目必须具有不同的排序键值。

### 4. 主键不支持的数据类型?

A. string \
B. number \
C. binary \
D. array  \

答: D

### 5. DynamoDB支持哪两种类型的索引,这两种索引的区别是什么?

- DynamoDB 支持两种索引：

  - 全局二级索引(Global secondary index): 一种带有可能与表中不同的分区键和排序键的索引。
    - 分区键与基表相同但排序键不同的索引。本地二级索引之所以称为“本地”，是因为该索引的每个分区的范围都限定为具有相同分区键值的基表分区。因此，对于任何一个分区键值，索引项目的大小总和不得超过 10GB。此外，本地二级索引与其索引的表共享用于读取和写入活动的预配置吞吐量设置。

  - 本地二级索引(Local secondary index): 分区键与表中的相同但排序键与表中的不同的索引。
    - 分区键和排序键可与基表中的这些键不同的索引。全局二级索引之所以称为“全局”，这是因为该索引上的查询可跨过所有分区，涵盖基表中的所有数据。全局二级索引没有大小限制且具有其自己的读取和写入活动的预配置吞吐量设置，这些设置独立于表的相应设置。

- DynamoDB 中的每个表具有 20 个全局二级索引（默认限制）和 5 个本地二级索引的限制。
- 一般来说，应使用全局二级索引而不是本地二级索引。例外情况是当在查询结果中需要强一致性时，在这种情况下，本地二级索引可提供强一致性但全局二级索引无法提供 (全局二级索引查询仅支持最终一致性)。