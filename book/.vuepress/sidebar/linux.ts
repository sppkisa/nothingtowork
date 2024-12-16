import { arraySidebar } from "vuepress-theme-hope";
import { buildSimpleNavObj } from "./util";

export default arraySidebar([
  buildSimpleNavObj("总览"),
  buildSimpleNavObj("文件操作"),
  buildSimpleNavObj("进程管理"),
  buildSimpleNavObj("用户管理"),
  buildSimpleNavObj("文件权限"),
  buildSimpleNavObj("磁盘管理"),
  buildSimpleNavObj("软件管理"),
  buildSimpleNavObj("shell脚本"),
  buildSimpleNavObj("网络操作"),
  buildSimpleNavObj("乌合之令"),
  buildSimpleNavObj("WSL"),
]);
