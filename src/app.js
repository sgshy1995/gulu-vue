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
import Toast from './components/toast'
import plugin from './plugin'
import Tabs from './components/tabs'
import TabsItem from './components/tabs-item'
import TabsBody from './components/tabs-body'
import TabsHead from './components/tabs-head'
import TabsPanel from './components/tabs-panel'
import Popover from './components/popover'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-sider', Sider)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-toast', Toast)
Vue.use(plugin)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-panel', TabsPanel)
Vue.component('g-popover',Popover)

new Vue({
    el: '#app',
    data() {
        return {
        }
    },
    created() {
    },
    methods: {
    }
})
