# 工具箱版本

当前的主要版本是0.2.4，开发版本是0.2.5，本页罗列了所有发布过的版本的下载地址。

## 当前版本：0.2.4

**此版本是0.2.3的紧急错误修复。** 目前可以确定0.2.3完全无法正常使用，无论处于何种目的，请不要下载安装0.2.3版本。

由于制作紧急，一些新的特性尚未完全完工，您可能会看到一个未经翻译的消息框，那是正常现象。

由于首个实现 Oauth 登录的0.2.3挂了，所以这个版本会是你第一次接触新的登录窗口！
![登录预览](/images/FanTools_LoginWindow_Fan_0.2.3.png)

**包含的新特性**
* **四重更换的构建方式** - Nuitka打包工具箱本体，同时工具箱附带安装一个Python 3.11环境，用于运行各类工具。
    - 工具系统依然在早期开发阶段，现阶段品质不能代表最终品质，但我会尽可能完善文档的……

**修复的问题**
* 0.2.3版本**完全无法使用**的严重问题。

**下载**
安装程序下载链接：[https://file.mangofanfan.cn/s/c8ii19](https://file.mangofanfan.cn/s/c8ii19)
* MD5：681db296158daec34624f79ec8e93775
* SHA1：5c95ba91e914401858ac32f1c633cea7e8dbaf84
* SHA256：335e51087d227c1a2a12190be20c1b1172e0e8d0e028817881e81ba2d40b05f5
* SHA384：cd46447a66d258fa731547d8d7edb6664da48f2fd3659498e9756a136df2a1631ec2101dba7d2960383b12a5323290e6
* SHA512：410b7006de254aba8daa785bb224a09c9a6b4901c28a8d81f33cb8303b9af6a7168dfcf1b941ecd679cebd471a5a553f36d23c891fc4cebc271de7955ab3784f

从此版本开始，后续从帆域文件站接出的下载链接预期使用腾讯云提供的加速服务，速度应该会有些起色。

您依然可以从GitHub下载相同的文件。

## 0.2.3

如果您已经安装了旧版本工具箱，可能需要先卸载旧版本再安装此版本，不能直接覆盖安装。

**包含的新特性**

* **新的用户系统** - 通过OAUTH2协议，接入[帆域主站](https://ifanspace.top/)的用户系统。帆域是芒果帆帆的一个网站项目，基于WordPress+Zibll主题部署。
* **新的构建方式** - 为未来的工具系统铺平道路，早日痛苦早日享福：工具箱从PyInstaller到Nuitka之后，如今终于转向使用Python Embedded版本构建分发。
* **新的工具系统正在开发** - 现在可以在工具的`tool.json`中填写工具需要的模块，工具箱会从pypi安装这些模块。

**问题修复**

* 0.2.2中的权限问题。现在启动工具箱时将自动申请管理员权限。

**已知问题**
* 由于新的构建方式不太成熟，此版本的工具箱只能在芒果帆帆自己的电脑上正常使用。
    - 我的问题，所以请使用0.2.4！QAQ！

**吐槽**
安装程序越来越大了……从30M到60M到200M了，唉……

**下载**
安装程序下载链接：[https://file.mangofanfan.cn/s/mgoxu9](https://file.mangofanfan.cn/s/mgoxu9)
* MD5：266771bb457419c77849bff1ef241e51
* SHA1：fd1922a8469ca11307e8f29af399a1c3fe129bb5
* SHA256：5b18d4dc91540d6b32d6b152023ea1198634a3dd90dfad365d5a11a1ea2f14de
* SHA384：22bdb296e40a4eda2abae46469b1774ce44ed53041c3959f8413396b619531f0a04c8ee29d05a511ef156cca5e44a993
* SHA512：be6ef419fee671aeb08e53d7c001a058f740a3dc3e62838835f916090541dc485205203cd544fc83c2e39a05ce99157263d20283fb7185d438f29808e475418f

## 0.2.2

**包含的新特性**

* **日志系统** - 工具箱将在运行时输出日志，以更好地实现运行情况记录与问题诊断。
    - 尽管工具箱本体的未来目标是多语言，但日志系统的输出始终会是中文。
* **关于页面增加更多功能** - 增加连接至工具箱发布页、GitHub仓库、工具箱文档等地的链接，增加打开数据目录的按钮（用于查看日志等）。
* **接入一言功能** - 除定时刷新外，重构旧版工具箱中实现的一言API功能。

**已知问题**

* 为全体用户安装时（程序在系统Program Files文件下安装时）， **需要手动以管理员身份运行程序** ，此为程序开发时考虑不周，将在下个版本修复。
    - 故障原因是工具箱默认在安装目录中创建并记录日志，而Program Files目录需求管理员权限才能进行文件操作。

**问题修复**

* 来自上游的窗口问题，参见`0.2.1`的已知问题。

**下载**
安装程序下载链接：[https://file.mangofanfan.cn/s/9ktb6v](https://file.mangofanfan.cn/s/9ktb6v)
* MD5：5152cbdd0a93f2bf83a4709adadd3ec4
* SHA1：629e33e271a275c819890b3d5012f525a7423a88
* SHA256：cf645ee254beb0b4c8d43dffae801c54bf42441a5334c5d673b6204840415726
* SHA384：3195ac4280364547008c29eaf975ce009fd2a7f0cd04197f80e1baf3e664e0d07213ddc936232a1903a3c9cdc9f88562
* SHA512：53cacc8ef03fe7c6c0d677262d439a15a254551d4889bfd2de3f599d4a9fa3103e49f817cdbec7909842d7abfaebcc44642551318a43c655c31cf7252aff0c9e

## 0.2.1

**包含的新特性**

* **启动时版本检查** - 实现了简陋的启动时版本检查功能，可在设置中开启，检查结果会在工具箱主窗口中提醒并记录在日志中。
    - 未来计划实现自动下载新版本的安装程序。
* **新闻** - 实现了简陋的工具箱新闻功能，相当简陋。 

**已知问题**

* **来自上游的窗口问题** - 参见[我提的issue](https://github.com/zhiyiYo/PyQt-Frameless-Window/issues/178)，在开发环境Python3.11下存在窗口最大化与缩小时缺失动画以及相关的一系列问题，由于并非严重问题，等待上游修复。
    - 已经确定降级PySide6版本（6.8.1.1->6.7.2）能够规避该问题，将在工具箱`0.2.2`中规避问题。
    - 已经确定是PySide6 6.8.1的问题，上游等待PySide6修复。

**下载**
安装程序下载链接：[https://file.mangofanfan.cn/s/1nehnw](https://file.mangofanfan.cn/s/1nehnw)
* MD5：992cd3bf1b1b8b3b4089559cff4db91c
* SHA1：3703329b0bd54e925aa668a926ae26c2687d73fe
* SHA256：f42a08a69112220cfa25e59506fb99461c465a7c46b8ff88b48f43bf25239d6e
* SHA384：6ea8925bff7ee4c0b3ba2f6b662bc2e8a7306680546aafb4399d1340da99d28f0977071b8d2abe628ca7b0c426d4faa9
* SHA512：c61b760debb450ea74328d454430dc8ba2679f8f73cb243dd4dcf569478f2a3fb61ed8755a4182fcc1cee84ca5672dec841d702edf1c8ad2cfcf7518c7f8ae15

## 0.2.0

工具箱在此版本完全重构，但此版本并未分发。重构后的首个分发版本是0.2.1。

**包含的新特性**

**完全重构这个特性还不够多嘛？**

由于重构需要，暂时移除了下载工具与翻译工具，将在日后基于重构版工具箱重新实现。

## 0.1.0、0.0.0与0.0.1

中道崩殂的版本。从`0.0.1`向`0.1.0`的迈进是极其痛苦的，以至于最终`0.1.0`被直接放弃。

0.0.0与0.0.1版本的更新记录请参见下列地址：

* https://ifanspace.top/2024/08/28/510.html （完整）
* https://github.com/mangofanfan/FanTools/releases/ （只有这两个版本）

**下载** （仅供考古娱乐使用，不再维护，也不再接受任何issue）

* 命令行安装工具-0.0.1：[https://file.mangofanfan.cn/s/5awxmv](https://file.mangofanfan.cn/s/5awxmv)
* 芒果工具箱本体-0.0.1：[https://file.mangofanfan.cn/s/gx0vjp](https://file.mangofanfan.cn/s/gx0vjp)
* 命令行安装工具-0.0.0：[https://file.mangofanfan.cn/s/4aiaby](https://file.mangofanfan.cn/s/4aiaby)
* 芒果工具箱本体-0.0.0：[https://file.mangofanfan.cn/s/kmpnbp](https://file.mangofanfan.cn/s/kmpnbp)