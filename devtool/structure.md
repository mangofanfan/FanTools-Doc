# 工具结构

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

# 使用 __name__ 方法是为了提供由工具箱导入并运行的接口。
if __name__ == "tool.hashCalculator.run":
    print("Hello FanTools!")

# 此外，可以制作更多类似的接口，比如最传统的：
if __name__ == "__main__":
    print("Goodbye FanTools!")
```
:::

`tool.json`中：
* `name`和`tip`键的文本会在工具箱中显示；
* `icon`键对应的是在工具箱中显示的工具图标；
* `module`键必须与工具所在的文件夹一致；
* `launchMode`是工具的启动模式，此项正在制作，保持为`0`即可。
* `ver`必须是`x.x.x`格式的版本号，计划用于未来的工具管理，此项正在制作。
* `author`作者。
* `modules`（与`module`不同）是此工具中使用到的Python第三方模块，以列表\[字符串\]的形式呈现，若无则为空列表，以供工具箱从pypi下载这些模块。

## 使用`public`代码
工具目录`tool`下还有一个`public`目录，这里存放的是公共代码，存放在此是为了与工具箱本体的代码做区分，并且方便工具导入。

使用`public`代码可以加速开发外表美观的工具，比如，使用`public_window.FanWindow`可以快速创建一个拥有空白窗口的空白工具。创建出的窗口与芒果工具箱本体窗口是风格一致、亮暗一致的。您可以从`PySide6`和`qfluentwidgets`中导入各种组件或对象来设计窗口。

或者也可以直接使用设计师+UIC来创建窗口，但是请参见下面的注意事项。

::: warning ⚠️注意！
PySide6原生的设计师和UIC工具设计的，使用Qt原生组件的窗口，需要在实例化时继承PySide6的原生窗口类，而不能继承`public`中提供的`FanWindow`。

这是因为当`FanWindow`切换亮暗主题时，原生的Qt组件并不能与之一同切换主题，从而导致在暗色下组件几乎完全不可见。

解决方案一：使用安装了QFluentWidgets插件的设计师（Fluent Client），参见[QFluentWidgets指南](https://qfluentwidgets.com/zh/pages/designer)。

解决方案二：在设计师中提升控件，但不能直接在设计师中预览设计效果，还是参见[上面的指南](https://qfluentwidgets.com/zh/pages/designer)。

解决方案三：手写UI，QFluentWidgets的控件的使用方式与Qt原生控件几乎一致，请参见[QFluentWidgets文档](https://qfluentwidgets.com/zh/pages/about)。

解决方案四：使用Qt原生组件+Qt原生窗口，这样创建的窗口不支持工具箱的亮暗主题切换，美观程度会下降，但能够使用原生的设计师和UIC工具。
:::

另外，如果您使用Pycharm，可以参考我的这篇文章：[为Pycharm添加PySide6外部工具的进阶教程](https://ifanspace.top/2025/01/26/599.html)。

## 创建一个工具吧

::: code-group

```json [tool.json]
{
  "name": "Example Tool",
  "module": "exampleTool",
  "icon": "",
  "ver": "3.2.1",
  "author": "MangoFanFan",
  "tip": "Basic example tool",
  "launchMode": 0,
  "modules": ["requests", "PySide6-Fluent-Widgets"]
}
```

```python [run.py]
from ..public.public_window import FanWindow

if __name__ == 'tool.exampleTool.run':
    w = FanWindow()
    w.show()
```
:::

在工具目录`tool/exampleTool/`下创建如上两个文件，即可注册一个可用的工具`Example Tool`。该工具可以打开一个空窗口，虽然它什么都干不了。
![空白窗口](/images/FanTools_ExampleTool_1.png)

此窗口是基于PySide6+QFluentWidgets实现的。芒果**个人建议**，希望接入工具箱的工具们如有GUI页面，最好使用PySide6实现GUI，以方便接入。

PyQt5/6、PySide2均可以较低成本地切换到PySide6。

但是谁**规定**只能使用Qt家的窗口？看不起Python内置窗口库Tkinter？

```python [run.py]
import tkinter

if __name__ == 'tool.exampleTool.run':
    top = tkinter.Tk()
    top.mainloop()
```

![另一个空白窗口](/images/FanTools_ExampleTool_2.png)

这样看来，Tkinter程序几乎可以无痛迁移为工具。

接下来，在窗口中如何布局组件，实现怎样的功能，就全靠工具开发者们的智慧啦。进阶的工具开发指南需要等待工具系统的进一步开发，目前仅作了解即可，如果您也对芒果工具箱这个项目感兴趣的话，欢迎现在就加入我们（其实只有我一个人啦）嗷！
