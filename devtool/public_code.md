# 使用`public`代码
工具目录`tool`下还有一个`public`目录，这里存放的是公共代码，存放在此是为了与工具箱本体的代码做区分，并且方便工具导入。

使用`public`代码可以加速开发外表美观的工具，比如，使用`public_window.FanWindow`可以快速创建一个拥有空白窗口的空白工具。创建出的窗口与芒果工具箱本体窗口是风格一致、亮暗一致的，[工具结构](/devtool/structure.md)中给出的第一种创建窗口的方法就是使用了`FanWindow`来快速创建。此外，您也可以从`PySide6`和`qfluentwidgets`中导入各种组件或对象来设计窗口。

或者也可以直接使用设计师+UIC来创建窗口，但是请参见下面的注意事项。

::: warning ⚠️注意！
PySide6原生的设计师和UIC工具设计的、使用Qt原生组件的窗口，需要在实例化时继承PySide6的原生窗口类，而不建议继承`public`中提供的`FanWindow`。

这是因为当`FanWindow`切换亮暗主题时，原生的Qt组件并不能与之一同切换主题，从而导致在暗色下组件几乎完全不可见。

解决方案一：使用安装了QFluentWidgets插件的设计师（Fluent Client），参见[QFluentWidgets指南](https://qfluentwidgets.com/zh/pages/designer)。

解决方案二：在设计师中提升控件，但不能直接在设计师中预览设计效果，还是参见[上面的指南](https://qfluentwidgets.com/zh/pages/designer)。

解决方案三：手写UI，QFluentWidgets的控件的使用方式与Qt原生控件几乎一致，请参见[QFluentWidgets文档](https://qfluentwidgets.com/zh/pages/about)。

解决方案四：使用Qt原生组件+Qt原生窗口，这样创建的窗口不支持工具箱的亮暗主题切换，美观程度会下降，但能够使用原生的设计师和UIC工具。
:::

另外，如果您使用Pycharm，可以参考我的这篇文章：[为Pycharm添加PySide6外部工具的进阶教程](https://ifanspace.top/2025/01/26/599.html)。

## function

### getToolDir
获取工具目录。

此方法有几个重载，传入工具名后可以获得传入的工具名的所在目录，预计未来还会继续重载几个吧。

## public_window
提供与工具箱本体一家的`FanWindow`窗口类，经过芒果的轻度魔改。

只有`launchMode`为0的工具才能调用这里的窗口类……

### FanWindow
PySide6 * QFluentWidgets 窗口，用法非常简单合理。

只能使用QFluentWidgets组件填充在`FanWindow`内，例如将`QLabel`更换成QFluentWidgets中的`Label`家族的成员，将`QPushButton`换成QFluentWidgets中的`PushButton`与它的家人们。您也可以使用QFluentWidgets Pro中的组件，工具箱本体能够运行这些Pro版组件。

查看[QFluentWidgets的文档](https://qfluentwidgets.com/zh/)来入门这款Win11风格的PyQt/PySide组件库。

轻度魔改体现在哪里呢？`FanWindow`计划同时支持Windows11的云母效果与Windows10的亚克力效果，与芒果工具箱的主窗口同步。另外，`FanWindow`还提供一个`windowResizeSignal`信号，会在窗口大小变化时触发。
