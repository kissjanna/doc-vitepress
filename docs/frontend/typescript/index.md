# TypeScript

## 强制类型转换

![image-20220205134713930](../../public/img/image-20220205134713930.png)

强制类型转换的方式告诉ts，我很确定这个元素是属于as后面这个类型的



## lite-server

![image-20220205152919914](../../public/img/image-20220205152919914.png)

用于开发环境的轻量级服务器



## ts类型（12种）

<img src="../../public/img/image-20220205152959864.png" alt="image-20220205152959864" style="zoom:33%;" />

<img src="../../public/img/image-20220205153027795.png" alt="image-20220205153027795" style="zoom:33%;" />



## 范型

不需要提前指定好类型，可以在使用的时候再将类型像使用参数一样传递进来

## 数组声明

<img src="../../public/img/image-20220205154416936.png" alt="image-20220205154416936" style="zoom:50%;" />

以上三种都是数组类型

## 数组中每个元素不同

<img src="../../public/img/image-20220205213105869.png" alt="image-20220205213105869" style="zoom: 50%;" />

<img src="../../public/img/image-20220205213148350.png" alt="image-20220205213148350" style="zoom:50%;" />

## 元祖 （固定长度，固定类型的数组）

> 用处：比如学生，第一位存放ID number，第二位存放名称 string，自然形成了key to value的形式

<img src="../../public/img/image-20220205222151774.png" alt="image-20220205222151774" style="zoom:50%;" />

46行目前是个bug，这种形式无法报错

⚠️注意区分：这是一个联合类型数组

<img src="../../public/img/image-20220205222531782.png" alt="image-20220205222531782" style="zoom:50%;" />

声明一个元祖的时候一定要指明类型，否则它就是一个联合类型的array

## 联合类型

<img src="../../public/img/image-20220205222831037.png" alt="image-20220205222831037" style="zoom:50%;" />

## 字面量类型（Literal）

<img src="../../public/img/image-20220205223107299.png" alt="image-20220205223107299" style="zoom:50%;" />

## 枚举类型（Enum）

<img src="../../public/img/image-20220205223547546.png" alt="image-20220205223547546" style="zoom:50%;" />

<img src="../../public/img/image-20220205223656223.png" alt="image-20220205223656223" style="zoom:50%;" />

## any 和 unknow

> 和any类型比起来，unknow不保证类型，但是能保证类型安全

### any

<img src="../../public/img/image-20220205224148990.png" alt="image-20220205224148990" style="zoom: 33%;" />

### unknow

<img src="../../public/img/image-20220205224331778.png" alt="image-20220205224331778" style="zoom: 33%;" />

<img src="../../public/img/image-20220205224229164.png" alt="image-20220205224229164" style="zoom: 33%;" />

## void undefined never

### undefined

<img src="../../public/img/image-20220205224800249.png" alt="image-20220205224800249" style="zoom: 33%;" />

### never

可以用来处理异常和promise的场景

<img src="../../public/img/image-20220205225241778.png" alt="image-20220205225241778" style="zoom:33%;" />

一个函数永远执行不完就是never类型

上面的🌰1中，函数永远未执行完(未执行到14行)就抛出异常结束了，🌰2中永远是个循环

## Type Assertion 类型断言

<img src="../../public/img/image-20220205225727198.png" alt="image-20220205225727198" style="zoom:50%;" />

2 种方式能实现类型断言

<img src="../../public/img/image-20220205230946147.png" alt="image-20220205230946147" style="zoom:50%;" />

## 函数类型

<img src="../../public/img/image-20220205231329853.png" alt="image-20220205231329853" style="zoom:50%;" />

要注意的是，如果ts中函数参数需要全部写上，若是未写全，会报错(14行)

1、可以通过添加问号，使某些参数可省略

<img src="../../public/img/image-20220205231505462.png" alt="image-20220205231505462" style="zoom:50%;" />

2、可通过添加默认值，使某些参数可省略

<img src="../../public/img/image-20220205231617532.png" alt="image-20220205231617532" style="zoom:50%;" />

## Interface

