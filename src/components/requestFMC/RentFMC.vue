<template>
   <div class="accordion-FMC" role="tablist">

      <div class="accordion-FMC__header accordion-FMC__block">
         <div class="accordion-FMC__block-head">
            <div class="accordion-FMC__head-title">Название услуги и описание</div>
            <div class="accordion-FMC__abon-price">Абон. плата</div>
            <label class="accordion-FMC__switch">
               <div class="switch">
                  <input type="checkbox">
                  <span class="round"></span>
               </div>
            </label>
         </div>
      </div>

      <div class="accordion-FMC__block"
           v-for="(accordion, index) of rentFMC"
           :key="index"
      >
         <div class="accordion-FMC__block-head" v-b-toggle:v-bind="'accordion-rent-' + index">
            <div class="accordion-FMC__head-title">{{ accordion.title }}</div>
            <div class="accordion-FMC__abon-price">{{ accordion.price }} ₽ <br class="mobile">в месяц</div>
            <label @click.stop class="accordion-FMC__switch">
               <div class="switch">
                  <input type="checkbox"
                         :true-value="rentChecked[index]"
                         :false-value="0"
                         v-model="rentVolume[index]"
                         @input="volumePlusOne(index, $event)"
                  >
                  <span class="round"></span>
               </div>
            </label>

         </div>

         <b-collapse :id="'accordion-rent-' + index" role="tabpanel"
                     :visible="!!rentVolume[index]"
         >
            <div class="accordion-FMC__desc">
               <div class="accordion-FMC__desc-volume">
                  <p>Количество</p>
                  <b-select :value="0"
                            v-model="rentVolume[index]"
                            :options="optionsVolume"
                            @input="isChecked(index, $event)"
                  />
               </div>
               <p>{{ accordion.description }}</p>
            </div>
         </b-collapse>
      </div>

   </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
   name: "RentFMC",

   computed: mapGetters( [
      'rentFMC',
      'optionsVolume',
      'rentVolume',
      'rentChecked',
      'accordionModel',
   ] ),
   methods: {
      isChecked(index, volume) {
         this.$store.commit( 'VOLUME_UPDATE', [index, volume, 'rent'] )
         this.$store.commit( 'SELECT_CHECKED', [index, volume, 'rent'] )
      },
      volumePlusOne(index) {
         this.$store.commit( 'VOLUME_PLUS_ONE', [index, 'rent'] )
      }
   }

}
</script>

<style lang="scss">
.accordion-FMC {
   .accordion-FMC__block-head {
      height: 58px;
      padding: 0 25px;
      display: flex;
      align-items: center;
      border: 1px solid #D9D9D9;
      position: relative;
      margin-top: -1px;
      line-height: 20px;
   }

   .accordion-FMC__head-title {
      margin-right: auto;
   }

   .accordion-FMC__abon-price {
      font-weight: 500;
      max-width: 189px;
      width: 100%;
   }

   .accordion-FMC__desc {
      margin-top: -1px;
      border: 1px solid #D9D9D9;
      background-color: #F7F7F7;
      padding: 30px 25px;

      p {
         max-width: 562px;
         line-height: 20px;
      }
   }

   .accordion-FMC__desc-volume {
      display: flex;
      align-items: center;
      margin-bottom: 25px;

      p {
         margin-right: 40px;
      }

      select {
         max-width: 65px;
      }
   }

   .accordion-FMC__header {
      color: var(--text-gray);

      .accordion-FMC__block-head {
         border: 0;
      }

      .accordion-FMC__abon-price {
         font-weight: 400;
      }

      .accordion-FMC__switch {
         visibility: hidden;
      }
   }

   @media (max-width: 767px) {
      .accordion-FMC__block-head {
         padding: 18px 15px;
         height: auto;
      }

      .accordion-FMC__head-title {
         min-width: 55%;
         padding-right: 41px;
      }
   }

}


</style>