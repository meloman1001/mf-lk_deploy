import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueMask from 'vue-the-mask'
import VueFilterDateFormat from '@vuejs-community/vue-filter-date-format'
import numFormat from 'vue-filter-number-format';
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'vue-search-select/dist/VueSearchSelect.css'

Vue.use(VueAxios, axios)
Vue.filter('numFormat', numFormat)
Vue.use(VueFilterDateFormat)
Vue.use(Vuelidate)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueMask)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
