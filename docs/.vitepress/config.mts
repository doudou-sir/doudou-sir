import { DefaultTheme, defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "doudou-sir",
  description: "doudou-sir learning and growth record",
  head: [
    [
      "link",
      { rel: "icon", type: "image/svg+xml", href: "/doudou-sir-logo.svg" }
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: "/doudou-sir-logo.svg", width: 24, height: 24 },
    siteTitle: "doudou-sir",
    nav: navs(),

    // search: {
    //   provider: "algolia",
    //   options: {
    //     appId: "...",
    //     apiKey: "...",
    //     indexName: "...",
    //     locales: {
    //       zh: {
    //         placeholder: "搜索文档",
    //         translations: {
    //           button: {
    //             buttonText: "搜索文档",
    //             buttonAriaLabel: "搜索文档"
    //           },
    //           modal: {
    //             searchBox: {
    //               resetButtonTitle: "清除查询条件",
    //               resetButtonAriaLabel: "清除查询条件",
    //               cancelButtonText: "取消",
    //               cancelButtonAriaLabel: "取消"
    //             },
    //             startScreen: {
    //               recentSearchesTitle: "搜索历史",
    //               noRecentSearchesText: "没有搜索历史",
    //               saveRecentSearchButtonTitle: "保存至搜索历史",
    //               removeRecentSearchButtonTitle: "从搜索历史中移除",
    //               favoriteSearchesTitle: "收藏",
    //               removeFavoriteSearchButtonTitle: "从收藏中移除"
    //             },
    //             errorScreen: {
    //               titleText: "无法获取结果",
    //               helpText: "你可能需要检查你的网络连接"
    //             },
    //             footer: {
    //               selectText: "选择",
    //               navigateText: "切换",
    //               closeText: "关闭",
    //               searchByText: "搜索提供者"
    //             },
    //             noResultsScreen: {
    //               noResultsText: "无法找到相关结果",
    //               suggestedQueryText: "你可以尝试查询",
    //               reportMissingResultsText: "你认为该查询应该有结果？",
    //               reportMissingResultsLinkText: "点击反馈"
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // },

    sidebar: {
      "/nestjs/": {
        base: "/nestjs/",
        items: sidebarNestjs()
      },
      "/talkative/": {
        base: "/talkative/",
        items: sidebarTalkative()
      }
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/doudou-sir"
      },
      {
        icon: {
          svg: '<svg t="1713339513621" class="icon" viewBox="0 0 1316 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5534" width="80" height="80"><path d="M643.181714 247.698286l154.916572-123.172572L643.181714 0.256 643.072 0l-154.660571 124.269714 154.660571 123.245715 0.109714 0.182857z m0 388.461714h0.109715l399.579428-315.245714-108.361143-87.04-291.218285 229.888h-0.146286l-0.109714 0.146285L351.817143 234.093714l-108.251429 87.04 399.433143 315.136 0.146286-0.146285z m-0.146285 215.552l0.146285-0.146286 534.893715-422.034285 108.397714 87.04-243.309714 192L643.145143 1024 10.422857 525.056 0 516.754286l108.251429-86.893715L643.035429 851.748571z" fill="#1E80FF" p-id="5535"></path></svg>'
        },
        link: "https://juejin.cn/user/442481839964776"
      }
    ],
    footer: {
      message: "Released under the Apache-2.0 License.",
      copyright: `Copyright © 2019-${new Date().getFullYear()} doudou-sir`
    },
    docFooter: {
      prev: "上一页",
      next: "下一页"
    },

    outline: {
      // level: [2, 6],
      label: "页面导航"
    },
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式"
  }
});

function navs(): DefaultTheme.NavItem[] {
  return [
    {
      text: "话痨时刻",
      link: "/talkative/use-vitepress",
      activeMatch: "/talkative/"
    },
    {
      text: "学习指南",
      items: [
        {
          text: "NestJS",
          link: "/nestjs/what-is-nestjs",
          activeMatch: "/nestjs/"
        }
      ]
    }
  ];
}

function sidebarNestjs(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "NestJS 学习指南",
      collapsed: false,
      items: [
        {
          text: "初始 NestJS",
          link: "what-is-nestjs"
        }
      ]
    }
  ];
}

function sidebarTalkative(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "VitePress",
      collapsed: false,
      items: [
        {
          text: "使用 VitePress",
          link: "use-vitepress"
        },
        {
          text: "Markdown 中使用自定义组件",
          link: "custom-component"
        }
      ]
    },
    {
      text: "TypeScript",
      collapsed: false,
      items: [
        {
          text: "接口与类型",
          link: "interface-vs-type"
        }
      ]
    }
  ];
}
