---
title: 组合按钮组件
---

# 组合按钮组件

::: warning 警告
组合按钮组件 (button-group.vue) 的子元素必须都是 button，如果你想使用它，请最好同时引入 [按钮组件](button.md) (button.vue)。这里也会使用两种组件一起使用的示例，因为它们搭配起来效果更佳。
:::

## 引入

```js

import {Button} from 'eden-gulu'
import {ButtonGroup} from 'eden-gulu'
new Vue({
    components:{
        'g-button': Button
        'g-button-group': ButtonGroup
    }
})
```

## 默认按钮

使用 组合按钮组件 包裹三个 按钮组件。

```html
<g-button-group>
    <g-button icon="left">上一页</g-button>
    <g-button>首页</g-button>
    <g-button icon="right" iconPosition="right">下一页</g-button>
</g-button-group>
```

样式如下：

<button-group-demo-default></button-group-demo-default>