import {webpackBundler } from "@vuepress/bundler-webpack";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
// @ts-ignore
import CopyPlugin from "copy-webpack-plugin";
import * as path from "path";

const sourceDir = "book";

export default defineUserConfig({
  base: "/",
  dest: `${sourceDir}/.vuepress/dist`,

  port: 9999,

  lang: "zh-CN",
  title: "荒流的笔趣屋",
  description: "这是我用 vuepress 工具生成的笔记，采用 vuepress-theme-hope 主题，简单好用，采用 Markdown 编写，像书本一样展示。",

  head: [
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?d41714388d97166c965a387883f8c5e0";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
      `
    ]
  ],

  markdown: {
    headers: {
      level: [2, 3, 4, 5, 6],
    }
  },

  theme,

  // 和 PWA 一起启用
  shouldPrefetch: false,

  // 修改 webpack 配置
  // bundler: webpackBundler({
  //   configureWebpack: (config, isServer, isBuild) => {
  //     config.devtool = "eval-source-map"; // 开发环境调试时浏览器展示源码（好像不生效）
  //     config.plugins?.push(
  //         new CopyPlugin({
  //           patterns: [
  //             {
  //               from: path.resolve(process.cwd(), "./CNAME"),
  //               to: ".",
  //             },
  //           ],
  //         })
  //     );
  //   }
  // }),
});
