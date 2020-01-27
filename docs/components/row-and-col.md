---
title: 网格系统组件
---

# 网格系统组件

## 引入

```js

import {Row} from 'eden-gulu'
import {Col} from 'eden-gulu'
new Vue({
    components:{
        'g-row': Row,
        'g-col': Col
    }
})
```

::: warning 关于 Col 的样式
推荐在 g-col 组件中再嵌套一层 div 来包裹你的最终内容并在该 div 上定义你的样式，以避免出现一些样式问题。
下面是示例样式：
```css
.col-one,.col-two{
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.col-one{
  background: #3AB982;
}
.col-two{
  background: #34495F;
}
```
:::

## 24格网络

网格系统把一行分为 24 格，你可以通过设置每一列的 `span` 属性来控制它的宽度。`span` 的总和必须为24。 

```html
<g-row>
    <g-col span="12">
        <div class="col-one">1</div>
    </g-col>
    <g-col span="12">
        <div class="col-two">2</div>
    </g-col>
</g-row>
<br>
<g-row>
    <g-col span="8">
        <div class="col-one">1</div>
    </g-col>
    <g-col span="8">
        <div class="col-two">2</div>
    </g-col>
    <g-col span="8">
        <div class="col-one">3</div>
    </g-col>
</g-row>
<br>
<g-row>
    <g-col span="6">
        <div class="col-one">1</div>
    </g-col>
    <g-col span="6">
        <div class="col-two">2</div>
    </g-col>
    <g-col span="6">
        <div class="col-one">3</div>
    </g-col>
    <g-col span="6">
        <div class="col-two">4</div>
    </g-col>
</g-row>
<br>
<g-row>
    <g-col span="2">
        <div class="col-one">1</div>
    </g-col>
    <g-col span="7">
        <div class="col-two">2</div>
    </g-col>
    <g-col span="5">
        <div class="col-one">3</div>
    </g-col>
    <g-col span="7">
        <div class="col-two">4</div>
    </g-col>
    <g-col span="3">
        <div class="col-one">5</div>
    </g-col>
</g-row>
```

样式如下：

<row-and-col-demo-24></row-and-col-demo-24>

## 设置间距

可以在 Row 上设置 `gutter`，单位为像素px，表示其包含的所有列的间隙。

```html
<g-row gutter="10">
    <g-col span="8">
        <div class="col-one">1</div>
    </g-col>
    <g-col span="8">
        <div class="col-two">2</div>
    </g-col>
    <g-col span="8">
        <div class="col-one">3</div>
    </g-col>
</g-row>
<br>
<g-row gutter="10">
    <g-col span="6">
        <div class="col-one">1</div>
    </g-col>
    <g-col span="6">
        <div class="col-two">2</div>
    </g-col>
    <g-col span="6">
        <div class="col-one">3</div>
    </g-col>
    <g-col span="6">
        <div class="col-two">4</div>
    </g-col>
</g-row>
```

样式如下：

<row-and-col-demo-gutter></row-and-col-demo-gutter>

## 设置偏移

与 gutter 不同，`offset` 属性只能被 Col 接受，与 span 并存。offset 表示该列向右偏移的格子数，所有的 span 和 offset 的和必须为 24。

```html
<g-row>
    <g-col span="8">
        <div class="col-one">1</div>
    </g-col>
    <g-col span="4" offset="4">
        <div class="col-two">2</div>
    </g-col>
    <g-col span="6" offset="2">
        <div class="col-one">3</div>
    </g-col>
</g-row>
<br>
<g-row>
    <g-col span="6">
        <div class="col-one">1</div>
    </g-col>
    <g-col span="3" offset="3">
        <div class="col-two">2</div>
    </g-col>
    <g-col span="6">
        <div class="col-one">3</div>
    </g-col>
    <g-col span="5" offset="1">
        <div class="col-two">4</div>
    </g-col>
</g-row>
```

效果如下：

<row-and-col-demo-offset></row-and-col-demo-offset>
