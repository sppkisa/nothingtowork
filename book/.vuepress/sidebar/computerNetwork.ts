import { arraySidebar } from "vuepress-theme-hope";
import { FOLDER_ICON, buildSimpleNavObj } from "./util";

export default arraySidebar([
  buildSimpleNavObj("概念引入"),
  buildSimpleNavObj("通信原理"),
  {
    text: "计网体系结构",
    prefix: "计网体系结构/",
    collapsible: true,
    icon: FOLDER_ICON,
    children: [
      buildSimpleNavObj("网络接口层"),
      buildSimpleNavObj("网络层"),
      buildSimpleNavObj("传输层"),
      buildSimpleNavObj("应用层"),
      buildSimpleNavObj("总结"),
    ],
  },
  buildSimpleNavObj("网络加密"),
  buildSimpleNavObj("杂记"),
  {
    text: "HTTP",
    prefix: "HTTP/",
    collapsible: true,
    icon: FOLDER_ICON,
    children: [
      buildSimpleNavObj("HTTP 协议"),
      buildSimpleNavObj("用户身份认证"),
      buildSimpleNavObj("HTTPS"),
      buildSimpleNavObj("基于 HTTP 的追加协议"),
      buildSimpleNavObj("Web 服务器的类型"),
      buildSimpleNavObj("Web 攻击技术"),
    ],
  },
  buildSimpleNavObj("WebSocket"),
]);
