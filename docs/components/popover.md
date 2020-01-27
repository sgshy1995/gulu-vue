---
title: 弹出框组件
---

# 弹出框组件

弹出框 (popover) 是一种常见而常用的UI。

## 引入

::: tip 示例
这里依然推荐配合 [按钮组件](button.md) 来使用该组件。
:::

```js
import {Popover}} from 'eden-gulu'
// 引入 button 组件配合使用，这是非必需的
import {Button}} from 'eden-gulu'

new Vue({
    components:{
        'g-popover': Popover,
        'g-button': Button
    }
})
```

## 使用

popover 应当包含一个元素作为触发器，并且弹出消息内容应放在 `名为 content 的插槽` 中。

应当按照以下结构来使用它：

```
g-popover
│   
│
└───template #content
│   │   
│   └───span/div... (弹出内容)
│   │   
│   │    
│   └───button/div... (可选择关闭按钮/非必须)         
│          
│   
└───button/div... (触发器)   
│     
│                 
│ 
...  
```

## 默认样式

popover 组件接受一个 `position` 属性来决定弹出框相对于触发器的位置；有四个可选项：`top`、`bottom`、`left`、`right`。默认为左侧 left。

```html
<g-popover position="top">
  <template #content>
    <div>上方内容</div>
  </template>
  <g-button>上面</g-button>
</g-popover>

<g-popover position="left">
  <template #content>
    <div>左侧内容</div>
  </template>
  <g-button>左面</g-button>
</g-popover>

<g-popover position="right">
  <template #content>
    <div>右侧内容</div>
  </template>
  <g-button>右面</g-button>
</g-popover>

<g-popover position="bottom">
  <template #content>
    <div>下方内容</div>
  </template>
  <g-button>下面</g-button>
</g-popover>
```

样式如下：

<ClientOnly>
<popover-demo-default></popover-demo-default>
</ClientOnly>

## 设置关闭按钮

除了再次点击触发器关闭，你还可以在弹出层里添加一个按钮，并通过解构插槽传出的 `close` 方法来关闭它。

```html
<g-popover position="top">
  <template #content="{close}">
    <div>上方内容</div>
    <br>
    <g-button @click.native="close">关闭</g-button>
  </template>
  <g-button>上面</g-button>
</g-popover>

<g-popover position="bottom">
  <template #content="{close}">
    <div>下方内容</div>
    <br>
    <g-button @click.native="close">关闭</g-button>
  </template>
  <g-button>下面</g-button>
</g-popover>
```

样式如下：

<ClientOnly>
<popover-demo-close></popover-demo-close>
</ClientOnly>

## 设置 hover 状态

popover 组件还支持设置 `trigger` 属性，有两个值 `click` 和 `hover`。默认为 click。当你设置为 hover 时，鼠标悬浮在触发器上，即可触发弹出层。

::: warning 区别提示
与 click 状态的唯一区别就是：hover 态是不支持你鼠标滑入弹出层的，它将会在你的鼠标离开触发器关闭。
:::

```html
<g-popover position="top" trigger="hover">
  <template #content>
    <div>上方内容</div>
  </template>
  <g-button>上面</g-button>
</g-popover>

<g-popover position="bottom" trigger="hover">
  <template #content>
    <div>下方内容</div>
  </template>
  <g-button>下面</g-button>
</g-popover>
```

效果如下：

<ClientOnly>
<popover-demo-hover></popover-demo-hover>
</ClientOnly>