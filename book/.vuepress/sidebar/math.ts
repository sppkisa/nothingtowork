
import { arraySidebar } from "vuepress-theme-hope";
import { buildSimpleNavObj, FOLDER_ICON } from "./util";

export default arraySidebar([
  {
    text: "线性代数",
    prefix: "线性代数/",
    collapsible: true,
    icon: FOLDER_ICON,
    children: [
      buildSimpleNavObj("矩阵"),
    ]
  },
]);
