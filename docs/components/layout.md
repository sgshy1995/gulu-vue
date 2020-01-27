---
title: 默认布局组件
---

# 默认布局组件

## 引入

```js

import {Layout} from 'eden-gulu'
import {Header} from 'eden-gulu'
import {Sider} from 'eden-gulu'
import {Content} from 'eden-gulu'
import {Footer} from 'eden-gulu'
new Vue({
    components:{
        'g-layout': Layout,
        'g-header': Header,
        'g-sider': Sider,
        'g-content': Content,
        'g-footer': Footer
    }
})
```

## 几种布局

默认布局组件 共分为五部分：

- `g-layout` ：总框架
- `g-header` ：头部
- `g-sider` ：滑层
- `g-content` ：主体内容区
- `g-footer` ：尾部

一般来说，你可以用两种布局使用全部组件。

::: tip
`g-sider` 通过接受 `show` 属性来选择是否显示隐藏按钮。默认为 false，不显示。
:::

### 不使用滑层

一般的上中下布局。

```html
<g-layout>
    <g-header>Header</g-header>
    <g-content>Content</g-content>
    <g-footer>Footer</g-footer>
</g-layout>
```

效果如下：

<ClientOnly>
<layout-demo-nosider></layout-demo-nosider>
</ClientOnly>

### 滑层在中

将滑层放在头尾之间，与内容区并排。

```html
<g-layout>
    <g-header>Header</g-header>
    <g-layout>
        <g-sider show>Sider</g-sider>
        <g-content>Content</g-content>
    </g-layout>
    <g-footer>Footer</g-footer>
</g-layout>

```

效果如下：

<ClientOnly>
<layout-demo-insider></layout-demo-insider>
</ClientOnly>

### 滑层在外

将滑层放在头尾以及内容区之外。

```html
<g-layout>
    <g-sider show>Sider</g-sider>
    <g-layout>
        <g-header>Header</g-header>
        <g-content>Content</g-content>
        <g-footer>Footer</g-footer>
    </g-layout>
</g-layout>
```

效果如下：

<ClientOnly>
<layout-demo-outsider></layout-demo-outsider>
</ClientOnly>
