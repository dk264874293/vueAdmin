import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import echarts from 'echarts'
import router from './router'
import store from './store'

Vue.use(VueAxios, axios)
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(echarts)

new Vue({
  el: '#app',
  render: h => h(App)
})
