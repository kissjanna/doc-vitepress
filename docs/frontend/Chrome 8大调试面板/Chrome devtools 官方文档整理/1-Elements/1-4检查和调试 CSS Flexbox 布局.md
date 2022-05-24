# 检查和调试 CSS Flexbox 布局

发表于2022 年 2 月 8 日，星期二

本指南向您展示如何发现页面上的 flexbox 元素，以及在**Elements**面板中检查和修改 flexbox 布局。



## 探索 CSS flexbox

当页面上的 HTML 元素具有`display: flex`或`display: inline-flex`应用到它时，您可以在[**元素**](https://developer.chrome.com/docs/devtools/open/)面板中看到`flex`它旁边的徽章。

![](https://wd.imgix.net/image/dPDCek3EhZgLQPGtEG3y0fTn4v82/lfqzSwGMHku5wP4J28Iu.png?auto=format&w=1600)



## 使用 flexbox 编辑器修改布局

您可以使用flexbox 编辑器直观地修改 flexbox 布局。

在样式窗格中，您可以看到声明旁边的弹性框编辑器display: flex按钮。

![](https://wd.imgix.net/image/dPDCek3EhZgLQPGtEG3y0fTn4v82/4FSnGdO2MC6OjAIcJhe9.png?auto=format&w=1600)



单击它以打开flexbox 编辑器。编辑器显示一个 flexbox 属性列表。每个属性的值选项都显示为图标按钮。

<img src="https://wd.imgix.net/image/dPDCek3EhZgLQPGtEG3y0fTn4v82/xiPYlTHn4rwTLhdHCe8L.png?auto=format&amp;w=1600" style="zoom: 33%;" />



要使文本在屏幕上居中，您可以单击`justify-content: center`和`align-items: center`按钮。

![](https://wd.imgix.net/image/dPDCek3EhZgLQPGtEG3y0fTn4v82/8vCt26eBuSASwxuT2jQl.png?auto=format&w=1600)



文本现在居中。请注意`justify-content: center`和`align-items: center`声明已添加到**样式**窗格中。



## 检查 flexbox 布局

您可以将鼠标悬停在**Elements**面板中的 flexbox 元素上以可视化布局。Overlay 出现在元素上，用虚线布置以显示其内容和项目的位置。

![](https://wd.imgix.net/image/dPDCek3EhZgLQPGtEG3y0fTn4v82/T5fn0VMAClusOkvKMs9d.png?auto=format&w=1600)



或者，您可以单击徽章来切换 flexbox 叠加层的显示。

![](https://wd.imgix.net/image/dPDCek3EhZgLQPGtEG3y0fTn4v82/7dNi6wFpjtpOAztDUYxf.png?auto=format&w=1600)



尝试将值更改为`justify-content: flex-end`. 叠加层会相应更改。

![](https://wd.imgix.net/image/dPDCek3EhZgLQPGtEG3y0fTn4v82/v5v7w1E7AaAuTf2RfZhL.png?auto=format&w=1600)



flex 编辑器中的图标是上下文感知的。它将根据布局方向而变化。例如，当您将 更改为 `flex-direction` 时， flex 编辑器 `column` 中的图标会相应地旋转。叠加层也会立即更新。

![](https://storage.googleapis.com/web-dev-uploads/video/dPDCek3EhZgLQPGtEG3y0fTn4v82/yQv7pWSi87eatl5uiJEN.mp4)



要使文本在屏幕上居中，您可以单击`justify-content: center`和`align-items: center`按钮。

![](https://wd.imgix.net/image/dPDCek3EhZgLQPGtEG3y0fTn4v82/8vCt26eBuSASwxuT2jQl.png?auto=format&w=1600)



## 检查 flexbox 布局

可以单击徽章来切换 flexbox 叠加层的显示。

![](https://wd.imgix.net/image/dPDCek3EhZgLQPGtEG3y0fTn4v82/7dNi6wFpjtpOAztDUYxf.png?auto=format&w=1600)



## 调整 flexbox 覆盖颜色

打开Layout窗格并向下滚动到Flexbox部分。您可以在此处查看页面的所有 flexbox 元素。

![](https://wd.imgix.net/image/dPDCek3EhZgLQPGtEG3y0fTn4v82/AfHGOOeGR5rs0sc9sK4l.png?auto=format&w=1600)



您可以使用旁边的复选框来切换每个 flexbox 元素的叠加层。与单击DOM 树badge中的 相同。

除此之外，您可以通过单击旁边的颜色图标来更改叠加层的颜色。例如，`container` 叠加层的颜色变为黑色。

![](https://wd.imgix.net/image/dPDCek3EhZgLQPGtEG3y0fTn4v82/GVmS8pvKt9gu51Jh3nAe.png?auto=format&w=1600)



要导航到 DOM 树中的弹性框元素，您可以单击它旁边的选择器图标。

![](https://storage.googleapis.com/web-dev-uploads/video/dPDCek3EhZgLQPGtEG3y0fTn4v82/DskcBFYnUc8zBocvXgdg.mp4)

最近更新时间：2022 年 2 月 8 日，星期二