<img src="../../public/img/image-20220205232535607.png" alt="image-20220205232535607" style="zoom:50%;" />

## Class

<img src="../../public/img/image-20220205232854498.png" alt="image-20220205232854498" style="zoom:50%;" />

---

<img src="../../public/img/image-20220205233538041.png" alt="image-20220205233538041" style="zoom:50%;" />

class是一组紧密相关的属性和函数的集合

<img src="../../public/img/image-20220205234103103.png" alt="image-20220205234103103" style="zoom:50%;" />



### 在类的构造函数中，使用public关键字，可以省略：

1. 变量声明
2. 变量赋值
3. 变量缺省（变量后面的❓）

<img src="../../public/img/image-20220207160733237.png" alt="image-20220207160733237" style="zoom:50%;" />

## 访问修饰符（Access Modifier）

1. public
2. private
3. protected

默认情况下都是public，比如输入实例化的  `point.`  编辑器会在后面列出所有可访问的属性和方法

如果将x的访问修饰符变为private，则可以看到如下提示，此时x只可在class内部使用this关键字才能访问

<img src="../../public/img/image-20220207161906010.png" alt="image-20220207161906010" style="zoom:50%;" />

<img src="../../public/img/image-20220207162400360.png" alt="image-20220207162400360" style="zoom:50%;" />

但是如此改，Point报错了，没有正确的实现 IPoint接口

<img src="../../public/img/image-20220207162610831.png" alt="image-20220207162610831" style="zoom:50%;" />

最简单的改法，是直接删除我们所需要实现的细节

<img src="../../public/img/image-20220207162725059.png" alt="image-20220207162725059" style="zoom:50%;" />

### getter setter

但是某些时候我们又需要从外部去访问变量，比如此时，传入进来的  `p.`  便报错了

<img src="../../public/img/image-20220207162950645.png" alt="image-20220207162950645" style="zoom:50%;" />

此时就需要借助setter和getter方法，在外部建立一个缓冲带，来减免一些非法输入使代码更加可靠

在Point class中添加两个新的方法

<img src="../../public/img/image-20220207163422790.png" alt="image-20220207163422790" style="zoom:50%;" />

在 IPoint中添加它们

<img src="../../public/img/image-20220207163520190.png" alt="image-20220207163520190" style="zoom:50%;" />

然后就可以在getDistance方法中使用它们了

<img src="../../public/img/image-20220207163608889.png" alt="image-20220207163608889" style="zoom:50%;" />

### getter setter 懒人包

首先，将setX和getX改写如下：

<img src="../../public/img/image-20220207163829112.png" alt="image-20220207163829112" style="zoom:50%;" />

使用时，直接用新命名的大写的X即可

<img src="../../public/img/image-20220207163914994.png" alt="image-20220207163914994" style="zoom:50%;" />

同时要注意修改它的接口

<img src="../../public/img/image-20220207164052826.png" alt="image-20220207164052826" style="zoom:50%;" />

## 范型

使用`类型`+`<>`这种写法，就是范型，如：`Array<number>`

<img src="../../public/img/image-20220208011610785.png" alt="image-20220208011610785" style="zoom:50%;" />

参数前面加上`<T>`，代表动态类型-->范型

<img src="../../public/img/image-20220208013029133.png" alt="image-20220208013029133" style="zoom:50%;" />

此处的大写T，只是约定俗成的，写成啥都行

当然上面代码中的 `Array<T>`也可以写成下面这样：

<img src="../../public/img/image-20220208013145566.png" alt="image-20220208013145566" style="zoom:50%;" />

在使用的时候，也可以指定范型的类型：

<img src="../../public/img/image-20220208013313921.png" alt="image-20220208013313921" style="zoom:50%;" />

例子2:

<img src="../../public/img/image-20220208014106208.png" alt="image-20220208014106208" style="zoom:50%;" />

其中，定义的时候也可以指定默认范型的类型，使用的时候可以省略不进行指定带默认值的范型：

<img src="../../public/img/image-20220208014245174.png" alt="image-20220208014245174" style="zoom:50%;" />





























