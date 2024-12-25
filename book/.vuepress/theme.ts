import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar";
import { Page } from "vuepress";
import { cut } from "nodejs-jieba";

// @ts-ignore
// @ts-ignore
export default hopeTheme(
  {
    hostname: "https://nothingtowork.fun",
    author: {
      name: "行歌",
      url: "https://nothingtowork.fun",
      email: "sppkisa@163.com",
    },

    darkmode: "switch",
    fullscreen: false,
    // pure: true,
    iconAssets: "//at.alicdn.com/t/c/font_4437669_qqcrya8ybtj.css",
    // iconPrefix: ???
    logo: "/icon/logo.png",
    favicon: "/favicon.ico",

    // 是否使用 RTL 布局
    rtl: false,

    // 导航栏
    navbar,
    navbarIcon: true,
    navbarLayout: {
      start: ["Brand"],
      center: ["Links"],
      end: ["Language", "Outlook", "Repo", "Search"]
    },
    // navTitle: "what the fuck?",
    repo: "sppkisa/nothingtowork",
    navbarAutoHide: "mobile",

    // 侧边栏
    sidebar,
    headerDepth: 5,
    toc: true,
    print: true,

    // 路径导航
    breadcrumb: true,
    breadcrumbIcon: true,
    prevLink: true,
    nextLink: true,

    // 文章
    titleIcon: true,
    pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime", "Word", "PageView"],
    lastUpdated: true,
    contributors: true,
    editLink: true,
    // editLinkPattern: "???"
    docsBranch: "main",
    docsDir: "book",

    // 页脚
    footer: "道阻且长，行则将至",
    displayFooter: true,

    blog: {
      name: "四月小记",
      description: "道阻且长，行则将至",
      avatar: "/image/打拳黄豆.gif",
      roundAvatar: true,
      intro: "/about",
      medias: {
        Email: "mailto:sppkisa@163.com",
        Github: "https://github.com/sppkisa",
      },
      sidebarDisplay: "mobile",
      articlePerPage: 5,
      articleInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime", "Word", "PageView"],
      timeline: "昨日不在",
    },

    // 加密配置
    encrypt: {
      config: {
      },
    },

    // 多语言配置
    metaLocales: {
      editLink: "编辑此页",
    },

    // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
    // hotReload: true,

    // 在这里配置主题提供的插件
    plugins: {

      // 图片预览
      photoSwipe: true,

      // 评论服务
      comment: {
        provider: "Giscus",
        repo: "sppkisa/nothingtowork",
        repoId: "R_kgDONbdlkw",
        category: "Announcements",
        categoryId: "DIC_kwDONbdlk84ClSVj",
      },

      components: {
        components: [
          "ArtPlayer",
          "Badge",
          "BiliBili",
          "CodePen",
          "FontIcon",
          "PDF",
          "Replit",
          "Share",
          "StackBlitz",
          "SiteInfo",
          "VPBanner",
          "VPCard",
          "VidStack",
          "XiGua",
        ],
      },

      // 此处开启了很多功能用于演示，你应仅保留用到的功能。
      mdEnhance: {
        align: true,
        attrs: true,
        codetabs: true,
        component: true,
        demo: true,
        figure: true,
        imgLazyload: true,
        imgSize: true,
        include: true,
        linkify: true,
        mark: true,
        stylize: [
          {
            matcher: "Recommended",
            replacer: ({ tag }) => {
              if (tag === "em") {
                return {
                  tag: "Badge",
                  attrs: { type: "tip" },
                  content: "Recommended",
                };
              }
            },
          },
        ],
        sub: true,
        sup: true,
        tabs: true,
        vPre: true,

        // 在启用之前安装 chart.js
        // chart: true,

        // insert component easily

        // 在启用之前安装 echarts
        // echarts: true,

        // 在启用之前安装 flowchart.ts
        // flowchart: true,

        // gfm requires mathjax-full to provide tex support
        // gfm: true,

        // 在启用之前安装 katex
        katex: {
          copy: true,
          mhchem: true,
        },

        // 在启用之前安装 mathjax-full
        // mathjax: true,

        // 在启用之前安装 mermaid
        // mermaid: true,

        // playground: {
        //   presets: ["ts", "vue"],
        // },

        // 在启用之前安装 reveal.js
        // revealJs: {
        //   plugins: ["highlight", "math", "search", "notes", "zoom"],
        // },

        // 在启用之前安装 @vue/repl
        // vuePlayground: true,

        // install sandpack-vue3 before enabling it
        // sandpack: true,
      },

      blog: {
        article: "/blog/",
        category: "/blog/category/",
        categoryItem: "/blog/category/:name/",
        tag: "/blog/tag/",
        tagItem: "/blog/tag/:name/",
        star: "/blog/star/",
        timeline: "/blog/timeline/",
        filter: (page: Page) => {
          // 博客只展示 blog 目录下的文件
          return page.filePathRelative && page.filePathRelative.startsWith("blog");
        }
      },

      searchPro: {
        indexContent: true,
        autoSuggestions: false,
        queryHistoryCount: 5,
        resultHistoryCount: 0,
        indexOptions: {
          // 使用结巴进行分词
          tokenize: (text, fieldName) => {
            return fieldName === "id" ? [text] : cut(text, true);
          },
        },
        hotKeys: [
          {
            key: "/",
            ctrl: true
          },
          {
            key: "k",
            ctrl: true
          }]
      },

      feed: {
        atom: true,
        json: true,
        rss: true,
      },

      pwa: {
        favicon: "/favicon.ico",
        themeColor: "#6a005f",
        cacheHTML: true,
        cacheImage: true,
        maxSize: 200 * 1024, // 200 MB
        maxImageSize: 100 * 1024, // 100 MB
        appendBase: true,
        showInstall: true,
        apple: {
          icon: "/icon/logo-apple-152.png",
          statusBarColor: "black",
        },
        msTile: {
          image: "/icon/logo-ms-144.png",
          color: "#ffffff",
        },
        manifest: {
          short_name: "行歌",
          icons: [
            {
              src: "/icon/logo-512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "/icon/logo-192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/icon/logo-apple-152.png",
              sizes: "152x152",
              type: "image/png",
            },
            {
              src: "/icon/logo-32.png",
              sizes: "32x32",
              type: "image/png",
            },
            {
              src: "/icon/logo-16.png",
              sizes: "16x16",
              type: "image/png",
            },
          ],
        },
      },
    },
  },
  {
    custom: true
  }
);
