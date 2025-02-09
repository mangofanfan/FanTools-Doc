import{_ as r,c as o,aA as i,G as e,B as l,o as f}from"./chunks/framework.CyHSuKli.js";const m=JSON.parse('{"title":"工具箱版本","description":"","frontmatter":{},"headers":[],"relativePath":"about/version.md","filePath":"about/version.md","lastUpdated":1739082545000}'),s={name:"about/version.md"};function c(d,a,b,p,g,h){const t=l("NolebaseGitContributors"),n=l("NolebaseGitChangelog");return f(),o("div",null,[a[0]||(a[0]=i('<h1 id="工具箱版本" tabindex="-1">工具箱版本 <a class="header-anchor" href="#工具箱版本" aria-label="Permalink to &quot;工具箱版本&quot;">​</a></h1><p>当前的主要版本是0.2.2，开发版本是0.2.3，本页罗列了所有发布过的版本的下载地址。</p><h2 id="当前版本-0-2-3" tabindex="-1">当前版本：0.2.3 <a class="header-anchor" href="#当前版本-0-2-3" aria-label="Permalink to &quot;当前版本：0.2.3&quot;">​</a></h2><p><strong>包含的新特性</strong></p><ul><li><strong>新的用户系统</strong> - 通过OAUTH2协议，接入<a href="https://ifanspace.top/" target="_blank" rel="noreferrer">帆域主站</a>的用户系统。帆域是芒果帆帆的一个网站项目，基于WordPress+Zibll主题部署。</li><li><strong>新的构建方式</strong> - 为未来的工具系统铺平道路，早日痛苦早日享福：工具箱从PyInstaller到Nuitka之后，如今终于转向使用Python Embedded版本构建分发。</li><li><strong>新的工具系统正在开发</strong> - 现在可以在工具的<code>tool.json</code>中填写工具需要的模块，工具箱会从pypi安装这些模块。</li></ul><p><strong>问题修复</strong></p><ul><li>0.2.2中的权限问题。现在启动工具箱时将自动申请管理员权限。</li></ul><p><strong>吐槽</strong> 安装程序越来越大了……从30M到60M到200M了，唉……</p><p><strong>下载</strong> 安装程序下载链接：<a href="https://file.mangofanfan.cn/s/mgoxu9" target="_blank" rel="noreferrer">https://file.mangofanfan.cn/s/mgoxu9</a></p><ul><li>MD5：266771bb457419c77849bff1ef241e51</li><li>SHA1：fd1922a8469ca11307e8f29af399a1c3fe129bb5</li><li>SHA256：5b18d4dc91540d6b32d6b152023ea1198634a3dd90dfad365d5a11a1ea2f14de</li><li>SHA384：22bdb296e40a4eda2abae46469b1774ce44ed53041c3959f8413396b619531f0a04c8ee29d05a511ef156cca5e44a993</li><li>SHA512：be6ef419fee671aeb08e53d7c001a058f740a3dc3e62838835f916090541dc485205203cd544fc83c2e39a05ce99157263d20283fb7185d438f29808e475418f</li></ul><h2 id="_0-2-2" tabindex="-1">0.2.2 <a class="header-anchor" href="#_0-2-2" aria-label="Permalink to &quot;0.2.2&quot;">​</a></h2><p><strong>包含的新特性</strong></p><ul><li><strong>日志系统</strong> - 工具箱将在运行时输出日志，以更好地实现运行情况记录与问题诊断。 <ul><li>尽管工具箱本体的未来目标是多语言，但日志系统的输出始终会是中文。</li></ul></li><li><strong>关于页面增加更多功能</strong> - 增加连接至工具箱发布页、GitHub仓库、工具箱文档等地的链接，增加打开数据目录的按钮（用于查看日志等）。</li><li><strong>接入一言功能</strong> - 除定时刷新外，重构旧版工具箱中实现的一言API功能。</li></ul><p><strong>已知问题</strong></p><ul><li>为全体用户安装时（程序在系统Program Files文件下安装时）， <strong>需要手动以管理员身份运行程序</strong> ，此为程序开发时考虑不周，将在下个版本修复。 <ul><li>故障原因是工具箱默认在安装目录中创建并记录日志，而Program Files目录需求管理员权限才能进行文件操作。</li></ul></li></ul><p><strong>问题修复</strong></p><ul><li>来自上游的窗口问题，参见<code>0.2.1</code>的已知问题。</li></ul><p><strong>下载</strong></p><p>安装程序下载链接：<a href="https://file.mangofanfan.cn/s/9ktb6v" target="_blank" rel="noreferrer">https://file.mangofanfan.cn/s/9ktb6v</a></p><ul><li>MD5：5152cbdd0a93f2bf83a4709adadd3ec4</li><li>SHA1：629e33e271a275c819890b3d5012f525a7423a88</li><li>SHA256：cf645ee254beb0b4c8d43dffae801c54bf42441a5334c5d673b6204840415726</li><li>SHA384：3195ac4280364547008c29eaf975ce009fd2a7f0cd04197f80e1baf3e664e0d07213ddc936232a1903a3c9cdc9f88562</li><li>SHA512：53cacc8ef03fe7c6c0d677262d439a15a254551d4889bfd2de3f599d4a9fa3103e49f817cdbec7909842d7abfaebcc44642551318a43c655c31cf7252aff0c9e</li></ul><h2 id="_0-2-1" tabindex="-1">0.2.1 <a class="header-anchor" href="#_0-2-1" aria-label="Permalink to &quot;0.2.1&quot;">​</a></h2><p><strong>包含的新特性</strong></p><ul><li><strong>启动时版本检查</strong> - 实现了简陋的启动时版本检查功能，可在设置中开启，检查结果会在工具箱主窗口中提醒并记录在日志中。 <ul><li>未来计划实现自动下载新版本的安装程序。</li></ul></li><li><strong>新闻</strong> - 实现了简陋的工具箱新闻功能，相当简陋。</li></ul><p><strong>已知问题</strong></p><ul><li><strong>来自上游的窗口问题</strong> - 参见<a href="https://github.com/zhiyiYo/PyQt-Frameless-Window/issues/178" target="_blank" rel="noreferrer">我提的issue</a>，在开发环境Python3.11下存在窗口最大化与缩小时缺失动画以及相关的一系列问题，由于并非严重问题，等待上游修复。 <ul><li>已经确定降级PySide6版本（6.8.1.1-&gt;6.7.2）能够规避该问题，将在工具箱<code>0.2.2</code>中规避问题。</li><li>已经确定是PySide6 6.8.1的问题，上游等待PySide6修复。</li></ul></li></ul><p><strong>下载</strong></p><p>安装程序下载链接：<a href="https://file.mangofanfan.cn/s/1nehnw" target="_blank" rel="noreferrer">https://file.mangofanfan.cn/s/1nehnw</a></p><ul><li>MD5：992cd3bf1b1b8b3b4089559cff4db91c</li><li>SHA1：3703329b0bd54e925aa668a926ae26c2687d73fe</li><li>SHA256：f42a08a69112220cfa25e59506fb99461c465a7c46b8ff88b48f43bf25239d6e</li><li>SHA384：6ea8925bff7ee4c0b3ba2f6b662bc2e8a7306680546aafb4399d1340da99d28f0977071b8d2abe628ca7b0c426d4faa9</li><li>SHA512：c61b760debb450ea74328d454430dc8ba2679f8f73cb243dd4dcf569478f2a3fb61ed8755a4182fcc1cee84ca5672dec841d702edf1c8ad2cfcf7518c7f8ae15</li></ul><h2 id="_0-2-0" tabindex="-1">0.2.0 <a class="header-anchor" href="#_0-2-0" aria-label="Permalink to &quot;0.2.0&quot;">​</a></h2><p>工具箱在此版本完全重构，但此版本并未分发。重构后的首个分发版本是0.2.1。</p><p><strong>包含的新特性</strong></p><p><strong>完全重构这个特性还不够多嘛？</strong></p><p>由于重构需要，暂时移除了下载工具与翻译工具，将在日后基于重构版工具箱重新实现。</p><h2 id="_0-1-0、0-0-0与0-0-1" tabindex="-1">0.1.0、0.0.0与0.0.1 <a class="header-anchor" href="#_0-1-0、0-0-0与0-0-1" aria-label="Permalink to &quot;0.1.0、0.0.0与0.0.1&quot;">​</a></h2><p>中道崩殂的版本。从<code>0.0.1</code>向<code>0.1.0</code>的迈进是极其痛苦的，以至于最终<code>0.1.0</code>被直接放弃。</p><p>0.0.0与0.0.1版本的更新记录请参见下列地址：</p><ul><li><a href="https://ifanspace.top/2024/08/28/510.html" target="_blank" rel="noreferrer">https://ifanspace.top/2024/08/28/510.html</a> （完整）</li><li><a href="https://github.com/mangofanfan/FanTools/releases/" target="_blank" rel="noreferrer">https://github.com/mangofanfan/FanTools/releases/</a> （只有这两个版本）</li></ul><p><strong>下载</strong> （仅供考古娱乐使用，不再维护，也不再接受任何issue）</p><ul><li>命令行安装工具-0.0.1：<a href="https://file.mangofanfan.cn/s/5awxmv" target="_blank" rel="noreferrer">https://file.mangofanfan.cn/s/5awxmv</a></li><li>芒果工具箱本体-0.0.1：<a href="https://file.mangofanfan.cn/s/gx0vjp" target="_blank" rel="noreferrer">https://file.mangofanfan.cn/s/gx0vjp</a></li><li>命令行安装工具-0.0.0：<a href="https://file.mangofanfan.cn/s/4aiaby" target="_blank" rel="noreferrer">https://file.mangofanfan.cn/s/4aiaby</a></li><li>芒果工具箱本体-0.0.0：<a href="https://file.mangofanfan.cn/s/kmpnbp" target="_blank" rel="noreferrer">https://file.mangofanfan.cn/s/kmpnbp</a></li></ul>',39)),e(t),e(n)])}const _=r(s,[["render",c]]);export{m as __pageData,_ as default};
