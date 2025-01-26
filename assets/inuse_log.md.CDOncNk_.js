import{_ as o,c as t,ag as a,o as n}from"./chunks/framework.-a8jReyC.js";const h=JSON.parse('{"title":"日志结构","description":"","frontmatter":{},"headers":[],"relativePath":"inuse/log.md","filePath":"inuse/log.md","lastUpdated":1737903533000}'),s={name:"inuse/log.md"};function i(l,e,r,d,c,g){return n(),t("div",null,e[0]||(e[0]=[a(`<h1 id="日志结构" tabindex="-1">日志结构 <a class="header-anchor" href="#日志结构" aria-label="Permalink to &quot;日志结构&quot;">​</a></h1><p>（<code>0.2.2</code>+）</p><p>工具箱从0.2.2版本开始会在运行时输出日志，在数据目录下的<code>latest.log</code>是最后一次运行时的日志，目前暂不保留历史日志。</p><p>在技术上，工具箱采用的日志模块是<code>loguru</code>，这是Python的第三方日志模块而非内置模块<code>logging</code>。输出日志的层级上，基于<code>loguru</code>的内建层级，工具箱对其做如下规定：</p><h2 id="日志等级规定" tabindex="-1">日志等级规定 <a class="header-anchor" href="#日志等级规定" aria-label="Permalink to &quot;日志等级规定&quot;">​</a></h2><ul><li><strong>TRACE</strong> - 默认被隐藏的日志等级，用于记录异步操作的开始与事无巨细的用户GUI操作。</li><li><strong>DEBUG</strong> - 调试等级，用于记录程序运行层面的进展与打印步骤中数据。</li><li><strong>INFO</strong> - 消息等级，用于打印用户能够从GUI层面上感知到的变化。</li><li><strong>SUCCESS</strong> - 成功消息等级，用于记录操作<strong>成功</strong>。</li><li><strong>WARNING</strong> - 警告等级，表明需要得到重视的程序情况，或很可能导致意外的操作。</li><li><strong>ERROR</strong> - 错误等级，表示程序遇到了意外的输入或操作，该正在进行的输入或操作必须终止，此外程序仍然可以继续运行。</li><li><strong>CRITICAL</strong> - 严重错误等级，表示程序遇到致命问题无法运行。</li></ul><p>!!! note &quot;日志范例&quot;</p><pre><code>2025-01-23T16:28:11.709381+0800 | DEBUG | 模块导入完成。

2025-01-23T16:28:11.784643+0800 | DEBUG | 程序初始化完成。

2025-01-23T16:28:12.786067+0800 | SUCCESS | 工具箱本体进入事件循环。

2025-01-23T16:28:16.985638+0800 | SUCCESS | 已获取到用户信息，登录成功。

2025-01-23T16:28:18.613657+0800 | INFO | 工具箱主页初始化完毕。

2025-01-23T16:28:18.614658+0800 | INFO | 已将用户信息应用在工具箱主页上。

2025-01-23T16:28:18.614658+0800 | SUCCESS | 工具箱主页加载完毕。

2025-01-23T16:28:18.727397+0800 | DEBUG | 获取并更新了工具箱新闻 {&#39;body&#39;: &#39;这是芒果工具箱的第一条新闻嗷！&#39;, &#39;id&#39;: 1, &#39;time&#39;: &#39;2024-12-23&#39;, &#39;title&#39;: &#39;芒果工具箱新闻模块开工动土！&#39;}。

2025-01-23T16:28:18.728914+0800 | DEBUG | 获取工具箱当前版本信息 {&#39;desc&#39;: {&#39;0.2.0&#39;: &#39;Full Rebuild Again.&#39;, &#39;0.2.1&#39;: &#39;Update for the self-update-check-system and other small changes.&#39;}, &#39;latest&#39;: &#39;0.2.1&#39;} 。
</code></pre><h2 id="如果你贡献的代码中需要输出日志" tabindex="-1">如果你贡献的代码中需要输出日志 <a class="header-anchor" href="#如果你贡献的代码中需要输出日志" aria-label="Permalink to &quot;如果你贡献的代码中需要输出日志&quot;">​</a></h2><p>使用项目结构<code>./app/common/logger.py</code>中的<code>logger</code>对象的<code>trace</code>、<code>debug</code>、……、<code>critical</code>方法来打印你需要的日志。如果你编辑的文件中尚未导入<code>logger</code>，你可能需要类似如下代码来完成相对导入：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ..common.logger </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> logger</span></span></code></pre></div>`,11)]))}const u=o(s,[["render",i]]);export{h as __pageData,u as default};
