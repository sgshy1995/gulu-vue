# Eden-Gulu（Vue 造轮子）

[![Build Status](https://travis-ci.org/sgshy1995/gulu-vue.svg?branch=master)](https://travis-ci.org/sgshy1995/gulu-vue)
[![npm](https://img.shields.io/npm/v/eden-gulu)](https://www.npmjs.com/package/eden-gulu)
[![GitHub](https://img.shields.io/github/license/sgshy1995/gulu-vue)](https://github.com/sgshy1995/gulu-vue/blob/master/LICENSE)


## 介绍

自制 Vue UI 框架。

美观、大方、实用。

详情请参阅 [官方文档](https://eden-sheng.cn/gulu-vue/)。

## 开始使用

### 安装

如果你想体验 Eden-Gulu，推荐你进行全局安装:

```sh
# 全局安装
yarn global add eden-gulu  # 或者： npm install global eden-gulu
```

推荐在项目中使用 yarn 安装：

```bash
# 项目安装
yarn add -D eden-gulu  # 或者： npm install -D eden-gulu
```

我们推荐你全部使用 `yarn` 来代替 `npm` 在你的项目中。

### 默认样式

首先，如果你使用本框架中的任意组件，
请设置 CSS 样式 `border-box`。

Tips:

```css
*,*::before,*::after{box-sizing: border-box;}
```

IE8 及以上浏览器支持此样式。

你还需引入该框架中的 css 文件。在 main.js 或所需组件中引入：

```js
import 'eden-gulu/dist/index.css'
```

### 引入 eden-gulu

比如在 Vue 组件中引入 按钮组件：

```js
import {Button} from 'eden-gulu'

export default {
  name: 'app',
  components: {
    'g-button': Button
  }
}
```

### 关于 parcel

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


## 文档

如果你想深入了解并快速上手本组件，请参阅 [官网](https://eden-sheng.cn/gulu-vue/) 或上面给出的预览链接。

##  提问

***Q:*** 本组件在何种环境下使用？

***A:*** 因为组件本身是使用 Vue 框架编写，所以仅支持使用 Vue 进行开发的项目。

***Q:*** 本组件适用于何种页面？

***A:*** 任何页面都可以，无论是 PC 还是 移动端，都做了很好的适配；无论静态页面或动态页面，因为组件大多都是基础组件，所以从你项目搭建开始都是实用的。



## 变更记录

- 2020-01-08 开始立项。
- 2020-01-28 正式发布 V 1.1.0 版本。

## 联系方式

- Email: singlesaulwork@gmail.com
- [个人博客](http://eden-sheng.cn)
- [知乎](https://www.zhihu.com/people/ming-ji-yisheng-88)


## 贡献代码

## 版权信息

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2019-present, Guangsheng (Eden) Sheng