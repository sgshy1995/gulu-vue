const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/components/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('存在.', () => {
        expect(Col).to.be.ok
    })

    it('可以接受 align 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                span: '20'
            }
        }).$mount(div)
        const col = vm.$el
        expect(col.classList.contains('col-20')).to.equal(true)
        div.remove()
        vm.$destroy()
    })

    it('可以接受 offset 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                offset: '20'
            }
        }).$mount(div)
        const col = vm.$el
        expect(col.classList.contains('offset-20')).to.equal(true)
        div.remove()
        vm.$destroy()
    })

    it('可以接受 ipad 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                ipad: {span:10,offset:10}
            }
        }).$mount(div)
        const col = vm.$el
        expect(col.classList.contains('col-ipad-10')).to.equal(true)
        expect(col.classList.contains('offset-ipad-10')).to.equal(true)
        div.remove()
        vm.$destroy()
    })

    it('可以接受 narrow-pc 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                narrowPc: {span:9,offset:9}
            }
        }).$mount(div)
        const col = vm.$el
        expect(col.classList.contains('col-narrow-pc-9')).to.equal(true)
        expect(col.classList.contains('offset-narrow-pc-9')).to.equal(true)
        div.remove()
        vm.$destroy()
    })

    it('可以接受 pc 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                pc: {span:8,offset:8}
            }
        }).$mount(div)
        const col = vm.$el
        expect(col.classList.contains('col-pc-8')).to.equal(true)
        expect(col.classList.contains('offset-pc-8')).to.equal(true)
        div.remove()
        vm.$destroy()
    })

    it('可以接受 wide-pc 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                widePc: {span:7,offset:7}
            }
        }).$mount(div)
        const col = vm.$el
        expect(col.classList.contains('col-wide-pc-7')).to.equal(true)
        expect(col.classList.contains('offset-wide-pc-7')).to.equal(true)
        div.remove()
        vm.$destroy()
    })

})