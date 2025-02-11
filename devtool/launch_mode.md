# 启动模式

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

`launchMode`启动模式是工具箱启动工具时采取的启动方案。为了方便理解，在工具箱源码中，有关的代码片段如下：

```python [tool_interface.py]
# 分启动模式来启动工具
if tool.launchMode == 0:  # 直接 import 来启动
    if tool.module not in self.launchedToolInfoDict.keys():
        self.launchedToolInfoDict[tool.module] = importlib.import_module(f"tool.{tool.module}.run")
    else:
        self.launchedToolInfoDict[tool.module] = importlib.reload(self.launchedToolInfoDict[tool.module])
elif tool.launchMode == 1:
    if tool.module not in self.launchedToolInfoDict.keys():
        process = QProcess()
        process.setEnvironment([f"{basicFunc.getHerePath()}/tool/{tool.module}"] + list(os.environ))
        process.started.connect(lambda: self.processStarted(process, toolName))
        process.readyReadStandardOutput.connect(lambda: self.processPrint(process, toolName))
        process.readyReadStandardError.connect(lambda: self.processPrint(process, toolName))
        process.finished.connect(lambda: self.processFinished(process, toolName))
        process.finished.connect(lambda: self.launchedToolInfoDict.pop(tool.module, None))
        process.start(self.pythonRuntimePath, [f"{basicFunc.getHerePath()}/tool/{tool.module}/run.py"])
        self.launchedToolInfoDict[tool.module] = process
    else:
        self.infoBar.multi_launch_error(self.window())
        logger.error(f"工具 {toolName} 无法多开。")
```

大意就是，`launchMode`为0的工具，工具箱会直接import此工具的`run.py`以启动工具，此时工具的代码会在与工具箱同一进程中运行；`launchMode`为1的工具，工具箱会在另一个进程中调用随工具箱一同安装的Python解释器运行此工具的`run.py`，工具在独立的进程中运行。

这也意味着，对于两种启动模式，你需要为你的工具设置不同的启动接口，也如同我们在[工具结构](/devtool/structure.md)的最后看到的两个例子一样：
* `launchMode`=0，`run.py`中使用`if __name__ == 'tool.exampleTool.run'`作为接口；
* `launchMode`=1，`run.py`中使用`if __name__ == '__main__'`作为接口。

同时这也意味着，只有`launchMode`=1时，您才可以在`tool.json`的`modules`中设置工具需要的其他第三方模块。

工具系统的更多细节，需要等待后续开发进展……
