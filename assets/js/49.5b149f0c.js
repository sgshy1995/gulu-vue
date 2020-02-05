(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{317:function(s,t,a){"use strict";a.r(t);var e=a(1),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"开始安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始安装"}},[s._v("#")]),s._v(" 开始安装")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("警告")]),s._v(" "),a("p",[s._v("请确保你使用的版本是 Vue 2.6.0+。")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("推荐你在项目中全部使用 "),a("code",[s._v("yarn")]),s._v(" 来代替 "),a("code",[s._v("npm")]),s._v("。")])]),s._v(" "),a("h2",{attrs:{id:"全局安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局安装"}},[s._v("#")]),s._v(" 全局安装")]),s._v(" "),a("p",[s._v("如果你只是想尝试一下 Eden-Gulu，那么我们推荐你可以进行全局安装。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局安装")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" global "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" eden-gulu "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者： npm install global eden-gulu")]),s._v("\n")])])]),a("h2",{attrs:{id:"项目安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目安装"}},[s._v("#")]),s._v(" 项目安装")]),s._v(" "),a("p",[s._v("在你的项目中使用 Eden-Gulu。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 项目安装")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -D eden-gulu "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者： npm install -D eden-gulu")]),s._v("\n")])])]),a("h2",{attrs:{id:"引入-css-样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入-css-样式"}},[s._v("#")]),s._v(" 引入 css 样式")]),s._v(" "),a("p",[s._v("使用该组件，有一些CSS样式上的需求。")]),s._v(" "),a("p",[s._v("请引入 css 文件来实现组件的样式，这是 "),a("em",[a("strong",[s._v("必须")])]),s._v(" 的：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'eden-gulu/dist/index.css'")]),s._v("\n")])])]),a("p",[s._v("同时，推荐你设置CSS样式 "),a("code",[s._v("border-box")]),s._v("，这是 "),a("em",[a("strong",[s._v("推荐")])]),s._v(" 的：")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("*,*::before,*::after")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("box-sizing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" border-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"关于-parcel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于-parcel"}},[s._v("#")]),s._v(" 关于 parcel")]),s._v(" "),a("p",[s._v("很多组件使用了自闭合标签。")]),s._v(" "),a("p",[s._v("因此，如果你使用 parcel 进行打包或虚拟预览，请让你的 bundler 识别自闭合标签。\n你需要在 "),a("code",[s._v("package.json")]),s._v(" 中做出设置：")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"posthtml"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"recognizeSelfClosing"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("否则，可能会引起样式的问题，甚至会引发组件的崩溃。")]),s._v(" "),a("p",[s._v("建议使用 "),a("a",{attrs:{href:"https://cli.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vue-Cli"),a("OutboundLink")],1),s._v(" 进行项目构建。")])])}),[],!1,null,null,null);t.default=n.exports}}]);