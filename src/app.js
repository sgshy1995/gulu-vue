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

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout',Layout)
Vue.component('g-header',Header)
Vue.component('g-sider',Sider)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)

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
    methods: {
        changeInput(e) {
            console.log(e)
        }
    }
})

/* // 单元测试

import chai from 'chai'
import spies from 'chai-spies'
const expect = chai.expect
chai.use(spies)

try {
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData:{
                icon: 'download'
            }
        })
        vm.$mount()
        let use = vm.$el.querySelector('use')
        expect(use.getAttribute('xlink:href')).to.eq('#idownload')
        vm.$el.remove()
        vm.$destroy()
    }

    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'praise',
                loading: true
            }
        })
        vm.$mount()
        let use = vm.$el.querySelector('use')
        expect(use.getAttribute('xlink:href')).to.eq('#iloading')
        vm.$el.remove()
        vm.$destroy()
    }

    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'praise'
            }
        })
        vm.$mount('#app1')
        let svg = vm.$el.querySelector('svg')
        let { order } = window.getComputedStyle(svg)
        expect(order).to.eq('1')
        vm.$el.remove()
        vm.$destroy()
    }

    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'praise',
                iconPosition: 'right'
            }
        })
        vm.$mount('#app2')
        let svg = vm.$el.querySelector('svg')
        let { order } = window.getComputedStyle(svg)
        expect(order).to.eq('2')
        vm.$el.remove()
        vm.$destroy()
    }


    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'download'
            }
        })
        vm.$mount()
        let spy = chai.spy(function () {})
        vm.$on('click', spy)
        let button = vm.$el
        console.log(button)
        button.click()
        expect(spy).to.have.been.called()
    }

    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'download'
            }
        })
        vm.$mount()
        let spy = chai.spy(()=>{})
        vm.$on('update:loading', spy)
        let button = vm.$el
        button.click()
        expect(spy).to.have.been.called()
    }

}catch (error) {
    window.errors = [error]
} finally {
    window.errors && window.errors.map((error) => {
        console.error(error.message)
    })
} */