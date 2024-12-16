
import { arraySidebar } from "vuepress-theme-hope";
import { buildSimpleNavObj, FOLDER_ICON } from "./util";

export default arraySidebar([
  {
    text: "Web后端基础",
    prefix: "Web后端基础/",
    collapsible: true,
    icon: "backend-dev",
    children: [
      buildSimpleNavObj("Web请求过程"),
      buildSimpleNavObj("Tomcat"),
      buildSimpleNavObj("Servlet"),
      buildSimpleNavObj("请求与响应"),
      buildSimpleNavObj("ServletContext"),
      buildSimpleNavObj("会话技术"),
      buildSimpleNavObj("JSP"),
      buildSimpleNavObj("Filter"),
      buildSimpleNavObj("Listener"),
      buildSimpleNavObj("中文编码问题"),
      buildSimpleNavObj("MVC开发模式"),
      buildSimpleNavObj("JDBC简介"),
    ]
  },
  {
    text: "Spring",
    prefix: "Spring/",
    collapsible: true,
    icon: "spring",
    children: [
      buildSimpleNavObj("IoC-上"),
      buildSimpleNavObj("IoC-下"),
      buildSimpleNavObj("配置-XML"),
      buildSimpleNavObj("配置-注解"),
      buildSimpleNavObj("配置-代码"),
      buildSimpleNavObj("AOP-上"),
      buildSimpleNavObj("AOP-下"),
      buildSimpleNavObj("贯通"),
      buildSimpleNavObj("Spring+Junit"),
      buildSimpleNavObj("Spring-JdbcTemplate"),
    ]
  },
  {
    text: "SpringMVC",
    prefix: "SpringMVC/",
    collapsible: true,
    icon: "MVC",
    children: [
      buildSimpleNavObj("SpringMVC简介"),
      buildSimpleNavObj("接收请求与设置响应"),
      buildSimpleNavObj("转换、过滤、拦截、异常"),
      buildSimpleNavObj("SpringMVC的主要注解"),
      buildSimpleNavObj("案例：文件上传"),
    ]
  },
  {
    text: "MyBatis",
    prefix: "MyBatis/",
    collapsible: true,
    icon: "mybatis",
    children: [
      buildSimpleNavObj("持久层技术"),
      buildSimpleNavObj("MyBatis入门"),
      buildSimpleNavObj("MyBatis的API"),
      buildSimpleNavObj("SqlMapConfig.xml"),
      buildSimpleNavObj("XxxMapper.xml"),
      buildSimpleNavObj("MyBatis集成于DAO层"),
      buildSimpleNavObj("动态代理开发"),
      buildSimpleNavObj("MyBatis注解开发"),
      buildSimpleNavObj("MyBatis缓存结构"),
      buildSimpleNavObj("MyBatis逆向工程"),
      buildSimpleNavObj("SSM整合"),
    ]
  },
  {
    text: "SpringBoot",
    prefix: "SpringBoot/",
    collapsible: true,
    icon: "spring-boot",
    children: [
      buildSimpleNavObj("踏入山门"),
      buildSimpleNavObj("SpringBoot配置"),
      buildSimpleNavObj("集成其他框架"),
      buildSimpleNavObj("远程调试"),
    ]
  },
  {
    text: "SpringCloud",
    prefix: "SpringCloud/",
    collapsible: true,
    icon: "spring-cloud",
    children: [
      buildSimpleNavObj("RestTemplate"),
      buildSimpleNavObj("OpenFeign"),
      buildSimpleNavObj("Config"),
      buildSimpleNavObj("Zookeeper"),
      buildSimpleNavObj("Gateway"),
      buildSimpleNavObj("Stream"),
      buildSimpleNavObj("RabbitMQ", "rabbitmq"),
      {
        text: "Netflix",
        prefix: "Netflix/",
        collapsible: true,
        icon: FOLDER_ICON,
        children: [
          buildSimpleNavObj("Eureka"),
          buildSimpleNavObj("Ribbon"),
          buildSimpleNavObj("Zuul"),
        ]
      },
      {
        text: "Alibaba",
        prefix: "Alibaba/",
        collapsible: true,
        icon: FOLDER_ICON,
        children: [
          buildSimpleNavObj("Nacos"),
        ]
      },
    ]
  },
  {
    text: "SpringData",
    prefix: "SpringData/",
    collapsible: true,
    icon: "spring-data",
    children: [
      buildSimpleNavObj("JPA基础"),
      buildSimpleNavObj("SpringData-JPA"),
      buildSimpleNavObj("SpringData-MongoDB"),
    ]
  },
  {
    text: "SpringSecurity",
    prefix: "SpringSecurity/",
    collapsible: true,
    icon: "security-1",
    children: [
      buildSimpleNavObj("踏入山门"),
      buildSimpleNavObj("认证"),
      buildSimpleNavObj("授权"),
      buildSimpleNavObj("自定义异常处理"),
    ]
  },
  {
    text: "Web安全",
    prefix: "Web安全/",
    collapsible: true,
    icon: "security",
    children: [
      buildSimpleNavObj("认证与授权"),
      buildSimpleNavObj("JWT"),
      buildSimpleNavObj("OAuth2.0"),
      buildSimpleNavObj("数据脱敏"),
    ]
  },
  {
    text: "其他",
    prefix: "其他/",
    collapsible: true,
    icon: "other-tech",
    children: [
      buildSimpleNavObj("YAML概述", "yaml"),
      buildSimpleNavObj("Swagger", "swagger"),
      buildSimpleNavObj("前后端交互", "interactive"),
      buildSimpleNavObj("RESTful", "restful"),
    ]
  },
]);
