# 检查 CSS 网格

发表于2021 年 6 月 8 日，星期二

本指南向您展示如何在页面上发现 CSS 网格、检查它们并在Chrome DevTools的Elements面板中调试布局问题。



## 发现 CSS 网格

当页面上的 HTML 元素具有`display: grid`或`display: inline-grid`应用到它时，您可以在[**元素**](https://developer.chrome.com/docs/devtools/open/)面板中看到`grid`它旁边的徽章。

![](https://wd.imgix.net/image/admin/SbWH3OGFQDiXKV2Eev2j.png?auto=format&w=1600)

单击徽章以切换页面上网格 overlay 的显示。overlay 出现在元素上，像网格一样布局以显示其网格线和轨道的位置：

![](https://wd.imgix.net/image/admin/YwKMuoODL6eFMvfJOzlF.png?auto=format&w=1600)

打开 layout 窗格。当页面上包含网格时，layout 窗格包括一个网格部分，其中包含许多用于查看这些网格的选项。

![](https://wd.imgix.net/image/admin/r4Ignwcmy4VzFqs3Zzb1.png?auto=format&w=1600)

## 网格查看选项

layout 窗格中的**网格**部分包含 2 个子部分：

- Overlay 显示设置
- Grid overlays

让我们详细研究这些子部分。



## Overlay 显示设置

Overlay 显示设置由两部分组成：

1. 带有选项的下拉菜单：
   - **隐藏线标签**：隐藏每个网格覆盖的线标签。
   - **显示行号**：显示每个网格覆盖的行号（默认选择）。
   - **显示线名**：如果网格具有线名，则显示每个网格叠加的线名。

2. 带有选项的复选框：
   - **显示轨道大小**：切换以显示或隐藏轨道大小。
   - **显示区域名称**：切换以显示或隐藏区域名称，对于具有命名网格区域的网格。
   - **扩展网格线**：默认情况下，网格线仅显示在带有`display: grid`或`display: inline-grid`设置在其上的元素内部；启用此选项时，网格线沿每个轴延伸到视口的边缘。

让我们更详细地检查这些设置。

### 显示行号

默认情况下，正负线号显示在网格叠加层上。

![](https://wd.imgix.net/image/admin/KEEXn0ipZF0I7Y1qNuZs.png?auto=format&w=1600)

### 隐藏线标签

选择**隐藏行标签**以隐藏行号。

![](https://wd.imgix.net/image/admin/I1QJnFZDFcIflsKBSK8J.png?auto=format&w=1600)

### 显示行名

您可以选择显示线路名称来查看线路名称而不是数字。在此示例中，我们有 4 行名称：left、middle1、middle2 和 right。

在这个演示中，橙色元素从左到右跨越，使用 CSS grid-column: left / right。显示行名称可以更容易地可视化元素的开始和结束位置。

![](https://wd.imgix.net/image/admin/fiQzqCmGbD0acgVNXWyR.png?auto=format&w=1600)

### 显示轨道大小

启用显示轨道大小复选框以查看网格的轨道大小。

DevTools 将 **[authored size] - [computed size] ** 在每一行标签中显示：

- Authored size：样式表中定义的大小（如果未定义则省略）。
- computed size：屏幕上的实际尺寸。

在此演示中，snack-box列大小在 CSS 中定义grid-template-columns:1fr 2fr;。因此，列线标签同时显示authored和computed尺寸：1fr - 96.66px和2fr - 193.32px。

因为样式表中没有定义行大小，所以行线标签仅显示computed大小：80px和80px。

![](https://wd.imgix.net/image/admin/RknbkSjXv9ZKgL83nx8N.png?auto=format&w=1600)

### 显示区域名称

要查看区域名称，请启用显示区域名称复选框。在此示例中，网格中有 3 个区域 - top、bottom1和bottom2。

![](https://wd.imgix.net/image/admin/iPPMOUBJFtsTyKr0ZcMh.png?auto=format&w=1600)

### 延长网格线

启用延伸网格线复选框以将网格线沿每个轴延伸到视口的边缘。

![](https://wd.imgix.net/image/admin/OlajZ73i2Y8hlAIZAwFD.png?auto=format&w=1600)

## 网格 Overlays

Grid Overlays 部分包含页面上存在的网格列表，每个网格都有一个复选框，以及各种选项。

### 启用多个网格的叠加视图

您可以启用多个网格的叠加视图。在此示例中，启用了 2 个网格叠加层 - `main`和`div.snack-box`，每个都用不同的颜色表示。

![](https://wd.imgix.net/image/admin/GMCjbEkrzZXFfskAqlUe.png?auto=format&w=1600)

### 自定义网格覆盖颜色

您可以通过单击颜色选择器自定义每个网格叠加颜色。

![](https://wd.imgix.net/image/admin/GLcwHKYxWT6oQW7rd0HP.png?auto=format&w=1600)

###  突出显示网格

单击突出显示图标以立即突出显示 HTML 元素，在页面中滚动到它并在“元素”面板中选择它。

![](https://wd.imgix.net/image/admin/JinOsqhnOBZIf6A2UdWD.png?auto=format&w=1600)