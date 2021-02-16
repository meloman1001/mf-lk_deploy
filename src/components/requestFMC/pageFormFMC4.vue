<template>
   <div class="page-form-FMC4">

      <div class="tab-pane__title">
         4/7. Тарифные планы
      </div>

      <div class="request__tabs">

         <b-tabs>
            <b-tab lazy :title='"Конвергентный (" + tariffsConvergent.length +")"' active>
               <CardTariff :tariffs="tariffsConvergent" />
            </b-tab>

            <b-tab lazy title="Домашний интернет от МегаФон (4)">
               <CardTariff :tariffs="tariffsHome"/>
            </b-tab>
         </b-tabs>

         <TotalPriceFMC />

         <div class="btns">
            <div class="btn back"
                 @click="GO_TO_PAGE_FMC(['pageFormFMC4','pageFormFMC3'])">
               Назад
            </div>
            <div class="btn"
                 @click="GO_TO_PAGE_FMC(['pageFormFMC4','pageFormFMC5'])">
               Подтвердить
            </div>
         </div>

      </div>
   </div>
</template>

<script>
import CardTariff from "@/components/requestFMC/CardTariff";
import {mapGetters, mapMutations} from "vuex";
import TotalPriceFMC from "@/components/requestFMC/TotalPriceFMC";

export default {
   name: "pageFormFMC4",

   components: {
      CardTariff,
      TotalPriceFMC
   },

   computed: {
      ...mapGetters( [
         'tariffsConvergent',
         'tariffsHome'
      ] )
   },
   methods: mapMutations([
      'GO_TO_PAGE_FMC'
   ])
}
</script>

<style lang="scss">
   .btns {
      display: flex;
      justify-content: space-between;
   }
</style>