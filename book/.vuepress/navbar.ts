import { navbar } from "vuepress-theme-hope";
import { isDevEnv } from "./utils";

const navBars = [
  {
    text: "随笔",
    icon: "leaf",
    link: "/blog/",
  },
  {
    text: "Java",
    icon: "java",
    children: [
      {
        text: "Java",
        icon: "java",
        link: "/Java/",
      },
      {
        text: "JavaWeb",
        icon: "web",
        link: "/JavaWeb/",
      },
    ]
  },
  {
    text: "JavaScript",
    icon: "javascript",
    link: "/JavaScript/",
  },
  {
    text: "数据库",
    link: "/数据库/",
    icon: "database",
  },
  {
    text: "Linux",
    link: "/Linux/",
    icon: "linux",
  },
  {
    text: "服务",
    icon: "computer-network",
    link: "/计算机网络/",
  }
];
if (isDevEnv) {
}
export default navbar(navBars);
