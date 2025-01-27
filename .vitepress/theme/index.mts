import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import 'virtual:group-icons.css' //代码组样式
import './style/index.css'

// 页面历史
import {
    NolebaseGitChangelogPlugin
} from '@nolebase/vitepress-plugin-git-changelog/client'

import '@nolebase/vitepress-plugin-git-changelog/client/style.css'

export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ app }) {
        app.use(NolebaseGitChangelogPlugin)
    },
};