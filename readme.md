# 轱辘（Vue 轮子）

[![Build Status](https://travis-ci.org/sgshy1995/gulu-vue.svg?branch=master)](https://travis-ci.org/sgshy1995/gulu-vue)
![npm](https://img.shields.io/npm/v/eden-gulu)
![GitHub](https://img.shields.io/github/license/sgshy1995/gulu-vue)


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

