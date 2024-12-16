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
    text: "Python",
    icon: "python",
    link: "/Python/",
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
    text: "计算机网络",
    icon: "computer-network",
    link: "/计算机网络/",
  },
  {
    text: "DSA",
    icon: "algorithm",
    link: "/DSA/",
  },
  {
    text: "数学",
    icon: "math-pi",
    link: "/数学/",
  },
  {
    text: "CV",
    icon: "computer-vision-simple",
    link: "/CV/",
  },
  {
    text: "杂技",
    icon: "other-tech",
    link: "/杂技/",
  },
];
if (isDevEnv) {
}
export default navbar(navBars);
