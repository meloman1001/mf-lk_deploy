import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as action from './action'
import search from "@/store/modules/CRM/search";

export default {
   state,
   getters,
   mutations,
   action,

   modules: {
      search
   }
}