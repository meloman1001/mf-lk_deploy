import Vue from 'vue'
import Vuex from 'vuex'
import CRM from './modules/CRM'
import FMC from './modules/FMC'

Vue.use(Vuex)

export default  new Vuex.Store({
   modules: {
      CRM,
      FMC
   },
   mutations: {
      // testCRM(state) {
      //    state.CRM.testCRM = ''
      // }
   },

})