import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import 'virtual:group-icons.css' //代码组样式
import './style/index.css'

export default {
    extends: DefaultTheme,
    Layout,
};