import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './http'

Vue.config.productionTip = false
Vue.prototype.$http=http;
Vue.prototype.$config={
  top:50
}

import './style.scss'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
