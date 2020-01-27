---
title: 切换 tabs 组件
---

# 切换 tabs 组件

## 引入

```js
import {Tabs} from 'eden-gulu'

new Vue({
    components:{
        'g-tabs': Tabs
    }
})
```

## 使用

tabs 组件需要满足下面的树形结构：

```
g-tabs
│   
│
└───g-tabs-head
│   │   
│   └───template slot="actions" (非必须)
│   │   │
│   │   └────button
│   │
│   └───g-tabs-item
│   │     
│   └───g-tabs-item
│   │    
│   ...
│   
└───g-tabs-body   
│   │
│   └───g-tabs-panel
│   │     
│   └───g-tabs-panel
│   │    
│   ...
```

::: tip 提示
每一个 g-tabs-item 必须通过传入 `name` 对应一个 g-tabs-panel。这是本组件必须要求的。同时， g-tabs 要接受 `selected` 属性，其值为 `name` 中的一个，作为默认选择。
:::

```html
<g-tabs selected="CSS" style="border:1px solid #2c3e50;border-radius:4px">
  <g-tabs-head>
    <template #actions>
      <button>设置</button>
    </template>
    <g-tabs-item name="JavaScript">JavaScript</g-tabs-item>
    <g-tabs-item name="Html">Html</g-tabs-item>
    <g-tabs-item name="CSS">CSS</g-tabs-item>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-panel name="JavaScript">JavaScript is a cool language.</g-tabs-panel>
    <g-tabs-panel name="Html">Html is be used for create a website.</g-tabs-panel>
    <g-tabs-panel name="CSS">CSS can control the style.</g-tabs-panel>
  </g-tabs-body>
</g-tabs>
```

效果如下：

<ClientOnly>
<tabs-demo-default></tabs-demo-default>
</ClientOnly>

## 设置不可选

g-tabs-item 接受 `disabled` 属性，表示当前的 item 为不可选取状态。

::: warning 警告
你应该确保 g-tabs-item 的 默认被选取 和 不可选取 不会重复。
:::

```html
<g-tabs selected="Vue" style="border:1px solid #2c3e50;border-radius:4px">
    <g-tabs-head>
        <template #actions>
          <button>设置</button>
        </template>
        <g-tabs-item name="jQuery" disabled>jQuery</g-tabs-item>
        <g-tabs-item name="Vue">Vue</g-tabs-item>
        <g-tabs-item name="React">React</g-tabs-item>
        <g-tabs-item name="Angular">Angular</g-tabs-item>
    </g-tabs-head>
    <g-tabs-body>
        <g-tabs-panel name="jQuery">Still use jQuery now?</g-tabs-panel>
        <g-tabs-panel name="Vue">The Progressive JavaScript Framework.</g-tabs-panel>
        <g-tabs-panel name="React">A JavaScript library for building user interfaces.</g-tabs-panel>
        <g-tabs-panel name="Angular">A platform for building mobile and desktop web applications. </g-tabs-panel>
    </g-tabs-body>
</g-tabs>
```

样式如下：

<ClientOnly>
<tabs-demo-disabled></tabs-demo-disabled>
</ClientOnly>

