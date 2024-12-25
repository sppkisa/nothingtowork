---
title: redis生产问题追踪
date: 2024-12-24 15:58:39
category: 数据库
tag: 生产技法
sticky: true
star: true
---

## redis

1. 问题：

   - 哨兵模式，一主二从，只有主节点提供**写**服务，从节点仅负责**读**

   - 这样的配置 会让主节点在落库操作失败的时候，`停止写入`，即停止响应客户端请求

     -  stop-writes-on-bgsave-error yes

   - 加之`bgsave`的频率设置的太高导致频繁进行落库

     - save 900 1

     - save 300 10

     - save 60 10000

       以上配置 在300秒内有10个key触发修改，即触发`bgsave`,生产环境数据量大，导致落库时间长，另外频繁的触发阻塞写入

   - 分析下大内存的key？

     > redis-cli -h 127.0.0.1 -p 6379 -a "password" --bigkeys

2. 解决 : 修改`redis.conf`，移除掉**rdb**方式的后台备份，更换为**AOF**方式备份

   - 删除上述save指令
   - 设置`stop-writes-on-bgsave-error`为`no`
   - 设置`appendonly`为`yes`

   

   

   

   

   

   

   

   

   

   

   

   

   

   

   

   









