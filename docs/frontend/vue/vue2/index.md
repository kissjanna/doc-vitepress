# vue2

## $attrs 和 inheritAttrs: false

### 使用场景：

当一个孙子或孙孙子组件想要获取它祖父，曾祖父的属性时，需要将属性一层一层传递下来，哪怕中间的组件并不需要。

此时，这个一直传递的属性在中间不需要此属性的组件中，就会缀余且让人疑惑。

$arrts 就可以将那些未注册为props的组件传递下去。`v-bind="$attrs"`

参考链接：`https://www.w3xue.com/exp/article/20203/76449.html`

