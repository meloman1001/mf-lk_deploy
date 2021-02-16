<template>
   <div class="page-form-FMC3">

      <div class="tab-pane__title">
         3/7. Данные для доставки SIM
      </div>

      <div class="page-form-FMC3__data">
         <div class="page-form-FMC3__data-row">
            <div class="page-form-FMC3__data-name">Адрес</div>
            <div class="page-form-FMC3__data-data">127006 Россия, Москва г, пер. Оружейный, д. 41, кв. 1</div>
         </div>

         <div class="page-form-FMC3__data-row">
            <div class="page-form-FMC3__data-name">Комментарий по дому</div>
            <div class="page-form-FMC3__data-data">—</div>
         </div>

         <div class="page-form-FMC3__data-row">
            <div class="page-form-FMC3__data-name">Комментарий УК/ТСЖ</div>
            <div class="page-form-FMC3__data-data">24/7</div>
         </div>
      </div>

      <div class="attention">
         Составление заявки на подключение FMC клиенту, у которого есть действующий номер МегаФон и договор Wifire,
         возможно только через КЦ или офис продаж
      </div>

      <form @submit.prevent="submitFormSIM">
         <div class="input-radio">

            <input type="radio"
                   v-model="selected"
                   name="qw"
                   id="activation-no"
                   value="no"
            >
            <label for="activation-no">
               Клиенту нужен новый номер МегаФон
               <label></label>
            </label>
         </div>

         <div class="input-radio">

            <input type="radio"
                   v-model="selected"
                   name="qw"
                   id="activation-yes"
                   value="yes"
            >
            <label for="activation-yes">
               У клиента есть действующий номер МегаФон
               <label></label>
            </label>
         </div>

         <b-form-select v-model="selected" :options="selectSIM"/>

         <div class="btns">
            <div @click="GO_TO_PAGE_FMC(['pageFormFMC3', 'pageFormFMC2'])"
                 class="btn back">Назад
            </div>
            <button class="btn">Подтвердить</button>
         </div>
      </form>

   </div>

</template>

<script>
import {mapMutations} from "vuex";

export default {
   name: "pageFormFMC3",

   data() {
      return {
         selected: 'no',
         selectSIM: [
            {text: 'Клиенту нужен новый номер МегаФон', value: 'no'},
            {text: 'У клиента есть действующий номер МегаФон', value: 'yes'}
         ]
      }
   },

   methods: {
      ...mapMutations([
         'GO_TO_PAGE_FMC'
      ]),
      submitFormSIM() {
         this.$store.commit( 'GO_TO_PAGE_FMC', ['pageFormFMC3', 'pageFormFMC4'] )
      }
   }
}
</script>

<style lang="scss" scoped>

.page-form-FMC3 {
   .input-radio {
      margin-bottom: 30px;
      
      label {
         cursor: pointer;
      }
   }

   .btns {
      display: flex;
      justify-content: space-between;
   }

   select {
      display: none;
      margin-bottom: 30px;
   }

   .page-form-FMC3__data {
      margin-bottom: 35px;
      line-height: 20px;
   }

   .page-form-FMC3__data-row {
      display: flex;
      margin-bottom: 27px;

      &:last-child {
         margin-bottom: 0;
      }
   }

   .page-form-FMC3__data-name {
      width: 184px;
      flex-shrink: 0;
   }

   .attention {
      max-width: 600px;
      margin-bottom: 27px;
   }

   @media (max-width: 767px) {
      select {
         display: block;
         max-width: none;
      }

      .input-radio {
         display: none;
      }

      .page-form-FMC3__data-name {
         width: 153px;
         padding-right: 42px;
      }

      .attention {
         margin-bottom: 20px;
      }
   }
}


</style>