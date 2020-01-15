import Toast from './components/toast'

let currentToast

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, toastOptions) {
            if (currentToast) {
                currentToast.close()
            }
            currentToast = createCoast({
                Vue, message, toastOptions, onClose: () => {
                    currentToast = null
                }
            })
        }
    }
}


function createCoast({ Vue, message, toastOptions, onClose }) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({
        propsData: toastOptions
    })
    toast.$slots.default = message
    toast.$mount()
    toast.$on('close', onClose)
    document.body.appendChild(toast.$el)
    return toast
}