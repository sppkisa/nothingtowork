---
title: redis生产问题追踪
date: 2024-12-24 15:58:39
category: redis
tag: 生产技法
sticky: true
star: true
---

## redis

### 基础命令：

1. 如果没有挂接日志输出文件，而是直接输出到控制台，可以通过查看进程id，输出对应进程的日志：

   ```
   ps aux | grep redis
   grep -f /proc/<pid>/fd/1
   ```

2. 问题：

   - 哨兵模式，一主二从，只有主节点提供**写**服务，从节点仅负责**读**

   - 这样的配置 会让主节点在落库操作失败的时候，停止写入，即停止响应客户端请求

     -  stop-writes-on-bgsave-error no

   - 加之`bgsave`的频率设置的太高导致频繁进行落库

   - 分析下大内存的key？

     ```
     redis-cli -h 127.0.0.1 -p 6379 -a "password" --bigkeys
     ```

     

   









