---
title: 吐司组件
---

# 吐司组件

什么是吐司组件？ 即 toast 组件，可以弹出信息的一种UI。

::: tip 提示
因为 toast 组件本质是浮层信息的显示，在实际开发中，我们一般不会直接使用它，而是通过其他方式来触发它。这里依然引入 [按钮组件](button.md) 来配合使用该组件作为示例。
:::

## 引入

::: tip 使用插件
无需在任何地方使用 toast 组件，只需要使用本组件提供的插件，即可快捷触发弹窗提示。
:::

```js
import {Toast} from 'eden-gulu'
import {plugin} from 'eden-gulu'
//引入 Button 配合使用
import {Button} from 'eden-gulu'

const vm = new Vue({
    components:{
        'g-toast': Toast,
        'g-button': Button
    }
})
Vue.use(plugin)
```

## $toast

toast 组件接受的所有属性，都通过插件引入的存在于 Vue实例中的 `$toast` 方法来传递。他接受两个参数， `message` 为提示内容，`toastOptions` 为对 toast 组件的所有可操作选项集合。

```js
vm.$toast(message,toastOptions)
```

## 基本属性

在 `toastOptions` 中，接受一些基本属性。

- `autoClose` ：必须是数字，表示 toast 自动关闭的时间(秒)。默认为3秒。
- `enableHtml` ：是否支持提示内容中识别并展示 html标签。默认为 false。
- `position` ：提示信息位置。可以设置为 `top` / `center` / `bottom`。默认为 top。

```html
<g-button @click.native="showToastTop">展示顶部</g-button>
<g-button @click.native="showToastMiddle">展示中间</g-button>
<g-button @click.native="showToastBottom">展示底部</g-button>
```
```js
new Vue({
    ...
    methods: {
    showToastTop() {
      this.$toast("长时间提示", {
        position:"top",
        autoClose: 5
      });
    },
    showToastMiddle() {
      this.$toast("<strong>加粗提示</strong>", {
        position:"center",
        enableHtml: true,
      });
    },
    showToastBottom() {
      this.$toast("默认提示", {
        position:"bottom"
      });
    }
  }
})
```

以下分别为：长时间展示在顶部、加粗标签展示在中间、默认内容展示在底部。

<ClientOnly>
<toast-demo-default></toast-demo-default>
</ClientOnly>

## 设置关闭按钮

同样在 `toastOptions` 中可以传入一个 `closeButton` 属性，该属性是一个对象。默认包含两个 key-value 对，分别为 `text:"关闭"` 和 `一个空的回调函数`。

```html
<g-button @click.native="showToast">展示中间</g-button>
```
```js
new Vue({
    ...
    methods: {
    showToast() {
      this.$toast("你喜欢我吗？", {
        position:"center",
        autoClose: 4,
        closeButton:{
          text:"当然喜欢",
          callback(){
            console.log("后台也觉得喜欢")
          }
        }
      });
    },
  }
})
```

点击提示弹窗：

<ClientOnly>
<toast-demo-closebutton></toast-demo-closebutton>
</ClientOnly>