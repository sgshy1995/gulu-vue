import Vue from 'vue'
import Button from './components/button'
import Icon from './components/icon'
import ButtonGroup from './components/button-group'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)

new Vue({
    el:'#app',
    data() {
        return{
            loading1:true,
            loading2:false,
            loading3:true
        }
    }
})

// 单元测试

import chai from 'chai'
const expect = chai.expect

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
    vm.$on('click', function () {
        console.log(1)
    })
    let button = vm.$el
    button.click()
}