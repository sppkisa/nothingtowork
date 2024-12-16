import "vuepress-theme-hope/presets/shinning-feature-panel.scss"; // 为项目主页的特性添加闪光效果
import "vuepress-theme-hope/presets/left-blog-info.scss"; // 将博主信息移动至文章列表的左侧
import "vuepress-theme-hope/presets/bounce-icon.scss"; // 为页面图标添加鼠标悬停的跳动效果
// @ts-ignore
import { defineClientConfig } from "vuepress/client";
import { isDevEnv } from "./utils";

export default defineClientConfig({
  enhance({
    app,
    router,
    siteData
  }) {
    router.beforeEach((
      to,
      from,
      next
    ) => {
      if (!isDevEnv) {
        // 上报百度统计
        const _hmt = typeof window !== "undefined" ? window._hmt : null; // WebPack编译打包的时候window对象可能不存在
        if (_hmt && to.path) {
          if (from.path != to.path) { // 同页面发生的哈希切换不上报
            _hmt.push(["_trackPageview", to.fullPath]);
          }
        }
      }
      next();
    });
  },
  setup() {},
  rootComponents: [],
});
