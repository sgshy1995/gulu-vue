---
title: 安装
---

# 开始安装

::: warning 警告
请确保你使用的版本是 Vue 2.6.0+。
:::

::: tip 提示
推荐你在项目中全部使用 `yarn` 来代替 `npm`。
:::

## 全局安装

如果你只是想尝试一下 Eden-Gulu，那么我们推荐你可以进行全局安装。

```sh
# 全局安装
yarn global add eden-gulu # 或者： npm install global eden-gulu
```

## 项目安装

在你的项目中使用 Eden-Gulu。

```sh
# 项目安装
yarn add -D eden-gulu # 或者： npm install -D eden-gulu
```

## 引入 css 样式

使用该组件，有一些CSS样式上的需求。

请引入 css 文件来实现组件的样式，这是 ***必须*** 的：
```js
import 'eden-gulu/dist/index.css'
```

同时，推荐你设置CSS样式 `border-box`，这是 ***推荐*** 的：

```css
*,*::before,*::after{box-sizing: border-box;}
```

## 关于 parcel

很多组件使用了自闭合标签。

因此，如果你使用 parcel 进行打包或虚拟预览，请让你的 bundler 识别自闭合标签。
你需要在 `package.json` 中做出设置：

```json
{
  "posthtml": {
      "recognizeSelfClosing": true
  }
}
```

否则，可能会引起样式的问题，甚至会引发组件的崩溃。

建议使用 [Vue-Cli](https://cli.vuejs.org/zh/) 进行项目构建。
