# helloworld



## 现代的标记（markup）

<script> 标签有一些现在很少用到的特性

#### `type` 特性：<script type=…>

在老的 HTML4 标准中，要求 script 标签有 `type` 特性。通常是 `type="text/javascript"`。这样的特性声明现在已经不再需要。而且，现代 HTML 标准已经完全改变了此特性的含义。现在，它可以用于 JavaScript 模块。但这是一个高级话题，我们将在本教程的另一部分中探讨 JavaScript 模块。



#### `language` 特性：<script language=…>

这个特性是为了显示脚本使用的语言。这个特性现在已经没有任何意义，因为语言默认就是 JavaScript。不再需要使用它了。

#### **脚本前后的注释。**

在非常古老的书籍和指南中，你可能会在 `` 标签里面找到注释，就像这样：

```markup
<script type="text/javascript"><!--
    ...
//--></script>
```

现代 JavaScript 中已经不这样使用了。这些注释是用于不支持 `` 标签的古老的浏览器隐藏 JavaScript 代码的。由于最近 15 年内发布的浏览器都没有这样的问题，因此这种注释能帮你辨认出一些老掉牙的代码。

## **如果设置了** `src` **特性，**`script` **标签内容将会被忽略。**

一个单独的 `` 标签不能同时有 `src` 特性和内部包裹的代码。



# 代码结构



## ❓分号 —— 何时换行需要加分号？



# 现代模式，"use strict"



## “use strict”

这个指令看上去像一个字符串 `"use strict"` 或者 `'use strict'`。当它处于脚本文件的顶部时，则整个脚本文件都将以“现代”模式进行工作。

比如：

```javascript
"use strict";

// 代码以现代模式工作
...
```

很快我们就会学习到函数（一种组合命令的方式），所以让我们提前注意一下，`"use strict"` 可以被放在函数体的开头。这样则可以只在该函数中启用严格模式。但通常人们会在整个脚本中启用严格模式。

**没有办法取消 `use strict`**

没有类似于 `"no use strict"` 这样的指令可以使程序返回默认模式。

一旦进入了严格模式，就没有回头路了。

### 有人可能会建议在脚本的最顶部放置 `"use strict"` 这行代码…… 但你知道更酷的方式吗？

现代 JavaScript 支持 “classes” 和 “modules” —— 高级语言结构（本教程后续章节会讲到），它们会自动启用 `use strict`。因此，如果我们使用它们，则无需添加 `"use strict"` 指令。



# 变量



## **函数式语言**

