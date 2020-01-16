const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/components/tabs'
import TabsItem from '../src/components/tabs-item'
import TabsBody from '../src/components/tabs-body'
import TabsHead from '../src/components/tabs-head'
import TabsPanel from '../src/components/tabs-panel'

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-panel', TabsPanel)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsPanel', () => {
    it('存在.', () => {
        expect(TabsPanel).to.be.ok
    })

    it('可以获取到 selected，并且没有选中的元素不会出现', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <g-tabs selected="sports">
            <g-tabs-head>
                <g-tabs-item name="military">军事</g-tabs-item>
                <g-tabs-item name="sports">体育</g-tabs-item>
                <g-tabs-item name="recreation">娱乐</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-panel name="military">军事相关</g-tabs-panel>
                <g-tabs-panel name="sports">体育相关</g-tabs-panel>
                <g-tabs-panel name="recreation">娱乐相关</g-tabs-panel>
            </g-tabs-body>
        </g-tabs>
        `
        const vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            expect(vm.$el.querySelector(".tabs-panel[data-name='sports']").classList.contains('active')).to.equal(true)
            expect(vm.$el.querySelector(".tabs-panel[data-name='military']")).to.not.exist
            expect(vm.$el.querySelector(".tabs-panel[data-name='recreation']")).to.not.exist
            done()
            div.remove()
            vm.$destroy()
        })
    })

    it('可以接受 name 属性', () => {
        const Constructor = Vue.extend(TabsPanel)
        const vm = new Constructor({
            data() {
                return {
                    active:true
                }
            },
            propsData: {
                name: 'sgs'
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.equal('sgs')
        vm.$el.remove()
        vm.$destroy()
    })


})