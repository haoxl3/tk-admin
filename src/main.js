// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import axios from './router/axios'
import VueAxios from 'vue-axios'
import store from './store'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/cdn/animate/3.5.2/animate.css'
import '../static/cdn/iconfont/1.0.0/index.css'
// import {iconfontUrl} from '@/config/env'
import './styles/common.scss'

Vue.use(element)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
// export function createApp() {
//     const app = new Vue({
//         router,
//         render: h => h(App)
//     })
//     return {app, router}
// }
