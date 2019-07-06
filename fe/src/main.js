import '@babel/polyfill'
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import LoadScript from 'vue-plugin-load-script'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(VeeValidate)
Vue.use(LoadScript)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
