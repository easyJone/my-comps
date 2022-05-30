import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局引入所有组件
import Basic from '@solazzo/basic'
Vue.use(Basic)

// 全局引入单个组件
// import { ProTabs } from '@solazzo/basic'
// Vue.use(ProTabs)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
