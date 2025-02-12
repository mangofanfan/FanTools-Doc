# 工具结构

::: warning 开发中
工具箱（尤其是工具系统）目前仍在较为早期的开发阶段，此处的工具开发指南不能代表最终品质。

目前工具箱本体更新时会覆盖更新工具目录，未来将会提供可靠的工具开发流程，还请期待（X）
:::

## 工具目录
对于安装的分发版本，在安装目录下的`tool`文件夹就是其工具目录。
![安装目录下的工具目录「tool」](/images/Explore_InstalledToolDir_0.2.1.png)

在GitHub仓库中的对应目录是仓库根目录下的`tool`文件夹。

## 定义一个工具
工具箱会扫描`tool`目录下的每一个子目录。如果一个子目录符合工具的定义结构，则认为其是一个合法的工具，并显示在工具页面中。

以下是合法的工具结构示例：
```text
tool->...
    ->hashCalculator->...
                    ->tool.json
                    ->run.py
    ->public->...
```
工具最少需要提供`tool.json`和`run.py`两个文件，否则无法被工具箱正确加载。

::: code-group
```json [tool.json]
{
  "name": "Hash Calculator",
  "module": "hashCalculator",
  "icon": ":/app/images/icons/IconHash.png",
  "ver": "0.0.1",
  "author": "MangoFanFan",
  "tip": "Calculate Hash of anything.",
  "launchMode": 0,
  "modules": []
}
```

```python [run.py]
# 一般来说会在这里封装一些业务代码，然后在下面用魔法方法写调用接口（虽然严格上不能这么说，但也可以这么理解吧）

# 使用 __name__ 方法是为了提供由工具箱导入并运行的接口。launchMode为0的工具必须实现此接口。
if __name__ == "tool.hashCalculator.run":
    print("Hello FanTools!")

# 此外，可以制作更多类似的接口，比如最传统的。launchMode为1的工具必须实现此接口。
if __name__ == "__main__":
    print("Goodbye FanTools!")
```
:::

`tool.json`中：
* `name`和`tip`键的文本会在工具箱中显示；
* `icon`键对应的是在工具箱中显示的工具图标；
* `module`键必须与工具所在的文件夹一致；
* `launchMode`是工具的启动模式，此项正在制作，目前提供0和1两种选项，请参阅[启动模式](/devtool/launch_mode.md)。
* `ver`必须是`x.x.x`格式的版本号，计划用于未来的工具管理，此项正在制作。
* `author`作者。
* `modules`（与`module`不同）是此工具中使用到的Python第三方模块，以列表\[字符串\]的形式呈现，若无则为空列表，请参阅[启动模式](/devtool/launch_mode.md)。

## 创建一个工具

::: code-group

```json [tool.json] {8}
{
  "name": "Example Tool",
  "module": "exampleTool",
  "icon": "",
  "ver": "3.2.1",
  "author": "MangoFanFan",
  "tip": "Basic example tool",
  "launchMode": 0,
  "modules": []
}
```

```python [run.py] {3}
from ..public.public_window import FanWindow

if __name__ == 'tool.exampleTool.run':
    w = FanWindow()
    w.show()
```
:::

在工具目录`tool/exampleTool/`下创建如上两个文件，即可注册一个可用的工具`Example Tool`。该工具可以打开一个空窗口，虽然它什么都干不了。
![空白窗口](/images/FanTools_ExampleTool_1.png)

我们创建的空窗口`w`的基类是`FanWindow`，来自工具目录下的`public`目录，基于PySide6+QFluentWidgets实现。芒果**个人建议**，希望接入工具箱的工具们如有GUI页面，最好使用PySide6实现GUI，以方便接入。

::: tip 公共代码
您可以[在这里](/devtool/public_code.md)查看已有的公共代码，使用这些代码可以简化简单工具的开发流程。公共代码跟随芒果工具箱本体更新维护。
:::

PyQt5/6、PySide2均可以较低成本地切换到PySide6。

但是谁**规定**只能使用Qt家的窗口？看不起Python内置窗口库Tkinter？

::: code-group

```json [tool.json] {8}
{
  "name": "Example Tool",
  "module": "exampleTool",
  "icon": "",
  "ver": "3.2.1",
  "author": "MangoFanFan",
  "tip": "Basic example tool",
  "launchMode": 1,
  "modules": []
}
```

```python [run.py] {3}
import tkinter

if __name__ == '__main__':
    top = tkinter.Tk()
    top.mainloop()
```

:::

![另一个空白窗口](/images/FanTools_ExampleTool_2.png)

这样看来，Tkinter程序几乎可以无痛迁移为工具。

接下来，在窗口中如何布局组件，实现怎样的功能，就全靠工具开发者们的智慧啦。进阶的工具开发指南需要等待工具系统的进一步开发，目前仅作了解即可，如果您也对芒果工具箱这个项目感兴趣的话，欢迎现在就加入我们（其实只有我一个人啦）嗷！

::: tip 关于启动模式 launchMode
本页中介绍使用公共代码中的`FanWindow`和Python标准库`Tkinter`创建窗口时，暂时性忽略了更多的技术细节与原理。

比如，在给出的示例中，两种方法创建窗口时，`tool.json`中的`launchMode`的值并不一样。

示例仅为演示工具系统的基本操作，如果您确实对工具开发有些兴趣，请务必关注本文档中的更多内容……
:::
