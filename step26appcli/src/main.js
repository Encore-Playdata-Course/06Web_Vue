import Vue from 'vue'
import LanguageList from './components/LanguageList.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(LanguageList),
}).$mount('#app')
