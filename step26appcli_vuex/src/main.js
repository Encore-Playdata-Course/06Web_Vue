import Vue from 'vue'
import App from './App.vue'

import store from './js/myVuexStore';

//https://vuejs.org/v2/api/#silent
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
