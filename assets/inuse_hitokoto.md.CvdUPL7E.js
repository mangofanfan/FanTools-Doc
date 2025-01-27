import{_ as e,c as o,ah as a,o as r}from"./chunks/framework.BsbG7fj3.js";const n="/assets/FanTools_SettingInterface_YiYan_0.2.2.C_crZBDD.png",f=JSON.parse('{"title":"一言","description":"","frontmatter":{},"headers":[],"relativePath":"inuse/hitokoto.md","filePath":"inuse/hitokoto.md","lastUpdated":1737911786000}'),i={name:"inuse/hitokoto.md"};function l(s,t,p,h,c,d){return r(),o("div",null,t[0]||(t[0]=[a('<h1 id="一言" tabindex="-1">一言 <a class="header-anchor" href="#一言" aria-label="Permalink to &quot;一言&quot;">​</a></h1><p>（<code>0.2.2</code>+）</p><p><img src="'+n+'" alt="一言有关的设置" data-zoomable="true"></p><p>「所谓一言（ヒトコト），即一句话。这句话可以是传达了感动，可以是博人一笑，可以是发人深思。总之，一言，代表着言语的触动，灵魂的交流。」</p><p>——一言开发者中心（<a href="https://developer.hitokoto.cn/introduce.html%EF%BC%89" target="_blank" rel="noreferrer">https://developer.hitokoto.cn/introduce.html）</a></p><h2 id="刷新逻辑" tabindex="-1">刷新逻辑 <a class="header-anchor" href="#刷新逻辑" aria-label="Permalink to &quot;刷新逻辑&quot;">​</a></h2><p>重构后的工具箱内建一个全局的一言管理器（HitokotoManager），所有一言卡片或其他动态加载一言的地方都从该全局管理器获取一言。</p><ul><li>一旦全局管理器获取新的一言，则所有地方的一言文本都会同步更新。</li><li>这意味着所有地方显示的一言都是同一句话。</li><li>对每一个地方的一言进行刷新，都会触发全局管理器的刷新，从而在全局获取新的一言，改变所有地方显示的一言。</li></ul><p>大概是这样。</p><h2 id="调用接口" tabindex="-1">调用接口 <a class="header-anchor" href="#调用接口" aria-label="Permalink to &quot;调用接口&quot;">​</a></h2><p>与重构之前的早期版本一致，工具箱的一言使用 <strong><a href="https://developer.hitokoto.cn/" target="_blank" rel="noreferrer">Hitokoto</a></strong> 实现，提供官方接口（v1.hitokoto.cn）和芒果的帆域镜像接口（fan-hitokoto.mangofanfan.cn）。镜像接口的唯一好处在于没有访问限制（QPS），此外两个接口完全一致。</p><p>如果您对这个一言接口感兴趣，可以参阅以下链接来了解更多：</p><ul><li><a href="https://developer.hitokoto.cn/sentence/deploy.html" target="_blank" rel="noreferrer">官方文档 - 部署实例</a></li><li><a href="https://ifanspace.top/2024/08/26/489.html" target="_blank" rel="noreferrer">帆域 - 宝塔面板 + Docker 自建 Hitokoto API</a></li></ul>',13)]))}const k=e(i,[["render",l]]);export{f as __pageData,k as default};
