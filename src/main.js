import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局引入所有组件
import Components from 'pro-ui'
Vue.use(Components)

// 全局引入单个组件
// import { ProTabs, ProTab } from 'pro-ui'
// Vue.use(ProTabs)
// Vue.use(ProTab)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
