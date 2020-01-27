module.exports = {
    base: '/gulu-vue/',
    title: 'Eden-Gulu UI',
    description: '好用、强劲的UI框架',
    themeConfig: {
        logo: '/gulu.png',
        nav: [
            { text: '首页', link: '/' },
            { text: 'Github', link: 'https://github.com/sgshy1995/gulu-vue' },
            { text: '搜索', link: 'https://google.com' },
        ],
        sidebar: [
            {
                title: '说明',   // 必要的
                path: '/home/',      // 可选的, 应该是一个绝对路径
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
            },
            {
                title: '开始安装',
                path: '/install/',
                collapsable: true,
                sidebarDepth: 1
            },
            {
                title: '使用组件',
                path: '/components/',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    '/components/button',
                    '/components/button-group',
                    '/components/input',
                    '/components/layout',
                    '/components/row-and-col',
                    '/components/toast',
                    '/components/tabs',
                    '/components/popover',
                    '/components/collapse'
                ]
            },
        ]
    }
}