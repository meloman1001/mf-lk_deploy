<template>
   <div>
      <form @submit.prevent="">
         <div class="tab-pane__title">
            1/4. Поиск по ФИО и/или телефону
         </div>

         <div class="tab-pane__input">
            <label for="lName">Фамилия</label>
            <input id="lName"
                   type="text"
                   :disabled="btnSearch"
                   @input="UPDATE_SEARCH_VALUE(['searchLName', $event])"
            >
         </div>

         <div class="tab-pane__input">
            <label for="name">Имя</label>
            <input id="name"
                   type="text"
                   :disabled="btnSearch"
                   @input="UPDATE_SEARCH_VALUE(['searchName', $event])"
            >
         </div>

         <div class="tab-pane__input">
            <label for="patronymic">Отчество</label>
            <input id="patronymic"
                   type="text"
                   :disabled="btnSearch"
                   @input="UPDATE_SEARCH_VALUE(['searchPatronymic', $event])"
            >
         </div>

         <div class="tab-pane__input">
            <label for="phone">Мобильный <br> телефон</label>
            <input id="phone"
                   type="text"
                   v-mask="'+7 ### ###-##-##'"
                   :disabled="btnSearch"
                   @input="UPDATE_SEARCH_VALUE(['searchPhone', $event])"
            >
         </div>

         <div class="tab-pane__input">
            <label></label>
            <button v-if="!btnSearch"
                    @click="search"
                    class="btn">Поиск
            </button>
            <button v-else
                    @click="search"
                    class="btn">Изменить
            </button>
         </div>
      </form>
   </div>
</template>

<script>

import {mapGetters, mapMutations} from "vuex";

export default {
   name: "pageFormCRM_search",
   components: {},
   data() {
      return {
         btnSearch: false,
      }
   },
   computed: {
      ...mapGetters( [
         'searchLName',
         'searchName',
         'searchPatronymic',
         'searchPhone',
      ] )
   },

   methods: {
      ...mapMutations([
         'UPDATE_SEARCH_VALUE',
      ]),
      search() {
         this.btnSearch = !this.btnSearch
         this.$emit( 'search' )
      }
   },
}
</script>

<style lang="scss" scoped>

@media (max-width: 767px) {
   .request__clients .tab-pane__title {
      margin-bottom: 20px;
   }
}

</style>