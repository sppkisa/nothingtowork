import { arraySidebar } from "vuepress-theme-hope";
import { buildSimpleNavObj } from "./util";

export default arraySidebar([
  buildSimpleNavObj("数据库概论"),
  {
    text: "MySQL",
    prefix: "MySQL/",
    collapsible: true,
    icon: "mysql",
    children: [
      buildSimpleNavObj("安装使用及维护"),
      buildSimpleNavObj("schema"),
      buildSimpleNavObj("SQL语法"),
      buildSimpleNavObj("SQL语言"),
      buildSimpleNavObj("索引"),
      buildSimpleNavObj("事务"),
      buildSimpleNavObj("全文本搜索"),
      buildSimpleNavObj("视图"),
      buildSimpleNavObj("存储过程、游标、触发器"),
      buildSimpleNavObj("MySQL调优"),
    ]
  },
  {
    text: "mongoDB",
    prefix: "mongoDB/",
    collapsible: true,
    icon: "mongodb",
    children: [
      buildSimpleNavObj("概念解析"),
    ]
  },
  {
    text: "Redis",
    prefix: "Redis/",
    collapsible: true,
    icon: "redis",
    children: [
      buildSimpleNavObj("踏入山门"),
      buildSimpleNavObj("数据类型"),
      buildSimpleNavObj("Redis命令"),
      buildSimpleNavObj("配置文件"),
      buildSimpleNavObj("发布-订阅"),
      buildSimpleNavObj("Stream消息队列"),
      buildSimpleNavObj("Redis事务"),
      buildSimpleNavObj("Redis持久化"),
      buildSimpleNavObj("Redis集群与分布式锁"),
      buildSimpleNavObj("Redis缓存问题"),
      buildSimpleNavObj("Jedis"),
    ]
  },
  {
    text: "Elasticsearch",
    prefix: "Elasticsearch/",
    collapsible: true,
    icon: "elasticsearch",
    children: [
      buildSimpleNavObj("概述"),
      buildSimpleNavObj("DSL"),
      buildSimpleNavObj("RestAPI"),
      buildSimpleNavObj("自动补全"),
      buildSimpleNavObj("数据同步"),
      buildSimpleNavObj("ES集群"),
    ]
  },
]);
