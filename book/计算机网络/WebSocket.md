---
title: WebSocket
---

## 1. 概述

### 1.1 为什么需要 WebSocket ？

WebSocket 是一种网络通信协议，[RFC6455](https://tools.ietf.org/html/rfc6455) 定义了它的通信标准。WebSocket 是 HTML5 开始提供的一种在单个 TCP 连接上进行全双工通讯的协议。

由于 HTTP 协议是一种无状态的、无连接的、单向的应用层协议，它采用了请求/响应模型，通信请求只能由客户端发起，服务端对请求做出应答处理。举例来说，我们想了解今天的天气，只能是客户端向服务器发出请求，服务器返回查询结果，HTTP 协议做不到服务器主动向客户端推送信息。

这便是 HTTP 的一个弊端：HTTP 协议无法实现服务器主动向客户端发起消息。这种单向请求的特点，注定了如果服务器有连续的状态变化，客户端要获知就非常麻烦——我们只能使用**轮询**：每隔一段时候，就发出一个询问，了解服务器有没有新的信息（最典型的场景就是聊天室）。

而轮询的效率低，非常浪费资源（因为必须不停连接，或者 HTTP 连接始终打开）。因此，WebSocket 应运而生。WebSocket 连接允许客户端和服务器之间进行全双工通信，以便任一方都可以通过建立的连接将数据推送到另一端，并且 WebSocket 只需要建立一次连接，就可以一直保持连接状态，这相比于轮询方式的不停建立连接显然效率要大大提高。

![](https://figure-bed.chua-n.com/JavaWeb/其他/1.png)

### 1.2 WebSocket 如何工作？

WebSocket 协议在 2008 年诞生，2011 年成为国际标准，现在所有浏览器都已经支持了。

它的最大特点就是，服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于 [服务器推送技术](https://en.wikipedia.org/wiki/Push_technology) 的一种。

其他特点包括：

- 建立在 TCP 协议之上，服务器端的实现比较容易。
- 与 HTTP 协议有着良好的兼容性——默认端口也是 80 和 443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。
- 数据格式比较轻量，性能开销小，通信高效。
- 可以发送文本，也可以发送二进制数据。
- 没有同源限制，客户端可以与任意服务器通信。
- 协议标识符是`ws`（如果加密，则为`wss`），服务器网址就是 URL，如`ws://example.com:80/some/path`

![](https://figure-bed.chua-n.com/JavaWeb/其他/2.jpg)

## 2. WebSocket 客户端

在客户端，没有必要为 WebSocket 使用 JavaScript 库，实现 WebSocket 的 Web 浏览器将通过 WebSocket 对象公开所有必需的客户端功能（主要指支持 Html5 的浏览器）。

### 2.1 创建 WebSocket 对象

```js
// 第一个参数 url 指定连接的 URL，第二个参数 protocol 是可选的，指定可接受的子协议
var socket = new WebSocket(url, [protocol] );
```

### 2.2 WebSocket 对象的属性

| 属性             | 描述                                                         |
| ---------------- | ------------------------------------------------------------ |
| `readyState`     | 只读属性 `readyState` 表示连接状态，可以是以下值：<br />CONNECTING：值为 0，表示正在连接。<br />OPEN：值为 1，表示连接成功，可以通信了。<br />CLOSING：值为 2，表示连接正在关闭。<br />CLOSED：值为 3，表示连接已经关闭，或者打开连接失败。 |
| `bufferedAmount` | 只读属性 `bufferedAmount` 表示已被 `send()` 放入正在队列中等待传输，但是还没有发出的 UTF-8 文本字节数。 |

### 2.3 WebSocket 事件

以下是 WebSocket 对象的相关事件：

| 事件    | 事件处理程序       | 描述                       |
| ------- | ------------------ | -------------------------- |
| open    | `socket.onopen`    | 连接建立时触发             |
| message | `socket.onmessage` | 客户端接收服务端数据时触发 |
| error   | `socket.onerror`   | 通信发生错误时触发         |
| close   | `socket.onclose`   | 连接关闭时触发             |

### 2.4 WebSocket 方法

| 方法             | 描述             |
| ---------------- | ---------------- |
| `socket.send()`  | 使用连接发送数据 |
| `socket.close()` | 关闭连接         |

### 2.5 示例

```js
// 初始化一个 WebSocket 对象
var ws = new WebSocket('ws://localhost:9998/echo');

// 建立 web socket 连接成功触发事件
ws.onopen = function() {
  // 使用 send() 方法发送数据
  ws.send('发送数据');
  alert('数据发送中...');
};

// 接收服务端数据时触发事件
ws.onmessage = function(evt) {
  var received_msg = evt.data;
  alert('数据已接收...');
};

// 断开 web socket 连接成功触发事件
ws.onclose = function() {
  alert('连接已关闭...');
};
```

## 3. WebSocket 服务端

WebSocket 在服务端的实现非常丰富，Node.js、Java、C++、Python 等多种语言都有自己的解决方案。

Java 的 web 一般都依托于 servlet 容器，其中 Tomcat7、Jetty7 及以上版本均开始支持 WebSocket（推荐较新的版本，因为随着版本的更迭，对 WebSocket 的支持可能有变更）。此外，Spring 框架对 WebSocket 也提供了支持。

尽管以上应用对于 WebSocket 都有各自的实现，但是它们都遵循 [RFC6455](https://tools.ietf.org/html/rfc6455) 的通信标准，并且 Java API 统一遵循 [JSR 356 - JavaTM API for WebSocket ](http://www.jcp.org/en/jsr/detail?id=356) 规范，所以在实际编码中 API 差异不大。

以下介绍 Java 相关的内容。

### 3.1 javax.websocket

javax.websocket 提供了基本的 WebSocket API，其使用方式见下。

#### jar 包

首先，需要引入 API jar 包。

```xml
<!-- To write basic javax.websocket against -->
<dependency>
  <groupId>javax.websocket</groupId>
  <artifactId>javax.websocket-api</artifactId>
  <version>1.0</version>
</dependency>
```

> 如果使用嵌入式 jetty，你还需要引入它的实现包：
>
> ```xml
> <!-- To run javax.websocket in embedded server -->
> <dependency>
>   <groupId>org.eclipse.jetty.websocket</groupId>
>   <artifactId>javax-websocket-server-impl</artifactId>
>   <version>${jetty-version}</version>
> </dependency>
> <!-- To run javax.websocket client -->
> <dependency>
>   <groupId>org.eclipse.jetty.websocket</groupId>
>   <artifactId>javax-websocket-client-impl</artifactId>
>   <version>${jetty-version}</version>
> </dependency>
> ```

#### @ServerEndpoint

`@ServerEndpoint` 这个注解用来标记一个类是 WebSocket 的处理器，在该类中使用下面的注解来表明所修饰的方法是触发事件的回调：

```java
// 收到消息触发事件
@OnMessage
public void onMessage(String message, Session session) throws IOException, InterruptedException {
	...
}

// 打开连接触发事件
@OnOpen
public void onOpen(Session session, EndpointConfig config, @PathParam("id") String id) {
	...
}

// 关闭连接触发事件
@OnClose
public void onClose(Session session, CloseReason closeReason) {
	...
}

// 传输消息错误触发事件
@OnError
public void onError(Throwable error) {
	...
}
```

#### ServerEndpointConfig.Configurator

编写完处理器，你需要扩展 `ServerEndpointConfig.Configurator` 类完成配置：

```java
public class WebSocketServerConfigurator extends ServerEndpointConfig.Configurator {
    @Override
    public void modifyHandshake(ServerEndpointConfig sec, HandshakeRequest request, HandshakeResponse response) {
        HttpSession httpSession = (HttpSession) request.getHttpSession();
        sec.getUserProperties().put(HttpSession.class.getName(), httpSession);
    }
}
```

然后就没有然后了，就是这么简单。

### 3.2 Spring

Spring 对于 WebSocket 的支持基于下面的 jar 包：

```xml
<dependency>
  <groupId>org.springframework</groupId>
  <artifactId>spring-websocket</artifactId>
  <version>${spring.version}</version>
</dependency>
```

在 Spring 实现 WebSocket 服务器大概分为以下几步：

#### 创建 WebSocket 处理器

继承 `TextWebSocketHandler` 或 `BinaryWebSocketHandler` ，你可以覆写指定的方法，Spring 在收到 WebSocket 事件时，会自动调用事件对应的方法，例如：

```java
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.TextMessage;

public class MyHandler extends TextWebSocketHandler {

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) {
        // ...
    }

}
```

`WebSocketHandler` 接口源码如下，从中可以看出大概可以处理哪些 WebSocket 事件：

```java
public interface WebSocketHandler {

   /**
    * 建立连接后触发的回调
    */
   void afterConnectionEstablished(WebSocketSession session) throws Exception;

   /**
    * 收到消息时触发的回调
    */
   void handleMessage(WebSocketSession session, WebSocketMessage<?> message) throws Exception;

   /**
    * 传输消息出错时触发的回调
    */
   void handleTransportError(WebSocketSession session, Throwable exception) throws Exception;

   /**
    * 断开连接后触发的回调
    */
   void afterConnectionClosed(WebSocketSession session, CloseStatus closeStatus) throws Exception;

   /**
    * 是否处理分片消息
    */
   boolean supportsPartialMessages();

}
```

#### 配置 WebSocket

配置有两种方式——注解和 xml，其作用就是将 WebSocket 处理器添加到注册中心。

- 注解方式：实现 `WebSocketConfigurer`

    ```java
    import org.springframework.web.socket.config.annotation.EnableWebSocket;
    import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
    import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;
    
    @Configuration
    @EnableWebSocket
    public class WebSocketConfig implements WebSocketConfigurer {
    
        @Override
        public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
            registry.addHandler(myHandler(), "/myHandler");
        }
    
        @Bean
        public WebSocketHandler myHandler() {
            return new MyHandler();
        }
    
    }
    ```

- xml 方式

    ```xml
    <beans xmlns="http://www.springframework.org/schema/beans"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:websocket="http://www.springframework.org/schema/websocket"
        xsi:schemaLocation="
            http://www.springframework.org/schema/beans
            http://www.springframework.org/schema/beans/spring-beans.xsd
            http://www.springframework.org/schema/websocket
            http://www.springframework.org/schema/websocket/spring-websocket.xsd">
    
        <websocket:handlers>
            <websocket:mapping path="/myHandler" handler="myHandler"/>
        </websocket:handlers>
    
        <bean id="myHandler" class="org.springframework.samples.MyHandler"/>
    
    </beans>
    ```

> 更多配置细节可以参考：[Spring WebSocket 文档](https://docs.spring.io/spring/docs/4.3.12.RELEASE/spring-framework-reference/htmlsingle/#websocket)

## 4. WebSocket 代理

如果把 WebSocket 的通信看成是电话连接，Nginx 的角色则像是电话接线员，负责将发起电话连接的电话转接到指定的客服。

Nginx 从 [1.3 版](http://nginx.com/blog/websocket-nginx/) 开始正式支持 WebSocket 代理。如果你的 web 应用使用了代理服务器 Nginx，那么你还需要为 Nginx 做一些配置，使得它开启 WebSocket 代理功能。

以下为参考配置：

```nginx
server {
  # this section is specific to the WebSockets proxying
  location /socket.io {
    proxy_pass http://app_server_wsgiapp/socket.io;
    proxy_redirect off;

    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_read_timeout 600;
  }
}
```

> 更多配置细节可以参考：[Nginx 官方的 websocket 文档](http://nginx.org/en/docs/http/websocket.html)

## 5. FAQ

### HTTP 和 WebSocket 有什么关系？

Websocket 其实是一个新协议，跟 HTTP 协议基本没有关系，只是为了兼容现有浏览器的握手规范而已，也就是说它是 HTTP 协议上的一种补充。

### Html 和 HTTP 有什么关系？

Html 是超文本标记语言，是一种用于创建网页的标准标记语言。它是一种技术标准。Html5 是它的最新版本。

Http 是一种网络通信协议。其本身和 Html 没有直接关系。

## 6. 附：资料

- [WebSocket 详解教程 - 静默虚空 - 博客园 (cnblogs.com)](https://www.cnblogs.com/jingmoxukong/p/7755643.html)
- [知乎高票答案——WebSocket 是什么原理](https://www.zhihu.com/question/20215561) - 对 WebSocket 原理的阐述简单易懂。
- [WebSocket 教程](http://www.ruanyifeng.com/blog/2017/05/websocket.html) - 阮一峰大神的科普一如既往的浅显易懂。
- [WebSockets](https://www.fullstackpython.com/websockets.html) - by *fullstackpython*
- [Nginx 官方的 websocket 文档](http://nginx.org/en/docs/http/websocket.html)
- [Spring WebSocket 文档](https://docs.spring.io/spring/docs/4.3.12.RELEASE/spring-framework-reference/htmlsingle/#websocket)
- [Tomcat7 WebSocket 文档](http://tomcat.apache.org/tomcat-7.0-doc/web-socket-howto.html)
- [Jetty WebSocket 文档](https://www.eclipse.org/jetty/documentation/9.4.7.v20170914/websocket-intro.html)
