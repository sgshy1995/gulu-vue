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

describe('TabsItem', () => {
    it('存在.', () => {
        expect(TabsItem).to.be.ok
    })

    it('可以接受 name 属性', () => {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                name: 'sgs'
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.equal('sgs')
        vm.$el.remove()
        vm.$destroy()
    })
    
    it('可以接受 disabled 属性', () => {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                name:'sgs',
                disabled: true
            }
        }).$mount()
        expect(vm.$el.classList.contains('disabled')).to.equal(true)
        const callback = sinon.fake()
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.not.have.been.called
        vm.$el.remove()
        vm.$destroy()
    })
})