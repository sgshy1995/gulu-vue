const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/components/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok
    })

    describe('props', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('可以接受 value', () => {
            vm = new Constructor({
                propsData: {
                    value: '1234'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('1234')
        })

        it('可以接受 disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })

        it('可以接受 readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
        })

        it('可以接受 error', () => {
            vm = new Constructor({
                propsData: {
                    error: '1234'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#ierror')
            const errorMessage = vm.$el.querySelector('.error-message')
            expect(errorMessage.innerText).to.equal('1234')
        })

        it('可以接受 info', () => {
            vm = new Constructor({
                propsData: {
                    info: '1234'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#iinfo')
            const infoMessage = vm.$el.querySelector('.info-message')
            expect(infoMessage.innerText).to.equal('1234')
        })
    })

    describe('events', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })

        it('支持 change/input/focus/blur 事件', () => {
            ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
                vm = new Constructor().$mount()
                const callback = sinon.fake();
                vm.$on(eventName, callback)
                const inputElement = vm.$el.querySelector('input')
                let event = new Event(eventName)
                Object.defineProperty(event, 'target', { value: {value: 'hi'},enumerable:true})
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.called.calledWith(event.target.value)
                expect(callback).to.have.been.called.calledWith('hi')
            })
        })
    })
})