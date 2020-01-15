const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/components/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.be.ok
    })

    it('可以接受 autoClose 属性', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
            propsData: {
                autoClose: 1.5
            }
        }).$mount(div)
        vm.$on('close', () => {
            expect(document.body.contains(vm.$el)).to.equal(false)
            done()
            div.remove()
            vm.$destroy()
        })
    }) 

    it('可以接受 closeButton 属性', (done) => {
        const callback = sinon.fake();
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
            propsData: {
                closeButton: {
                    text: 'hi',
                    callback
                }
            }
        }).$mount()
        vm.$on('click', callback)
        const closeButton = vm.$el.querySelector('.close')
        expect(closeButton.innerHTML).to.equal('hi')
        setTimeout(() => {
            closeButton.click()
            expect(callback).to.have.been.called
            done()
            vm.$el.remove()
            vm.$destroy()
        }, 0)
    })

    it('可以接受 enableHtml 属性', (done) => {
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
            propsData: {
                enableHtml: true
            }
        })
        vm.$slots.default = "<a href='http://localhost' id='a-target'>QQ</a>"
        vm.$mount()
        const aTarget = vm.$el.querySelector('#a-target')
        expect(aTarget).to.exist
        expect(aTarget.getAttribute('href')).to.equal('http://localhost')
        expect(aTarget.textContent.trim()).to.equal('QQ')
        setTimeout(() => {
            done()            
            vm.$el.remove()
            vm.$destroy()
        },0)
    })

    it('可以接受 position 属性', (done) => {
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
            propsData: {
                position: 'bottom'
            }
        }).$mount()
        expect(vm.$el.classList.contains('position-bottom')).to.equal(true)
        setTimeout(() => {
            done()
            vm.$el.remove()
            vm.$destroy()
        }, 0)
    })
})