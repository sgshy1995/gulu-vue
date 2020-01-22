const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/components/popover'

Vue.config.productionTip = false
Vue.config.devtools = false
Vue.component('g-popover', Popover)

describe('Popover', () => {
    it('存在.', () => {
        expect(Popover).to.be.ok
    })

    it('可以接受 position 属性', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <g-popover position="bottom" ref="test">
            <template #content>
                <div>浮层信息1</div>
            </template>
            <button>上面</button>
        </g-popover>
        `
        const vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            vm.$el.querySelector('button').click()
            vm.$nextTick(() => {
                expect(vm.$refs.test.$refs.contentWrapper.classList.contains('position-bottom')).to.be.true
                done()
            })
        })

    })
})