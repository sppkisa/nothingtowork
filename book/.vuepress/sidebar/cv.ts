import { arraySidebar } from "vuepress-theme-hope";
import { buildSimpleNavObj } from "./util";

export default arraySidebar([
  buildSimpleNavObj("基础概念"),
  buildSimpleNavObj("空间域处理"),
  buildSimpleNavObj("频率域滤波"),
  buildSimpleNavObj("图像复原与重建"),
  buildSimpleNavObj("形态学图像处理"),
  buildSimpleNavObj("彩色图像处理"),
  buildSimpleNavObj("小波变换"),
]);