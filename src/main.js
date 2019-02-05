import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './plugins/router'
import i18n from './plugins/i18n'

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')