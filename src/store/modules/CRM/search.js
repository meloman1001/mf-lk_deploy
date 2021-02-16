export default {
   state: {
      searchLName: '',
      searchName: '',
      searchPatronymic: '',
      searchPhone: '',
   },
   getters: {
      searchLName(state) {
         return state.searchLName
      },

      searchName(state) {
         return state.searchName
      },

      searchPatronymic(state) {
         return state.searchPatronymic
      },

      searchPhone(state) {
         return state.searchPhone
      },
   },
   mutations: {
      UPDATE_SEARCH_VALUE (state, [item, event]) {
         state[item] = event.target.value
      },
   },
}