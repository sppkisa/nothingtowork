import { arraySidebar } from "vuepress-theme-hope";
import { buildSimpleNavObj } from "./util";

export default arraySidebar([
  buildSimpleNavObj("web概念概述"),
  buildSimpleNavObj("HTML&CSS"),
  buildSimpleNavObj("JavaScript"),
  buildSimpleNavObj("XML"),
  {
    text: "Vue",
    prefix: "Vue/",
    collapsible: true,
    icon: "vuejs",
    children: [
      buildSimpleNavObj("1.Vue.js介绍"),
      buildSimpleNavObj("2.Vue对象"),
      buildSimpleNavObj("3.Vue模板语法"),
      buildSimpleNavObj("4.组件"),
      buildSimpleNavObj("5.混入"),
      buildSimpleNavObj("6.插件"),
      buildSimpleNavObj("7.过滤器"),
      buildSimpleNavObj("8.状态管理"),
      buildSimpleNavObj("9.路由"),
    ]
  },
]);
