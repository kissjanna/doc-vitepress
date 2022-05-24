# 查看和更改 CSS

发表于2017 年 6 月 8 日，星期四 •更新日期2021 年 8 月 16 日，星期一

完成这些交互式教程，了解使用 Chrome DevTools 查看和更改页面 CSS 的基础知识。



## 查看元素的 CSS

选择元素

![](https://wd.imgix.net/image/admin/wYBJBK3aGW4fvklHISIH.png?auto=format&w=1600)

可以看到作用于此元素的 class 和样式

![](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/dPkDHB9qgSHjLL6mc6GY.png?auto=format&w=1600)

## 向元素添加 CSS 声明

1. 查看节点。
2. 单击**样式**`element.style`选项卡顶部附近。
3. 键入`background-color`并按 Enter。
4. 键入`honeydew`并按 Enter。在**DOM 树**中，您可以看到对元素应用了内联样式声明。

![](https://wd.imgix.net/image/admin/dGNv5Vp8kUqnFM2DPAv5.png?auto=format&w=1600)

## 向元素添加 CSS 类

1. 单击**.cls**。DevTools 显示一个文本框，您可以在其中向所选元素添加类。
2. 在**Add new class**文本框中键入类名，然后按 Enter。**添加新class**文本框下方会出现一个复选框，您可以在其中打开和关闭课程。如果此元素应用了任何其他类，您也可以从这里切换它们。

![](https://wd.imgix.net/image/admin/4rq2npTbnE7mnd8SLKVV.png?auto=format&w=1600)

##  向类添加伪状态

使用**样式**选项卡将 CSS 伪状态永久应用于元素。DevTools 支持`:active`、`:focus`、`:hover`、`:visited`等。

1. 在**样式**选项卡中，单击**:hov**。

2. 检查**:hover**复选框。即使您实际上没有将鼠标悬停在元素上，背景颜色也会像以前一样发生变化。

   ![](https://wd.imgix.net/image/admin/7kiJfW9nNzN6khU33oQP.png?auto=format&w=1600)

## 更改元素的尺寸

使用样式选项卡中的**盒模型**交互式图表来更改元素的宽度、高度、填充、边距或边框长度。

1. 在Styles选项卡的Box Model图中，将鼠标悬停在padding上。元素的填充在视口中突出显示。

   > **注意**：根据 DevTools 窗口的大小，您可能需要滚动到**Styles**选项卡的底部才能看到**Box Model**。

2. 双击**Box Model**中的左边距，它当前的值`-`表示该元素没有左边距。

3. 键入100并按 Enter。盒子模型默认为像素，但它也接受其他值，例如25%、 或10vw。

   ![](https://wd.imgix.net/image/admin/LINZPIE7bhIZyp9BnT7l.png?auto=format&w=1600)

   ![](https://wd.imgix.net/image/admin/hOUK9PWTmPgaw9ffE8tK.png?auto=format&w=1600)