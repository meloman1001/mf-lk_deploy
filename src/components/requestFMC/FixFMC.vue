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
           v-for="(accordion, index) of fixFMC"
           :key="index"
      >
         <div class="accordion-FMC__block-head" v-b-toggle:v-bind="'accordion-fix-' + index">
            <div class="accordion-FMC__head-title">{{ accordion.title }}</div>
            <div class="accordion-FMC__abon-price">{{ accordion.price }} ₽ в месяц</div>
            <label @click.stop class="accordion-FMC__switch">
               <div class="switch">
                  <input type="checkbox"
                         :true-value="fixChecked[index]"
                         :false-value="0"
                         v-model="fixVolume[index]"
                         @input="volumePlusOneFix(index)"
                  >
                  <span class="round"></span>
               </div>
            </label>

         </div>

         <b-collapse :id="'accordion-fix-' + index" role="tabpanel"
                     :visible="!!fixVolume[index]"
         >
            <div class="accordion-FMC__desc">
               <div class="accordion-FMC__desc-volume">
                  <p>Количество</p>
                  <b-select :value="0"
                            v-model="fixVolume[index]"
                            :options="optionsVolumeFix"
                            @input="isCheckedFix(index, $event)"
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
   name: "FixFMC",
   computed: {
      ...mapGetters([
         'fixFMC',
         'optionsVolumeFix',
         'fixVolume',
         'fixChecked',
         'accordionModelFix',
      ] ),
   },
   methods: {
      isCheckedFix(index, volume) {
         this.$store.commit('VOLUME_UPDATE', [index, volume, 'fix'])
         this.$store.commit('SELECT_CHECKED', [index, volume, 'fix'])
      },
      volumePlusOneFix(index) {
         this.$store.commit('VOLUME_PLUS_ONE', [index, 'fix'])
      }
   }
}
</script>

<style scoped>

</style>