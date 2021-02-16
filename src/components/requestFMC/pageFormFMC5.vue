<template>
   <div class="page-form-FMC5">

      <div class="tab-pane__title">
         5/7. Доп услуги и аренда
      </div>

      <div class="request__tabs">

         <b-tabs>
            <b-tab title='Аренда оборудования' active>
               <RentFMC />
            </b-tab>
            <b-tab title='Фикс связь'>
               <FixFMC />
            </b-tab>
         </b-tabs>
      </div>

      <TotalPriceFMC />

      <div class="btns">
         <div class="btn back"
              @click="GO_TO_PAGE_FMC(['pageFormFMC5','pageFormFMC4'])">
            Назад
         </div>
         <div class="btn"
              @click="GO_TO_PAGE_FMC(['pageFormFMC5','pageFormFMC6'])">
            Подтвердить
         </div>
      </div>
   </div>
</template>

<script>
import RentFMC from "@/components/requestFMC/RentFMC";
import FixFMC from "@/components/requestFMC/FixFMC";
import TotalPriceFMC from "@/components/requestFMC/TotalPriceFMC";
import {mapMutations} from "vuex";

export default {
   name: "pageFormFMC5",
   components: {
      RentFMC,
      FixFMC,
      TotalPriceFMC
   },
   methods: mapMutations([
      'GO_TO_PAGE_FMC'
   ])
}
</script>

<style lang="scss" scoped>
   .page-form-FMC5 {
      .request__tabs {
         margin-bottom: 28px;
      }
   }
</style>