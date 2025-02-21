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

## qfluentwidgetsfanaddons
如果 `public_window` 是轻度魔改，这里就是中重度的魔改了，以至于我认为有必要单独分一个模块出来给它，并且起了一个（看起来）非常厉害的名字。

是针对 PySide6 下 QFluentWidgets 与其 Pro 组件库的功能扩展，目前同样处于早期开发阶段，主要针对工具箱部分组件的需要而设计，未来有发布至 pypi 的打算，但基本不会考虑支持 PyQt/PySide 全系列。

决定设计此模块的原因是希望能在设计师中使用我的魔改组件！所以，它来辣！

::: tip 注意
由于 qfluentwidgetsfanaddons 目前不在重点开发，下面提供的描述仅供参考，可以在工具箱的工具目录 `public/qfluentwidgetsfanaddons` 中查看源码。
:::

### list_widget
本模块中提供的列表组件主要是简化了右键菜单的配置，简化开发者配置组件在右键单击时显示弹出菜单的操作逻辑。本模块提供以下三个组件：

* FanQListWidget
    * QListWidget 是 PySide6 的原生列表组件。

* FanListWidget
    * ListWidget 是 QFluentWidgets 的组件。

* FanRoundListWidget
    * RoundListWidget 是 Pro 组件。

通过简单的 `setRightClickMenu()` ，开发者可以非常方便地设置右键菜单。

该函数**必须**接收两个参数，可以是两个菜单对象（`RoundMenu` 或 `QMenu`），也可以是一个菜单与一个右键菜单模式（`RightClickMenuMode`）。

```python [list_widget.py]
@overload
def setRightClickMenu(self, menu: RoundMenu | QMenu, mode: RightClickMenuMode): ...
@overload
def setRightClickMenu(self, menu: RoundMenu | QMenu, menu2: RoundMenu | QMenu): ...
```

`RightClickMenuMode`支持三种枚举类型，分别是`AlwaysShow`（在列表组件中任意位置右键都可以打开菜单）、`OnItemShow`（只有在 QListWidgetItem 上右键才能打开菜单）与`NeverShow`（从不打开菜单）。此选项仅在只传入一个菜单对象时有效。

若传入了两个菜单，则在 QListWidgetItem 上右键单击时打开`menu2`，在列表组件的空白区域右键时打开`menu`，无需`RightClickMenuMode`。

正在开发的翻译家工具的主窗口中使用了 FanRoundListWidget：

```python [window.py] {13,14}
self.SuggestionsPopMenu1 = RoundMenu()
self.SuggestionsPopMenu1.addActions([
    Action(FIC.DELETE, self.tr("Clear suggestions"),
           triggered=self._clearThinking)
])
self.SuggestionsPopMenu2 = RoundMenu()
self.SuggestionsPopMenu2.addActions([
    Action(FIC.UP, self.tr("Apply suggestion"),
           triggered=self._onApplySuggestion),
    Action(FIC.DELETE, self.tr("Clear suggestions"),
           triggered=self._clearThinking)
])
self.RoundListWidget_Text_Suggested.setRightClickMenu(self.SuggestionsPopMenu1, self.SuggestionsPopMenu2)
self.RoundListWidget_Text_Suggested.setLeftClickEnabled(False)
```

此外，顺手提供一个 `setLeftClickEnabled()` 方法，可以控制列表是否处理鼠标左键的点击事件。设置为 False 之后，左键将无法选中列表中的 QListWidgetItem。

### card_widget

#### ClickableCardWidget
可点击选中的卡片组件，用来实现有复杂需求的列表。下面是工具箱翻译工具中的一个使用案例，`TextLineWidget`本质是卡片，放在滚动区域中并实现点击选中效果以模拟成列表组件。

只需要下面划出的两行就可以启用点击选中卡片的功能。重写 `setChosen()` 方法可以自定义在选中或取消选中时的处理方法。

```python [text_line_widget.py] {18,19}
from PySide6.QtCore import Signal, QSize
from PySide6.QtWidgets import QHBoxLayout
from qfluentwidgets import BodyLabel, IconWidget
from qfluentwidgets import FluentIcon as FIC

from .text_object import TextObject
from ...public.qfluentwidgetsfanaddons import ClickableCardWidget


class TextLineWidget(ClickableCardWidget):

    isChosenSignal = Signal(TextObject)

    def __init__(self, parent=None):
        super().__init__(parent)
        self._stayChosen = False

        self.setChosenEnabled(True)
        self.setClickToChoose(True)

        self._textObject: TextObject = None

        self._layout = QHBoxLayout()
        self.setLayout(self._layout)

        self._iconLabel = IconWidget()
        self._iconLabel.setFixedSize(QSize(24, 24))
        self._textLabel = BodyLabel()
        self._textLabel.setText("")

        self._layout.addWidget(self._iconLabel)
        self._layout.addWidget(self._textLabel)

        self.clicked.connect(lambda: self.setChosen(True))

    def setText(self, text: str) -> None:
        self._textLabel.setText(text)
        return None

    def setTextObject(self, textObject: TextObject) -> None:
        self._textObject = textObject
        self._textLabel.setText(f"[{self._textObject.id}] {self._textLabel.text()}")
        if self._textObject.getTranslated():
            self.setAccept()
        return None

    def setAccept(self):
        self._iconLabel.setIcon(FIC.ACCEPT)
        return None

    def setUnAccept(self):
        self._iconLabel.setIcon(FIC.QUESTION)
        return None

    def setChosen(self, isChosen: bool) -> None:
        if isChosen:
            super().setChosen(isChosen)
            self._stayChosen = True
            self.isChosenSignal.emit(self._textObject)
        else:
            if self._stayChosen:
                self._stayChosen = False
            else:
                super().setChosen(isChosen)
        return None

    @property
    def textObject(self):
        return self._textObject
```

以上代码实现的组件被添加在下图所示翻译家窗口的左侧滚动区域中，从而模拟成列表。

![翻译家效果](/images/Translator_View_0.3.0.png)