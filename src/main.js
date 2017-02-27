import Vue from 'vue'
import App from './App.vue'
import VueOccupy from 'components/index'

Vue.use(VueOccupy)

new Vue({
  el: '#app',
  ...App
})
