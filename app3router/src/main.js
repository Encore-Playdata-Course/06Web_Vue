import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

//Vue instance라는 root 객체
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
