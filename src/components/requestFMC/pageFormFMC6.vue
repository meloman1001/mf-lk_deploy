<template>
   <div class="page-form-FMC6">

      <div class="tab-pane__title">
         6/7. Скидки
      </div>

      <div class="page-form-FMC6__block">

         <div v-for="(sale, index) of sales"
              :key="index"
              class="page-form-FMC6__row"
         >
            <label :for="'sale-switch-' + index" class="page-form-FMC6__sale-name">{{ sale }}</label>

            <label :for="'sale-switch-' + index" class="switch">
               <input :id="'sale-switch-' + index"
                      type="checkbox"
                      v-model="switchSale[index]"
               >
               <span class="round"></span>
            </label>
         </div>
      </div>

      <TotalPriceFMC/>

      <div class="btns">
         <div class="btn back"
              @click="GO_TO_PAGE_FMC(['pageFormFMC6','pageFormFMC5'])">
            Назад
         </div>
         <div class="btn"
              @click="GO_TO_PAGE_FMC(['pageFormFMC6','pageFormFMC7'])">
            Подтвердить
         </div>
      </div>

   </div>
</template>

<script>
import TotalPriceFMC from "@/components/requestFMC/TotalPriceFMC";
import {mapMutations} from "vuex";

export default {
   name: "pageFormFMC6",
   components: {
      TotalPriceFMC
   },
   data() {
      return {
         switchSale: [],
         sales: [
            'Скидка 100% по тарифу «Объединяй!» на 1 месяц',
            'Скидка 100% по тарифу «Объединяй!» на полгода',
            'Скидка 10% по тарифу «Объединяй!»'
         ]
      }
   },
   methods: {
      ...mapMutations( [
         'GO_TO_PAGE_FMC',
      ] )
   }
}
</script>

<style lang="scss" scoped>
.page-form-FMC6 {
   .page-form-FMC6__block {
      max-width: 444px;
      margin-bottom: 25px;
   }

   .page-form-FMC6__row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      line-height: 20px;

      &:last-child {
         margin-bottom: 0;
      }

      label {
         cursor: pointer;
      }

   }

   .switch {
      align-self: flex-start;
   }

   .page-form-FMC6__sale-name {
      margin-right: 30px;
   }
}
</style>