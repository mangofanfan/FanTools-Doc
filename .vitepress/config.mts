import { defineConfig } from 'vitepress'

// Import lightbox plugin
import lightbox from "vitepress-plugin-lightbox"

// 代码组图标
import { groupIconMdPlugin, groupIconVitePlugin, localIconLoader } from 'vitepress-plugin-group-icons'

// 页面历史
import {
  GitChangelog,
  GitChangelogMarkdownSection,
} from '@nolebase/vitepress-plugin-git-changelog/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "芒果工具箱",
  description: "简单地运行任何Python小工具",
  head: [
    // 添加图标
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
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
        text: "工具开发",
        items: [
          { text: '结构', link: '/devtool/structure' }
        ]
      },
      {
        text: '关于与更多信息',
        items: [
          { text: '版本', link: '/about/version' },
          { text: '贡献', link: '/about/contribute' },
          { text: '外部项目', link: '/about/include'}
        ]
      }
    ],

    outline: {
      level: [2,4], // 显示2-4级标题
      label: '在本页中: ' // 文字显示
    },

    returnToTopLabel: "返回顶部",

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mangofanfan/FanTools2' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'License: GPL-v3. 芒果工具箱与其有关文档均为GPL-v3协议开源。',
      copyright: '芒果帆帆 - 帆域网络 - 备案 <a href="https://beian.miit.gov.cn/" target="_blank">苏ICP备2024110906号</a>',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short', // 可选值full、long、medium、short
        timeStyle: 'medium' // 可选值full、long、medium、short
      },
    },

    editLink: {
      pattern: 'https://github.com/mangofanfan/FanTools-Doc/edit/main/:path', // 改成自己的仓库
      text: '在GitHub编辑本页'
    },
  },

  markdown: {
    config: (md) => {
      // Use lightbox plugin
      md.use(lightbox, {});
      md.use(groupIconMdPlugin) //代码组图标
    },
  },

  vite: {
    plugins: [
      groupIconVitePlugin(
          {
            customIcon: {
              python: localIconLoader(import.meta.url, '../public/svg/python-icon.svg'), //本地ts图标导入
              js: 'logos:javascript', //js图标
              md: 'logos:markdown', //markdown图标
              css: 'logos:css-3', //css图标
            },
          }
      ),
      GitChangelog({
       // 填写在此处填写您的仓库链接
       repoURL: () => 'https://github.com/mangofanfan/FanTools-Doc',
      }),
      GitChangelogMarkdownSection(),
    ],
  },
})
