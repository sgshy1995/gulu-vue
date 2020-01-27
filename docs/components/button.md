---
title: 按钮组件
---

# 按钮组件

## 引入

```js
import {Button} from 'eden-gulu'
new Vue({
    components:{
        'g-button': Button
    }
})
```

## 默认按钮

在 html 中使用默认的 button 样式。

```html
<g-button></g-button>
```

你将会在当前位置看到一个初始的 button 按钮。

<ClientOnly>
<button-demo-default></button-demo-default>
</ClientOnly>

button 组件提供了很多的可选属性。

## 设置 icon/iconPosition

现在共有六种 icon 可供设置：`loading`，`download`，`praise`，`right`，`left`，`down`。

iconPosition 默认的位置在左边，你只可以设置两种：`left` 或 `right`。

比如设置“下载按钮”：

```html
<g-button icon="download"></g-button>
<g-button icon="download" iconPosition="right"></g-button>
```

效果如下：

<ClientOnly>
<button-demo-icon></button-demo-icon>
</ClientOnly>

## 设置加载动画

你可以为 button 设置一个简单的加载动画。它接受一个 `loading` 属性，并且通过组件通信实现动态加载切换。

```html
<g-button :loading.sync="loading1">默认加载</g-button>
<g-button :loading.sync="loading2">点击加载</g-button>
<g-button :loading.sync="loading3" icon="praise">点击加载</g-button>
```

```js
new Vue({
    data(){
      return{
        loading1: true,
        loading2: false,
        loading3: false
      }
    }
})
```

效果如下：

<ClientOnly>
<button-demo-settings></button-demo-settings>
</ClientOnly>

