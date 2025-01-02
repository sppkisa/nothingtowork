import { arraySidebar } from "vuepress-theme-hope";
import { buildSimpleNavObj, FOLDER_ICON } from "./util";

export default arraySidebar([
  {
    text: "项目工具",
    prefix: "项目工具/",
    collapsible: true,
    icon: FOLDER_ICON,
    children: [
      buildSimpleNavObj("maven", "maven"),
    ]
  }
]);
