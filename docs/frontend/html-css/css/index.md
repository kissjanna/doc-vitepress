# CSS

# clamp()

https://developer.mozilla.org/zh-CN/docs/Web/CSS/clamp

**`clamp()`** 函数的作用是把一个值限制在一个上限和下限之间，当这个值超过最小值和最大值的范围时，在最小值和最大值之间选择一个值使用。它接收三个参数：最小值、首选值、最大值。 `clamp()` 被用在 [``](https://developer.mozilla.org/zh-CN/docs/Web/CSS/length)、[``](https://developer.mozilla.org/zh-CN/docs/Web/CSS/frequency)、[``](https://developer.mozilla.org/zh-CN/docs/Web/CSS/angle)、[``](https://developer.mozilla.org/zh-CN/docs/Web/CSS/time)、[``](https://developer.mozilla.org/zh-CN/docs/Web/CSS/percentage)、[``](https://developer.mozilla.org/zh-CN/docs/Web/CSS/number)、[``](https://developer.mozilla.org/zh-CN/docs/Web/CSS/integer) 中都是被允许的。

```
clamp(MIN, VAL, MAX)` 其实就是表示 `max(MIN, min(VAL, MAX))
```

