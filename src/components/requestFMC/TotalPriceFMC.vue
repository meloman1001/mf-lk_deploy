<template>
   <div class="total-price-FMC">
      <p>Сумма активации: <span>{{ totalOver  | numFormat('0.00')  }} ₽</span></p>
      <p>Абонентская плата: <span>{{ totalOver  | numFormat('0.00') }} ₽/мес</span></p>
      <p v-if="pageFormFMC6">Абонентская плата: <span>{{ totalOver  | numFormat('0.00') }} ₽/мес</span></p>
   </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
   name: "TotalPriceFMC",

   computed: mapGetters([
      'totalPriceFMCTotal',
      'totalPriceFMCAbon',
      'totalOver',
      'pageFormFMC6',
   ])
}
</script>

<style lang="scss" scoped>
.total-price-FMC {
   text-align: right;
   margin-bottom: 30px;

   p {
      font-size: 19px;
      line-height: 25px;
   }

   span {
      font-weight: 500;
   }

   @media (max-width: 767px) {
      p {
         font-size: 16px;
      }
   }
}
</style>