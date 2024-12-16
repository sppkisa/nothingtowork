import { sidebar } from "vuepress-theme-hope";
import java from "./java";
import javaWeb from "./javaWeb";
import javaScript from "./javaScript";
import python from "./python";
import math from "./math";
import dsa from "./dsa";
import database from "./database";
import linux from "./linux";
import otherTech from "./otherTech";
import cv from "./cv";
import computerNetwork from "./computerNetwork";

export default sidebar({
  "/": [],
  "/Java/": java,
  "/JavaWeb/": javaWeb,
  "/JavaScript/": javaScript,
  "/Python/": python,
  "/数据库/": database,
  "/Linux/": linux,
  "/计算机网络/": computerNetwork,
  "/DSA/": dsa,
  "/数学/": math,
  "/CV/": cv,
  "/杂技/": otherTech,
});
