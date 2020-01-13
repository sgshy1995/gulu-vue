const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/components/row'
import Col from '../src/components/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.be.ok
    })

    it('可以接受 gutter 属性', (done) => {
        Vue.component('g-row', Row)
        Vue.component('g-col', Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
          <g-row gutter="10">
            <g-col span="12"></g-col>
            <g-col span="12"></g-col>
          </g-row>
        `
        const vm = new Vue({
            el: div
        })
        const row = vm.$el.querySelector('.row')
        expect(getComputedStyle(row).marginLeft).to.be.equal('-5px')
        expect(getComputedStyle(row).marginRight).to.be.equal('-5px')
        setTimeout(() => {
            const cols = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(cols[0]).paddingLeft).to.be.equal('5px')
            expect(getComputedStyle(cols[0]).paddingRight).to.be.equal('5px')
            expect(getComputedStyle(cols[1]).paddingLeft).to.be.equal('5px')
            expect(getComputedStyle(cols[1]).paddingRight).to.be.equal('5px')
            done()
            vm.$el.remove()
            vm.$destroy()
        })
    })

    it('可以接受 align 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
            propsData: {
                align: 'right'
            }
        }).$mount(div)
        const row = vm.$el
        expect(getComputedStyle(row).justifyContent).to.be.equal('flex-end')
        div.remove()
        vm.$destroy()
    })

})