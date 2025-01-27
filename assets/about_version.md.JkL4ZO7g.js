import{_ as o,c as l,ak as s,G as e,B as t,o as i}from"./chunks/framework.B_feXj7Y.js";const _=JSON.parse('{"title":"工具箱版本","description":"","frontmatter":{},"headers":[],"relativePath":"about/version.md","filePath":"about/version.md","lastUpdated":1737970945000}'),p={name:"about/version.md"};function f(h,a,g,c,u,d){const n=t("NolebaseGitContributors"),r=t("NolebaseGitChangelog");return i(),l("div",null,[a[0]||(a[0]=s('<h1 id="工具箱版本" tabindex="-1">工具箱版本 <a class="header-anchor" href="#工具箱版本" aria-label="Permalink to &quot;工具箱版本&quot;">​</a></h1><p>当前的主要版本是0.2.1，开发版本是0.2.2，本页罗列了所有发布过的版本的下载地址。</p><h2 id="下一个版本-0-2-2" tabindex="-1">下一个版本：0.2.2 <a class="header-anchor" href="#下一个版本-0-2-2" aria-label="Permalink to &quot;下一个版本：0.2.2&quot;">​</a></h2><p><strong>（计划）将要包含的新特性</strong></p><ul><li><strong>日志系统</strong> - 工具箱将在运行时输出日志，以更好地实现运行情况记录与问题诊断。 <ul><li>尽管工具箱本体的未来目标是多语言，但日志系统的输出始终会是中文。</li></ul></li><li><strong>关于页面增加更多功能</strong> - 增加连接至工具箱发布页、GitHub仓库、工具箱文档等地的链接，增加打开数据目录的按钮（用于查看日志等）。</li><li><strong>接入一言功能</strong> - 重构旧版工具箱中实现的一言API功能。</li></ul><p><strong>问题修复</strong></p><ul><li>来自上游的窗口问题，参见<code>0.2.1</code>的已知问题。</li></ul><h2 id="当前主要版本-0-2-1" tabindex="-1">当前主要版本：0.2.1 <a class="header-anchor" href="#当前主要版本-0-2-1" aria-label="Permalink to &quot;当前主要版本：0.2.1&quot;">​</a></h2><p><strong>包含的新特性</strong></p><ul><li><strong>启动时版本检查</strong> - 实现了简陋的启动时版本检查功能，可在设置中开启，检查结果会在工具箱主窗口中提醒并记录在日志中。 <ul><li>未来计划实现自动下载新版本的安装程序。</li></ul></li><li><strong>新闻</strong> - 实现了简陋的工具箱新闻功能，相当简陋。</li></ul><p><strong>已知问题</strong></p><ul><li><strong>来自上游的窗口问题</strong> - 参见<a href="https://github.com/zhiyiYo/PyQt-Frameless-Window/issues/178" target="_blank" rel="noreferrer">我提的issue</a>，在开发环境Python3.11下存在窗口最大化与缩小时缺失动画以及相关的一系列问题，由于并非严重问题，等待上游修复。 <ul><li>已经确定降级PySide6版本（6.8.1.1-&gt;6.7.2）能够规避该问题，将在工具箱<code>0.2.2</code>中规避问题。</li><li>已经确定是PySide6 6.8.1的问题，上游等待PySide6修复。</li></ul></li></ul><p><strong>下载</strong></p><p>安装程序下载链接：<a href="https://file.mangofanfan.cn/s/1nehnw" target="_blank" rel="noreferrer">https://file.mangofanfan.cn/s/1nehnw</a></p><h2 id="_0-2-0" tabindex="-1">0.2.0 <a class="header-anchor" href="#_0-2-0" aria-label="Permalink to &quot;0.2.0&quot;">​</a></h2><p>工具箱在此版本完全重构，但此版本并未分发。重构后的首个分发版本是0.2.1。</p><p><strong>包含的新特性</strong></p><p><strong>完全重构这个特性还不够多嘛？</strong></p><p>由于重构需要，暂时移除了下载工具与翻译工具，将在日后基于重构版工具箱重新实现。</p><h2 id="_0-1-0、0-0-0与0-0-1" tabindex="-1">0.1.0、0.0.0与0.0.1 <a class="header-anchor" href="#_0-1-0、0-0-0与0-0-1" aria-label="Permalink to &quot;0.1.0、0.0.0与0.0.1&quot;">​</a></h2><p>中道崩殂的版本。从<code>0.0.1</code>向<code>0.1.0</code>的迈进是极其痛苦的，以至于最终<code>0.1.0</code>被直接放弃。</p><p>0.0.0与0.0.1版本的更新记录请参见下列地址：</p><ul><li><a href="https://ifanspace.top/2024/08/28/510.html" target="_blank" rel="noreferrer">https://ifanspace.top/2024/08/28/510.html</a> （完整）</li><li><a href="https://github.com/mangofanfan/FanTools/releases/" target="_blank" rel="noreferrer">https://github.com/mangofanfan/FanTools/releases/</a> （只有这两个版本）</li></ul><p><strong>下载</strong> （仅供考古娱乐使用，不再维护，也不再接受任何issue）</p><ul><li>命令行安装工具-0.0.1：<a href="https://file.mangofanfan.cn/s/5awxmv" target="_blank" rel="noreferrer">https://file.mangofanfan.cn/s/5awxmv</a></li><li>芒果工具箱本体-0.0.1：<a href="https://file.mangofanfan.cn/s/gx0vjp" target="_blank" rel="noreferrer">https://file.mangofanfan.cn/s/gx0vjp</a></li><li>命令行安装工具-0.0.0：<a href="https://file.mangofanfan.cn/s/4aiaby" target="_blank" rel="noreferrer">https://file.mangofanfan.cn/s/4aiaby</a></li><li>芒果工具箱本体-0.0.0：<a href="https://file.mangofanfan.cn/s/kmpnbp" target="_blank" rel="noreferrer">https://file.mangofanfan.cn/s/kmpnbp</a></li></ul>',25)),e(n),e(r)])}const b=o(p,[["render",f]]);export{_ as __pageData,b as default};
