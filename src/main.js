// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios'
import VueMaterial from 'vue-material'
import 'vue-material/dist/components/mdSnackbar/index.css'

window.axios = Axios
Vue.prototype.$http = Axios

Vue.use(VueMaterial)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
