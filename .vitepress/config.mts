import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "芒果工具箱",
  description: "简单地运行任何Python小工具",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '预览', link: '/' },
      { text: '文档', link: '/fantools/description.md' },
    ],

    sidebar: [
      {
        text: '芒果工具箱',
        items: [
          { text: '简介', link: '/fantools/description' },
          { text: '快速上手', link: '/fantools/start_use' }
        ]
      },
      {
        text: '使用指南',
        items: [
          { text: '一言', link: '/inuse/hitokoto' },
          { text: '日志', link: '/inuse/log' }
        ]
      },
      {
        text: '关于与更多信息',
        items: [
          { text: '版本', link: '/about/version' },
          { text: '日志', link: '/about/contribute' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mangofanfan/FanTools2' }
    ],

    search: {
      provider: 'local'
    },

    lastUpdated: true
  }
})
