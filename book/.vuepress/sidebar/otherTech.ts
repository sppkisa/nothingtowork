import { arraySidebar } from "vuepress-theme-hope";
import { buildSimpleNavObj } from "./util";

export default arraySidebar([
  {
    text: "计算机组成原理",
    prefix: "计算机组成原理/",
    // collapsible: true,
    icon: "CPU",
    children: []
  },
  {
    text: "操作系统",
    prefix: "操作系统/",
    // collapsible: true,
    icon: "operating-system",
    children: []
  },
  {
    text: "C++",
    prefix: "C++/",
    // collapsible: true,
    icon: "cpp",
    children: []
  },
  {
    text: "Git",
    prefix: "Git/",
    collapsible: true,
    icon: "git",
    children: [
      buildSimpleNavObj("一、Git起步"),
      buildSimpleNavObj("二、版本控制"),
      buildSimpleNavObj("三、远程仓库"),
      buildSimpleNavObj("四、标签管理"),
      buildSimpleNavObj("五、Git分支"),
    ]
  },
  buildSimpleNavObj("Nginx", "nginx"),
  buildSimpleNavObj("Docker", "docker"),
  {
    text: "Kubernetes",
    prefix: "Kubernetes/",
    collapsible: true,
    icon: "k8s",
    children: [
      buildSimpleNavObj("概述"),
      buildSimpleNavObj("kubernetes对象"),
      buildSimpleNavObj("kubernetes资源"),
      buildSimpleNavObj("kubectl命令"),
    ]
  },
  buildSimpleNavObj("DolphinScheduler", "dolphin-scheduler"),
]);
