# 轱辘（Vue 轮子）

[![Build Status](https://travis-ci.org/sgshy1995/gulu-vue.svg?branch=master)](https://travis-ci.org/sgshy1995/gulu-vue)
[![npm](https://img.shields.io/npm/v/eden-gulu)](https://www.npmjs.com/package/eden-gulu)
[![GitHub](https://img.shields.io/github/license/sgshy1995/gulu-vue)](https://github.com/sgshy1995/gulu-vue/blob/master/LICENSE)


## 介绍

自制简易版 UI 框架

## 开始使用

### 安装

#### 默认样式

首先，如果你使用本框架中的任意组件，
请设置 CSS 样式 `border-box`。

Tips:

```css
*,*::before,*::after{box-sizing: border-box;}
```

IE8 及以上浏览器支持此样式。

你还需要设置一些默认变量来引入组件的样式（后续会改为 SCSS 变量）。

```css
:root {
  --border: 1px solid;
  --button-height: 32px;
  --font-size: 14px;
  --button-background: white;
  --button-active-background: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}
```

IE15 及以上浏览器支持此样式。

你还需引入该框架中的 css 文件（后续会优化）。在 main.js 或所需组件中引入：

```js
import 'eden-gulu/dist/index.css'
```

#### 安装 eden-gulu

推荐在项目中使用 yarn 安装：

```bash
yarn add eden-gulu
```

#### 引入 eden-gulu

在 Vue 组件中引入：

```js
import {Button,ButtonGroup,Icon} from 'eden-gulu'
export default {
  name: 'app',
  components: {
    'g-button': Button,
    'g-icon': Icon,
    'g-button-group': ButtonGroup
  }
}
```

#### 关于 parcel

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

##  提问

## 变更记录

## 联系方式

## 贡献代码

## 版权信息

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2019-present, Guangsheng (Eden) Sheng