import Vue from 'vue'
import Button from './components/button'
import Icon from './components/icon'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)

new Vue({
    el:'#app'
})