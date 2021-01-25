import Vue from 'vue'
import App from './App.vue'

import store from './js/myVuexStore';

//https://vuejs.org/v2/api/#silent
Vue.config.productionTip = false

new Vue({
  //모든 자식 component에서 this.$store로 access
  store,
  render: h => h(App),
}).$mount('#app')
