---
title: 文本输入框组件
---

# 文本输入框组件

## 引入

```js

import {Input} from 'eden-gulu'
new Vue({
    components:{
        'g-input': Input
    }
})
```

## 默认样式

文本输入框 默认样式有 `hover` 和 `focus` 的状态。

```html
<g-input></g-input>
```

样式如下：

<input-demo-default></input-demo-default>

## 常用属性

文本输入框 接受几种常用属性。

- `value` ：输入框内的默认文字。
- `disabled` ：是否可选中。
- `readonly` ：是否只读。

```html
<g-input value="默认"></g-input>
<g-input value="不可选" disabled></g-input>
<g-input value="只读" readonly></g-input>
```

样式如下：

<input-demo-property></input-demo-property>

## 提示信息

文本输入框 可以接受 `error` 来设置 错误提示信息，以及接受 `info` 来设置 友情提示信息。

```html
<g-input value="错误提示" error="姓名不可以为空"></g-input>
<g-input value="友情提示" info="你可以输入中文"></g-input>
```

样式如下：

<input-demo-message></input-demo-message>

::: tip 提示
这也就意味着你可以使用事件，通过改变 `error` 和 `info` 来控制提示信息是否出现，以及在恰当的时机出现。这里不予举例。
:::
