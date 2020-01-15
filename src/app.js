import Vue from 'vue'
import Button from './components/button'
import Icon from './components/icon'
import ButtonGroup from './components/button-group'
import Input from './components/input'
import Row from './components/row'
import Col from './components/col'
import Layout from './components/layout'
import Header from './components/header'
import Sider from './components/sider'
import Content from './components/content'
import Footer from './components/footer'
import Toast from './components/toast'
import plugin from './plugin'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-sider', Sider)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-toast', Toast)
Vue.use(plugin)

new Vue({
    el: '#app',
    data() {
        return {
            loading1: true,
            loading2: false,
            loading3: true,
            message: '支持双向绑定'
        }
    },
    created() {
    },
    methods: {
        showToast() {
            this.$toast(`Hello World ${parseInt(Math.random(1)*100)}`, {
                closeButton: {
                    text: '关闭',
                    callback() {
                        console.log('知道了')
                    }
                },
                autoClose: false,
                position:'bottom'
            })
        }
    }
})