有趣的是，也存在禁止更改变量值的 [函数式](https://en.wikipedia.org/wiki/Functional_programming) 编程语言。比如 [Scala](http://www.scala-lang.org/) 或 [Erlang](http://www.erlang.org/)。

在这种类型的语言中，一旦值保存在盒子中，就永远存在。如果你试图保存其他值，它会强制创建一个新盒子（声明一个新变量），无法重用之前的变量。

虽然第一次看上去有点奇怪，但是这些语言有很大的发展潜力。不仅如此，在某些领域，比如并行计算，这个限制有一定的好处。研究这样的一门语言（即使不打算很快就用上它）有助于开阔视野。

## 大写形式的常数

什么时候该为常量使用大写命名，什么时候进行常规命名？让我们弄清楚一点。

`const COLOR_ORANGE = "#FF7F00";`

作为一个“常数”，意味着值永远不变。但是有些常量在执行之前就已知了（比如红色的十六进制值），还有些在执行期间被“计算”出来，但初始赋值之后就不会改变。



# 数据类型



7+1

number, bigint, string, boolean, null, undefined, symbol

object

## number

如果在数学表达式中有一个 `NaN`，会被传播到最终结果（只有一个例外：`NaN ** 0` 结果为 `1`）。

## JavaScript 里最大的安全的整数为什么是2的53次方减一？

https://www.zhihu.com/question/29010688

## -

`symbol` 类型用于创建对象的唯一标识符。我们在这里提到 `symbol` 类型是为了完整性，但我们要在学完 `object` 类型后再学习它。



# 类型转换



number 类型转换规则：

| 值              | 变成……                                                       |
| :-------------- | :----------------------------------------------------------- |
| `undefined`     | `NaN`                                                        |
| `null`          | `0`                                                          |
| `true 和 false` | `1` and `0`                                                  |
| `string`        | 去掉首尾空格后的纯数字字符串中含有的数字。如果剩余字符串为空，则转换结果为 `0`。否则，将会从剩余字符串中“读取”数字。当类型转换出现 error 时返回 `NaN`。 |

例子：

```javascript
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN（从字符串“读取”数字，读到 "z" 时出现错误）
alert( Number(true) );        // 1
alert( Number(false) );       // 0
```



# 基础运算符，数学



`+` 和 ` - ` 都即属于一元运算符，也属于二元运算符

二元运算符 `+`  `-` 是加和减运算 `true + false = 1`

一元运算符减号 `-` 的作用是对数字进行正负转换

一元运算符加号 `+` 应用于单个值，对数字没有任何作用。但是如果运算元不是数字，加号 `+` 则会将其转化为数字。它的效果和 `Number(...)` 相同，但是更加简短。

⭐️ 一元运算符优先级高于二元运算符

## 赋值 = 返回一个值

`=` 是一个运算符，而不是一个有着“魔法”作用的语言结构。

在 JavaScript 中，所有运算符都会返回一个值。这对于 `+` 和 `-` 来说是显而易见的，但对于 `=` 来说也是如此。

语句 `x = value` 将值 `value` 写入 `x` **然后返回 x**。

## 位运算符

位运算符把运算元当做 32 位整数，并在它们的二进制表现形式上操作。

下面是位运算符：

&、|、^、~、<<、>>、>>>

## 逗号运算符

逗号运算符 `,` 是最少见最不常使用的运算符之一。有时候它会被用来写更简短的代码，因此为了能够理解代码，我们需要了解它。

逗号运算符能让我们处理多个语句，使用 `,` 将它们分开。每个语句都运行了，但是只有最后的语句的结果会被返回。

为什么我们需要这样一个运算符，它只返回最后一个值呢？有时候，人们会使用它把几个行为放在一行上来进行复杂的运算。举个例子：

```javascript
// 一行上有三个运算符
for (a = 1, b = 3, c = a * b; a < 10; a++) {
 ...
}
```



# 值的比较



## 不同类型间的比较

当对不同类型的值进行比较时，JavaScript 会首先将其转化为数字（number）再判定大小。

有时候，以下两种情况会同时发生：

- 若直接比较两个值，其结果是相等的。
- 若把两个值转为布尔值，它们可能得出完全相反的结果，即一个是 `true`，一个是 `false`。

```javascript
let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!
```

对于 JavaScript 而言，这种现象其实挺正常的。因为 JavaScript 会把待比较的值转化为数字后再做比较（因此 `"0"` 变成了 `0`）。若只是将一个变量转化为 `Boolean` 值，则会使用其他的类型转换规则。

## 对 null 和 undefined 进行比较

当使用 `null` 或 `undefined` 与其他值进行比较时，其返回结果常常出乎你的意料。

- 当使用严格相等 `===` 比较二者时

  它们不相等，因为它们属于不同的类型。`alert( null === undefined ); // false`

- 当使用非严格相等 `==` 比较二者时

  JavaScript 存在一个特殊的规则，会判定它们相等。它们俩就像“一对恋人”，仅仅等于对方而不等于其他任何的值（只在非严格相等下成立）。`alert( null == undefined ); // true`

- 当使用数学式或其他比较方法 `< > <= >=` 时：

  `null/undefined` 会被转化为数字：`null` 被转化为 `0`，`undefined` 被转化为 `NaN`。

下面让我们看看，这些规则会带来什么有趣的现象。同时更重要的是，我们需要从中学会如何远离这些特性带来的“陷阱”。

### 奇怪的结果：null vs 0

通过比较 `null` 和 0 可得：

```javascript
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true
```

是的，上面的结果完全打破了你对数学的认识。在最后一行代码显示“`null` 大于等于 0”的情况下，前两行代码中一定会有一个是正确的，然而事实表明它们的结果都是 false。

为什么会出现这种反常结果，这是因为相等性检查 `==` 和普通比较符 `> < >= <=` 的代码逻辑是相互独立的。进行值的比较时，`null` 会被转化为数字，因此它被转化为了 `0`。这就是为什么（3）中 `null >= 0` 返回值是 true，（1）中 `null > 0` 返回值是 false。

另一方面，`undefined` 和 `null` 在相等性检查 `==` 中不会进行任何的类型转换，它们有自己独立的比较规则，所以除了它们之间互等外，不会等于任何其他的值。这就解释了为什么（2）中 `null == 0` 会返回 false。

### ⭐️ [ 避免问题](https://zh.javascript.info/comparison#bi-mian-wen-ti)

我们为何要研究上述示例？我们需要时刻记得这些古怪的规则吗？不，其实不需要。虽然随着代码写得越来越多，我们对这些规则也都会烂熟于胸，但是我们需要更为可靠的方法来避免潜在的问题：

- 除了严格相等 `===` 外，其他但凡是有 `undefined/null` 参与的比较，我们都需要格外小心。
- 除非你非常清楚自己在做什么，否则永远不要使用 `>= > < <=` 去比较一个可能为 `null/undefined` 的变量。对于取值可能是 `null/undefined` 的变量，请按需要分别检查它的取值情况。

T.plumage: 

> 任何时候使用比较运算符的情况下，先进行非 `null/undefined` 的判断

## ✅ 任务

以下表达式的执行结果是？

```javascript
5 > 4
"apple" > "pineapple"
"2" > "12"
undefined == null
undefined === null
null == "\n0\n"
null === +"\n0\n"
```

解决方案

```javascript
5 > 4 → true
"apple" > "pineapple" → false
"2" > "12" → true
undefined == null → true
undefined === null → false
null == "\n0\n" → false
null === +"\n0\n" → false
```

结果的原因：

1. 数字间比较大小，显然得 true。
2. 按词典顺序比较，得 false。`"a"` 比 `"p"` 小。
3. 与第 2 题同理，首位字符 `"2"` 大于 `"1"`。
4. `null` 只与 `undefined` 互等。
5. 严格相等模式下，类型不同得 false。
6. 与第 4 题同理，`null` 只与 `undefined` 相等。
7. 不同类型严格不相等。



# 条件分支：if 和 '?'



## 三元表达式多个 ‘?’

使用一系列问号 `?` 运算符可以返回一个取决于多个条件的值。

例如：

```javascript
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );
```



# 逻辑运算符



|| 或运算寻找第一个真值

&& 与运算寻找第一个假值



# 空值合并运算符 '??'



当一个值既不是 `null` 也不是 `undefined` 时，我们将其称为“已定义的（defined）”

`a ?? b` 的结果是：

- 如果 `a` 是已定义的，则结果为 `a`，
- 如果 `a` 不是已定义的，则结果为 `b`。

补充：逻辑空赋值运算符 (`x ??= y`) 仅在 `x` 是 [nullish](https://developer.mozilla.org/zh-CN/docs/Glossary/Nullish) (`null` 或 `undefined`) 时对其赋值。

### ?? 与 && 或 || 禁止一起使用

出于安全原因，JavaScript 禁止将 `??` 运算符与 `&&` 和 `||` 运算符一起使用，除非使用括号明确指定了优先级。

下面的代码会触发一个语法错误：

```javascript
let x = 1 && 2 ?? 3; // Syntax error
```

这个限制无疑是值得商榷的，它被添加到语言规范中是为了避免人们从 `||` 切换到 `??` 时的编程错误。

可以明确地使用括号来解决这个问题：

```javascript
let x = (1 && 2) ?? 3; // 正常工作了

alert(x); // 2
```

`??` 运算符的优先级非常低，仅略高于 `?` 和 `=`，因此在表达式中使用它时请考虑添加括号。



# 循环，while 和 for



## 跳出循环

通常条件为假时，循环会终止。

但我们随时都可以使用 `break` 指令强制退出。

## 继续下一次迭代

`continue` 指令是 `break` 的“轻量版”。它不会停掉整个循环。而是停止当前这一次迭代，并强制启动新一轮循环（如果条件允许的话）。

如果我们完成了当前的迭代，并且希望继续执行下一次迭代，我们就可以使用它。

下面这个循环使用 `continue` 来只输出奇数：

```javascript
for (let i = 0; i < 10; i++) {

  //如果为真，跳过循环体的剩余部分。
  if (i % 2 == 0) continue;

  alert(i); // 1，然后 3，5，7，9
}
```

⭐️ **`continue` 指令利于减少嵌套**

显示奇数的循环可以像下面这样：

```javascript
for (let i = 0; i < 10; i++) {

  if (i % 2) {
    alert( i );
  }

}
```

从技术角度看，它与上一个示例完全相同。当然，我们可以将代码包装在 `if` 块而不使用 `continue`。

但在副作用方面，它多创建了一层嵌套（大括号内的 `alert` 调用）。如果 `if` 中代码有多行，则可能会降低代码整体的可读性。

 **禁止 `break/continue` 在 ‘?’ 的右边**

请注意非表达式的语法结构不能与三元运算符 `?` 一起使用。特别是 `break/continue` 这样的指令是不允许这样使用的。

例如，我们使用如下代码：

```javascript
if (i > 5) {
  alert(i);
} else {
  continue;
}
```

……用问号重写：

```javascript
(i > 5) ? alert(i) : continue; // continue 不允许在这个位置
```

……代码会停止运行，并显示有语法错误。

这是不（建议）使用问号 `?` 运算符替代 `if` 语句的另一个原因。

## break/continue 标签 ✅本章练习题未做

**标签** 是在循环之前带有冒号的标识符：

```javascript
labelName: for (...) {
  ...
}
```

`break ` 语句跳出循环至标签处：

```javascript
outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // 如果是空字符串或被取消，则中断并跳出这两个循环。
    if (!input) break outer; // (*)

    // 用得到的值做些事……
  }
}
alert('Done!');
```

上述代码中，`break outer` 向上寻找名为 `outer` 的标签并跳出当前循环。

我们还可以将标签移至单独一行：

```javascript
outer:
for (let i = 0; i < 3; i++) { ... }
```

**标签并不允许“跳到”所有位置**

标签不允许我们跳到代码的任意位置。

例如，这样做是不可能的：

```javascript
break label;  // 跳转至下面的 label 处（无效）

label: for (...)
```

⭐️ break 指令必须在代码块内。从技术上讲，任何被标记的代码块都有效，例如：

```javascript
label: {
  // ...
  break label; // 有效
  // ...
}
```

……尽管 99.9% 的情况下 `break` 都被用在循环内，就像在上面那些例子中我们看到的那样。

`continue` 只有在循环内部才可行。



# "switch" 语句



```javascript
// T.自己写的例子：
const x = 1
switch (x) {
    case 1:
        console.log('1 1')
        break
    case 1:
        console.log('1 2')
    default:
        console.log('default')
}
// 带上 break 的时候，下面的两个不会执行。
// 当没有 break 的时候，三条语句都会执行
```



**如果没有 `break`，程序将不经过任何检查就会继续执行下一个 `case`**

```javascript
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
  case 4:
    alert( 'Exactly!' );
  case 5:
    alert( 'Too big' );
  default:
    alert( "I don't know such values" );
}
```

在上面的例子中我们会看到连续执行的三个 `alert`：

```javascript
alert( 'Exactly!' );
alert( 'Too big' );
alert( "I don't know such values" );
```

## “case” 分组

共享同一段代码的几个 `case` 分支可以被分为一组：

比如，如果我们想让 `case 3` 和 `case 5` 执行同样的代码：

```javascript
let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) 下面这两个 case 被分在一组
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}
```



# 函数

**在函数声明被定义之前，它就可以被调用。**

**函数表达式**不存在变量提升











































