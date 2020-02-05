---
title: 手风琴组件
---

# 手风琴组件

手风琴 (collapse) 组件。可折叠的展示。

## 引入

```js
import {Collapse}} from 'eden-gulu'
import {CollapseItem}} from 'eden-gulu'

new Vue({
    components:{
        'g-collapse': Collapse,
        'g-collapse-item': CollapseItem
    }
})
```

## 使用

collapse 组件应该按照以下结构使用：

```
g-collapse   
│
└───g-collapse-item                 
│   
└───g-collapse-item   
│                     
│ 
...  
```

g-collapse 必须包裹 g-collapse-item。

其中，g-collapse-item 必须接受：

- `title` 属性，内容为 `标题内容`。
- `name` 属性，表示标题的名字，用于切换和默认选取功能。

g-collapse 必须接受：

- `selected` 属性，该属性为一个数组，其中的元素为需要默认展开的标题名字。

::: warning 提示
你必须在 data 中定义传入的数组以确保功能，并且使用 .sync 修饰符或其他来实现 组件通信。你可以动态获取到展示名单，组件通信会更新这个数组对象。
:::

## 多项展示

默认可以展开/关闭所有项。

```html
<g-collapse :selected.sync="selectedTabs">
    <g-collapse-item title="标题一" name="one">内容一</g-collapse-item>
    <g-collapse-item title="标题二" name="two">内容二</g-collapse-item>
    <g-collapse-item title="标题三" name="three">内容三</g-collapse-item>
    <br>
    <div>这里可以展示多项数组更新的信息：<span style="color: #3AB982;">{{selectedTabs}}</span></div>
</g-collapse>
```

```js
new Vue({
  //...
  data(){
    return{
      selectedTabs: ["one","two"]
    }
  }
})
```

默认展示第一、二项，效果如下：

<ClientOnly>
<collapse-demo-default></collapse-demo-default>
</ClientOnly>



## 单项展示

collapse 可以接受一个 `single` 属性，表示将只有一项可以作为展示项。默认为 false。

这也就意味着，如果你默认展开多项，那么在用户点击其中一项后，其他仍将自动关闭。

```html
<g-collapse :selected.sync="selectedTabs" single>
    <g-collapse-item title="标题一" name="one">内容一</g-collapse-item>
    <g-collapse-item title="标题二" name="two">内容二</g-collapse-item>
    <g-collapse-item title="标题三" name="three">内容三</g-collapse-item>
    <br>
    <div>这里可以展示单项数组更新的信息：<span style="color: #3AB982;">{{selectedTabs}}</span></div>
</g-collapse>
```

```js
new Vue({
  //...
  data(){
    return{
      selectedTabs: ["three"]
    }
  }
})
```

默认展开第三项，且只可以单项展示：

<ClientOnly>
<collapse-demo-single></collapse-demo-single>
</ClientOnly>
