# CSS 功能参考

发表于2017 年 6 月 9 日，星期五



在与查看和更改 CSS 相关的 Chrome DevTools 功能的综合参考中发现新的工作流程。

请参阅[查看和更改 CSS 入门](https://developer.chrome.com/docs/devtools/css/)以了解基础知识。

## 选择一个元素

DevTools的**Elements**面板允许您一次查看或更改一个元素的 CSS。所选元素在**DOM 树**中以蓝色突出显示。元素的样式显示在**样式**窗格中。有关教程，请参阅[查看元素的 CSS](https://developer.chrome.com/docs/devtools/css#view)。

![选定元素的示例](https://wd.imgix.net/image/admin/Iganvpf9K9dEOpSb6wIA.png?auto=format)

**图 1**。**在DOM 树**`h1`中以蓝色突出显示的元素是选定元素。在右侧，元素的样式显示在**样式**窗格中。**在左侧，元素在视口中突出显示，但这只是因为鼠标当前在DOM 树**中悬停在它上面

选择元素的方法有很多：

- 在您的视口中，右键单击元素并选择**Inspect**。
- 在 DevTools 中，单击**选择元素** ![选择一个元素](https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/7HgaRejtWu4NfpPOTtJU.png?auto=format)或按Command+ Shift+ C(Mac) 或Control+ Shift+ C(Windows、Linux)，然后单击视口中的元素。
- 在 DevTools 中，单击**DOM Tree**中的元素。
- `document.querySelector('p')`在 DevTools 中，像在**Console**中一样运行查询，右键单击结果，然后**在 Elements panel 中选择 Reveal**。

## 查看 CSS

### 查看定义规则的外部样式表

在**样式**窗格中，单击 CSS 规则旁边的链接以打开定义规则的外部样式表。

如果样式表被minified，请参阅[Make a minified file readable.](https://developer.chrome.com/docs/devtools/javascript/reference#format)。

![查看定义规则的样式表](https://wd.imgix.net/image/admin/DIRRbj70JvHO7EDpeSdC.svg)

**图 2**。单击`devsite-google-blue.css:487`将转到第 487 行`devsite-google-blue.css`，其中`.devsite-article h1:first-of-type`定义了 CSS 规则。

### 仅查看实际应用于元素的 CSS

**Styles**选项卡向您显示适用于元素的所有规则，包括已被覆盖的声明。如果您对覆盖的声明不感兴趣，请使用**Computed**选项卡仅查看实际应用于元素的 CSS。

1. 选择一个元素。
2. 转到**Elements**面板中的**Computed**选项卡。

**注意：**在宽 DevTools 窗口中，**Computed**选项卡不存在。**Computed**选项卡的内容显示在**Styles**选项卡上。

继承的属性是不透明的。选中**Show All**复选框以查看所有继承的值。

![计算选项卡](https://wd.imgix.net/image/admin/QZo3RH4i4zmlurpX8M3B.svg)

**图 3**。**Computed**选项卡显示应用于当前选定`h1`元素的CSS 属性

### 按字母顺序查看 CSS 属性

使用**Computed**选项卡。

### 查看继承的 CSS 属性

选中**Computed**选项卡中的**Show All**复选框。

或者，向下滚动**样式**窗格并找到名为`Inherited from <element_name>`.

![查看样式窗格的继承自...部分。](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/TuWZmbeQlHR6Qp6pUHVP.png?auto=format)

### 查看`@supports`规则

如果某条特定的规则被应用于元素，那么 Styles tab 会显示 `@supports` 。例如，检查以下元素：

![查看@supports at-rules](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/Lw1ZveiO2lxVFDgylmnC.png?auto=format)

如果您的浏览器支持该`lab()`功能，则该元素为绿色，否则为紫色。

**注意**：在撰写本文时，只有 Safari[支持 CIELAB 颜色空间](https://caniuse.com/?search=lab)。

### 查看元素的盒子模型

要查看元素[的盒子模型](https://developer.mozilla.org/docs/Learn/CSS/Introduction_to_CSS/Box_model)，请转到**样式**选项卡。如果您的 DevTools 窗口很窄，则**盒子模型**图位于选项卡的底部。

要更改值，请双击它。

![盒子模型图](https://wd.imgix.net/image/admin/3M83x7zsgaeJctz6B3iu.png?auto=format)

**图 4**。**Styles**选项卡中的**Box Model**图显示了当前选定元素的 box 模型`h1`

### 搜索和过滤元素的 CSS

使用**样式**和**计算选项卡上的****过滤器**文本框来搜索特定的 CSS 属性或值。

要在**Computed**选项卡中搜索继承的属性，请选中**Show All**复选框。

![过滤样式选项卡](https://wd.imgix.net/image/admin/2wXKvRxuWUObC2uNfIJ5.png?auto=format)

**图 5**。过滤**样式**选项卡以仅显示包含搜索查询的规则`color`

![过滤计算选项卡](https://wd.imgix.net/image/admin/sORR9WlEYpkRtltoSHp8.png?auto=format)

**图 6**。过滤**Computed**选项卡以仅显示包含搜索查询的声明`100%`

### 切换一个伪类

要切换伪类，如`:active`、`:focus`、`:hover`、或：`:visited``:focus-within``focus-visible`

1. [选择一个元素](https://developer.chrome.com/docs/devtools/css/reference/#select)。
2. 在**元素**面板上，转到**样式**选项卡。
3. 点击**:hov**。
4. 检查您要启用的伪类。

![切换 :hover 伪类](https://wd.imgix.net/image/admin/Ag3tYHtZr72Op5Xf1J1A.png?auto=format)

**图 7**。切换`:hover`伪类。在视口中，您可以看到`background-color: cornflowerblue`声明正在应用于元素，即使该元素实际上并没有被悬停在上面

有关交互式教程，请参阅[向类添加伪状态。](https://developer.chrome.com/docs/devtools/css#pseudostates)

### 查看继承的高亮伪元素

[伪元素可](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)让您为元素的特定部分设置样式。高亮伪元素是具有“选定”状态的文档部分，它们被设置为“高亮”以向用户指示此状态。例如，这样的伪元素是`::selection`、`::spelling-error`、`::grammar-error`和`::highlight`。

正如[规范](https://drafts.csswg.org/css-pseudo-4/#highlight-cascade)中提到的，当多种风格发生冲突时，级联决定了获胜的风格。

`--enable-blink-features=HighlightInheritance`要启用此功能，请使用该标志运行 Chrome 。

为了更好地理解规则的继承和优先级，可以查看继承的高亮伪元素：

1. [检查下面的文字](https://developer.chrome.com/docs/devtools/open/#elements)。

   我继承了我父母高亮伪元素的风格。选择我！

2. 选择上面文本的一部分。

3. 在**样式**窗格中，向下滚动以找到该`Inherited from ::selection pseudo of...`部分。

![查看样式窗格的继承部分。](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/te2Rhrbqs5BlrlcVFPZf.png?auto=format)

### 查看级联层

[级联层](https://developer.chrome.com/blog/cascade-layers/)可以更明确地控制您的 CSS 文件，以防止样式特定性冲突。这对于大型代码库、设计系统以及在应用程序中管理第三方样式很有用。

要查看级联层，请[检查](https://developer.chrome.com/docs/devtools/open/#elements)下面的元素并打开**Elements** > **Styles**。

在**样式**窗格中，查看 3 个层叠层及其样式：`page`、`component`和`base`。

![级联层](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/NAXkykrJcC23cZ1jWCin.png?auto=format)

要查看图层顺序，请单击图层名称或**切换 CSS 图层视图**层数按钮。

该`page`层具有最高的特异性，因此元素的背景是绿色的。

### 在打印模式下查看页面

在打印模式下查看页面：

1. 打开[命令菜单](https://developer.chrome.com/docs/devtools/command-menu/)。
2. 开始输入`Rendering`并选择`Show Rendering`。
3. 对于**Emulate CSS Media**下拉菜单，选择**print**。

### 使用 Coverage 选项卡查看已使用和未使用的 CSS

Coverage 选项卡显示页面实际使用的 CSS。

1. 在 DevTools 处于焦点时按Command+ Shift+ P(Mac) 或Control+ Shift+ (Windows、Linux、ChromeOS) 以打开命令菜单。P

2. 开始输入`coverage`并选择**Show Coverage**。出现覆盖选项卡。

   

   **图 8**。从命令菜单打开 Coverage 选项卡

   

   **图 9**。覆盖选项卡

3. 单击**开始检测覆盖率并重新加载页面** ![开始检测覆盖率并重新加载页面](https://wd.imgix.net/image/admin/7Nr8n3jly53lAoufh6Tn.png?auto=format)。页面重新加载，Coverage 选项卡概述了浏览器加载的每个文件中使用了多少 CSS（和 JavaScript）。绿色代表使用的 CSS。红色代表未使用的 CSS。

   

   **图 10**。使用和未使用多少 CSS（和 JavaScript）的概述

4. 单击 CSS 文件以查看其使用的 CSS 的逐行细分。

   

   **图 11**。第 55 至 57 行和第 65 至 67`devsite-google-blue.css`行未使用，而使用第 59 至 63 行

### 强制打印预览模式

请参阅[强制 DevTools 进入打印预览模式](https://developer.chrome.com/docs/devtools/css/print-preview/)。

## 更改 CSS

### 向元素添加 CSS 声明

由于声明的顺序会影响元素的样式，因此您可以通过不同的方式添加声明：

- [添加内联声明](https://developer.chrome.com/docs/devtools/css/reference/#add-declaration-inline)。相当于给`style`元素的 HTML 添加一个属性。
- [向样式规则添加声明](https://developer.chrome.com/docs/devtools/css/reference/#add-declaration-to-rule)。

**您应该使用什么工作流程？**对于大多数情况，您可能希望使用内联声明工作流。内联声明比外部声明具有更高的特异性，因此内联工作流程可确保更改在元素中如您预期的那样生效。有关特异性的更多信息，请参阅[选择器类型](https://developer.mozilla.org/docs/Web/CSS/Specificity#Selector_Types)。

如果您正在调试元素的样式，并且需要专门测试在不同位置定义声明时会发生什么，请使用其他工作流程。

#### 添加内联声明

添加内联声明：

1. [选择一个元素](https://developer.chrome.com/docs/devtools/css/reference/#select)。
2. 在**Styles窗格中，在****element.style**部分的括号之间单击。光标聚焦，允许您输入文本。
3. 输入属性名称并按Enter。
4. 输入该属性的有效值并按Enter。在**DOM Tree**中，您可以看到`style`已向元素添加了一个属性。

![添加内联声明](https://wd.imgix.net/image/admin/aUviBexUPdpxXvUbSUxS.png?auto=format)

**图 12**。和`margin-top`属性`background-color`已应用于所选元素。在**DOM 树**中，您可以看到反映在元素`style`属性中的声明

#### 向样式规则添加声明

向现有样式规则添加声明：

1. [选择一个元素](https://developer.chrome.com/docs/devtools/css/reference/#select)。
2. 在“**样式”**窗格中，单击要添加声明的样式规则的方括号。光标聚焦，允许您输入文本。
3. 输入属性名称并按Enter。
4. 输入该属性的有效值并按Enter。

![更改声明的值](https://wd.imgix.net/image/admin/dQMFYTxsVz5WxQpuvRga.png?auto=format)

**图 13**。将`border-bottom-style:groove`声明添加到样式规则

### 更改声明名称或值

双击声明的名称或值以更改它。有关将值快速增加或减少 0.1、1、10 或 100 个单位的快捷方式，请参阅[使用键盘快捷键更改声明值。](https://developer.chrome.com/docs/devtools/css/reference/#values-shortcuts)

### 使用键盘快捷键更改声明值

在编辑声明的值时，您可以使用以下键盘快捷键将值增加固定数量：

- Option+ Up(Mac) 或Alt+ Up(Windows, Linux) 以 0.1 递增。
- Up将值更改 1，如果当前值介于 -1 和 1 之间，则更改 0.1。
- Shift+Up增加 10。
- Shift+ Command+ Up(Mac) 或Control+ Shift+ Page Up(Windows, Linux) 将值增加 100。

递减也有效。Up只需将上面提到的每个实例替换为Down.

### 向元素添加类

将类添加到元素：

1. **选择DOM 树**中[的元素](https://developer.chrome.com/docs/devtools/css/reference/#select)。
2. 单击**.cls**。
3. 在**添加新类**文本框中输入类的名称。
4. 按Enter。

![元素类窗格](https://wd.imgix.net/image/admin/US4gZWGNdDcz4MswYkV3.svg)

**图 14**。**元素**类窗格

### 模拟明暗主题偏好并启用自动暗模式

要切换[自动深色模式或模拟用户对](https://developer.chrome.com/blog/auto-dark-theme/)[浅色或深色主题](https://web.dev/prefers-color-scheme/)的偏好：

1. 在**Elements** > **Styles**窗格中，单击![切换常见的渲染模拟。](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/CNwUGOgogDCqUaQGt9ZS.svg)**Toggle common rendering emulations**。![切换常见的渲染模拟。](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/2G2TqgXtPcUnSgRN4saG.png?auto=format)
2. 从下拉列表中选择以下选项之一：
   - **首选配色方案：浅色**。表示用户更喜欢浅色主题。
   - **喜欢颜色方案：深色**。表示用户更喜欢深色主题。
   - **自动暗模式**。即使您没有实现它，也会以暗模式显示您的页面。此外，设置`prefers-color-scheme`为`dark`自动。

此下拉菜单是“[模拟 CSS 媒体功能”`prefers-color-scheme`](https://developer.chrome.com/docs/devtools/rendering/apply-effects/#enable-automatic-dark-mode])和“**渲染”选项卡的**[启用自动暗模式](https://developer.chrome.com/docs/devtools/rendering/apply-effects/#enable-automatic-dark-mode)选项的快捷方式。

### 切换课程

要启用或禁用元素上的类：

1. **选择DOM 树**中[的元素](https://developer.chrome.com/docs/devtools/css/reference/#select)。
2. 打开**元素类**窗格。请参阅[向元素添加类](https://developer.chrome.com/docs/devtools/css/reference/#add-class)。**Add New Class**文本框下方是应用于此元素的所有类。
3. 切换要启用或禁用的课程旁边的复选框。

### 添加样式规则

添加新样式规则：

1. [选择一个元素](https://developer.chrome.com/docs/devtools/css/reference/#select)。
2. 单击**新建样式规则** ![新样式规则](https://wd.imgix.net/image/admin/XcURsD5IoAJqI4TwgY4w.png?auto=format)。DevTools 在**element.style**规则下插入一个新规则。

![添加新样式规则](https://wd.imgix.net/image/admin/yAkLVkP6eeeBihslr7oy.png?auto=format)

**图 15**。DevTools`h1.devsite-page-title`在点击**New Style Rule后添加样式规则**

#### 选择要添加规则的样式表

添加[新样式规则](https://developer.chrome.com/docs/devtools/css/reference/#style-rule)时，单击并按住**新样式规则** ![新样式规则](https://developer.chrome.com/docs/devtools/css/imgs/new-style-rule.png)以选择要添加样式规则的样式表。

![选择样式表](https://wd.imgix.net/image/admin/QEehBhl9E7tfEwyfdWgO.png?auto=format)

**图 16**。选择样式表

### 切换声明

要打开或关闭单个声明：

1. [选择一个元素](https://developer.chrome.com/docs/devtools/css/reference/#select)。
2. 在**样式**窗格中，将鼠标悬停在定义声明的规则上。每个声明旁边都会出现复选框。
3. 选中或取消选中声明旁边的复选框。当您取消选中声明时，DevTools 会将其划掉以表明它不再处于活动状态。

![切换声明](https://wd.imgix.net/image/admin/Z36P2RuDUFAFIp8kTZ6N.png?auto=format)

**图 20**。当前选定元素的`color`属性已关闭

### 使用拾色器更改颜色

<iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" class="youtube__embed" frameborder="0" loading="lazy" src="https://www.youtube.com/embed/TuR27BxCRVk" title="youtube 嵌入" style="box-sizing: border-box; border: 0px; height: 393.75px; left: 350px; position: absolute; top: 196.875px; transform: translate(-50%, -50%); width: 700px;"></iframe>

**颜色选择器**提供了一个用于更改`color`和`background-color`声明的GUI。

打开**拾色器**：

1. [选择一个元素](https://developer.chrome.com/docs/devtools/css/reference/#select)。

2. 在**样式**选项卡中，找到要更改的`color`或声明。`background-color`在`color`or`background-color`值的左侧，有一个小方块，它是颜色的预览。

   

   **图 24**。左侧的蓝色小方块`rgb(123, 170, 247)`是该颜色的预览

3. 单击预览以打开**拾色器**。

   

   **图 25**。**颜色选择**器

**以下是Color Picker**的每个 UI 元素的描述：

![颜色选择器，带注释](https://wd.imgix.net/image/admin/kAtu8Uoi2x8IFvaX561h.svg)

**图 26**。**颜色选择器**，带注释的

1. **色调**。

2. **吸管**。请参阅[使用吸管从页面上取样颜色](https://developer.chrome.com/docs/devtools/css/reference/#eyedropper)。

3. **复制到剪贴板**。将**显示值**复制到剪贴板。

4. **显示值**。颜色的[RGBA](https://drafts.csswg.org/css-color/#rgb-functions)、[HSLA](https://drafts.csswg.org/css-color/#the-hsl-notation)、[HWBA](https://drafts.csswg.org/css-color/#the-hwb-notation)或[十六进制](https://drafts.csswg.org/css-color/#hex-notation)表示。

5. **调色板**。单击其中一个正方形以将颜色更改为该正方形。

6. **色相**。

7. **不透明度**。

8. **显示值切换器**。在当前颜色的[RGBA](https://drafts.csswg.org/css-color/#rgb-functions)、[HSLA](https://drafts.csswg.org/css-color/#the-hsl-notation)、[HWBA](https://drafts.csswg.org/css-color/#the-hwb-notation)和[Hex](https://drafts.csswg.org/css-color/#hex-notation)表示之间切换。

   **注意**：或者，要在颜色表示之间切换，请按住Shift并单击颜色预览按钮。

9. **调色板切换器**。[在Material Design 调色板](https://material.io/design/color/the-color-system.html#color-usage-and-palettes)、自定义调色板或页面颜色调色板之间切换。DevTools 根据在样式表中找到的颜色生成页面调色板。

#### 使用吸管（在任何地方）采样颜色

当您打开**拾色器**时，**滴管** ![吸管。](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/WKeaXT922ot9wQjtvwcZ.svg)默认处于打开状态。

**吸管** 可以从页面上采样颜色，![吸管](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/WKeaXT922ot9wQjtvwcZ.svg)并且启用相应的实验后，可以从屏幕上的任何位置采样：

- 从页面中选择一种颜色：

  1. 将鼠标悬停在视口中的目标颜色上。

  2. 点击确认。

     

  **颜色选择器**显示的当前颜色值`#212121`接近黑色。单击蓝色后，此颜色将变为在视口中突出显示的蓝色。

- （实验性）从屏幕上的任意位置选择一种颜色：

  要启用此实验性功能，请选中**设置**>**实验**下**的浏览器窗口外的启用颜色选择，**然后重新加载 DevTools。![设置](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/bGxcjrhJIjemksd4PcbJ.svg)

  1. 将鼠标悬停在屏幕上的目标颜色上。

  2. 点击确认。

     ![在屏幕上的任何位置使用吸管。](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/8Omn8AauWoiknzjzjlGA.png?auto=format)

  **颜色选择器**显示当前颜色值为`rgb(224 255 255 / 15%)`。单击粉红色后，此颜色会从浏览器窗口外部变为粉红色。

### 使用角度时钟更改角度值

**Angle Clock**提供了一个 GUI 用于更改CSS 属性值中的`<angle>`s。

打开**角度时钟**：

1. 选择一个带有角度声明[的元素。](https://developer.chrome.com/docs/devtools/css/reference/#select)例如，选择下面的文本。

2. 在**样式**选项卡中，找到要更改的`transform`或声明。`background`单击角度值旁边的**角度预览框。**

   

   **图 28**。`-5deg`左边的小时钟`0.25turn`是角度的预览。

3. 单击预览以打开**角度时钟**。

   

   **图 29**。角度时钟。

4. 通过单击**角度时钟**圆圈更改角度值或滚动鼠标以将角度值增加/减少 1。

5. 有更多的键盘快捷键可以更改角度值。[在样式窗格键盘快捷键](https://developer.chrome.com/docs/devtools/shortcuts#styles)中了解更多信息。

### 使用阴影编辑器更改框和文本阴影

<iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" class="youtube__embed" frameborder="0" loading="lazy" src="https://www.youtube.com/embed/DAD72grzDDc?start=270" title="youtube 嵌入" style="box-sizing: border-box; border: 0px; height: 393.75px; left: 350px; position: absolute; top: 196.875px; transform: translate(-50%, -50%); width: 700px;"></iframe>

**Shadow Editor**提供了用于更改`text-shadow`和`box-shadow`CSS 声明的GUI。

打开**阴影编辑器**：

1. 选择一个带有阴影声明[的元素。](https://developer.chrome.com/docs/devtools/css/reference/#select)例如，选择下面的元素。

   

2. 在**样式**`text-shadow`选项卡中，在or`box-shadow`声明旁边找到一个阴影图标。

   

   **图 29**。`text-shadow`和`box-shadow`值左侧的阴影图标。

3. 单击阴影图标以打开**阴影编辑器**。

   

4. 更改阴影属性：

   - **类型**（仅适用于`box-shadow`）。选择**Outset**或**Inset**。
   - **X 和 Y 偏移量**。拖动蓝点或指定值。
   - **模糊**。拖动滑块或指定一个值。
   - **传播**（仅适用于`box-shadow`）。拖动滑块或指定一个值。

5. 观察应用于[元素](https://developer.chrome.com/docs/devtools/css/reference/#shadow-element)的更改。

### （实验性）复制 CSS 更改

要启用此实验性功能，请在**Settings** > **Experiments**下**的 Styles 窗格中选中 Sync CSS changes**并重新加载 DevTools。![设置](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/bGxcjrhJIjemksd4PcbJ.svg)

启用此实验后，**样式**窗格会以绿色突出显示您的 CSS 更改。

要复制单个 CSS 声明更改，请将鼠标悬停在突出显示的声明上，然后单击“![复制。](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/0vPvwat277ITJphiOtml.svg) **复制”**按钮。

![复制 CSS 声明更改。](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/iKzTdyPSLtN5ZkyGATIt.png?auto=format)

要一次跨声明复制所有 CSS 更改，请右键单击任何声明并选择**Copy all CSS changes**。

![复制所有 CSS 更改。](https://wd.imgix.net/image/NJdAV9UgKuN8AhoaPBquL7giZQo1/odEF8CoGaRuzvVSJcIzo.png?auto=format)

