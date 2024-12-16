
import { arraySidebar } from "vuepress-theme-hope";
import { buildSimpleNavObj, FOLDER_ICON } from "./util";

export default arraySidebar([
  {
    text: "踏入山门",
    prefix: "踏入山门/",
    collapsible: true,
    icon: FOLDER_ICON,
    children: [
      buildSimpleNavObj("前言"),
      buildSimpleNavObj("内置操作"),
      buildSimpleNavObj("运算"),
      buildSimpleNavObj("字符串"),
      buildSimpleNavObj("数字"),
      buildSimpleNavObj("容器类"),
      buildSimpleNavObj("程序控制语句"),
      buildSimpleNavObj("函数"),
      buildSimpleNavObj("作用域"),
      buildSimpleNavObj("类"),
      buildSimpleNavObj("文件"),
      buildSimpleNavObj("异常"),
      buildSimpleNavObj("模块与包"),
      buildSimpleNavObj("迭代器-生成器-装饰器-描述器"),
      buildSimpleNavObj("元编程"),
      buildSimpleNavObj("并发编程"),
    ]
  },
  {
    text: "标准库",
    prefix: "标准库/",
    collapsible: true,
    icon: FOLDER_ICON,
    children: [
      buildSimpleNavObj("os"),
      buildSimpleNavObj("collections"),
      buildSimpleNavObj("heapq"),
      buildSimpleNavObj("operator"),
      buildSimpleNavObj("itertools"),
      buildSimpleNavObj("weakref"),
      buildSimpleNavObj("functools"),
      buildSimpleNavObj("shutil"),
      buildSimpleNavObj("regex"),
    ]
  },
  {
    text: "numpy",
    prefix: "numpy/",
    collapsible: true,
    icon: FOLDER_ICON,
    children: [
      buildSimpleNavObj("numpy简介"),
      buildSimpleNavObj("数组操作"),
      buildSimpleNavObj("结构化数组"),
      buildSimpleNavObj("其他"),
    ]
  },
  {
    text: "pandas",
    prefix: "pandas/",
    collapsible: true,
    icon: FOLDER_ICON,
    children: [
      buildSimpleNavObj("概述"),
      buildSimpleNavObj("数据操作"),
      buildSimpleNavObj("缺失值处理"),
      buildSimpleNavObj("eval与query"),
      buildSimpleNavObj("IO操作"),
    ]
  },
  {
    text: "scipy",
    prefix: "scipy/",
    collapsible: true,
    icon: FOLDER_ICON,
    children: [
      buildSimpleNavObj("概述"),
    ]
  },
  {
    text: "matplotlib",
    prefix: "matplotlib/",
    collapsible: true,
    icon: FOLDER_ICON,
    children: [
      buildSimpleNavObj("基础介绍"),
      buildSimpleNavObj("图件配置"),
      buildSimpleNavObj("各种图件"),
    ]
  },
  {
    text: "mayavi",
    prefix: "mayavi/",
    collapsible: true,
    icon: FOLDER_ICON,
    children: [
      buildSimpleNavObj("mayavi综述"),
      buildSimpleNavObj("mlab"),
      buildSimpleNavObj("远程使用mayavi"),
    ]
  },
  {
    text: "scikit-image",
    prefix: "scikit-image/",
    collapsible: true,
    icon: FOLDER_ICON,
    children: [
      buildSimpleNavObj("通性概念"),
      buildSimpleNavObj("图像算法"),
    ]
  },
  {
    text: "PyTorch",
    prefix: "PyTorch/",
    collapsible: true,
    icon: FOLDER_ICON,
    children: [
      buildSimpleNavObj("torch"),
      buildSimpleNavObj("Tensor"),
      buildSimpleNavObj("torch.nn"),
      buildSimpleNavObj("torch.optim"),
      buildSimpleNavObj("模型保存与加载"),
      buildSimpleNavObj("validation"),
    ]
  },
]);
