<template>
   <b-modal id="tariffs"
            title="Тарифы"
            modal-class="request"
            centered
            no-fade
            hide-footer>

      <div class="tariffs-select">
         <label>Продукт</label>
         <b-form-select :value="product"
                        @change="UPDATE_VALUE(['product', $event])"
                        :options="productOptions"/>
      </div>

      <div class="tariffs-select">
         <label>Тариф</label>
         <b-form-select :disabled="!product"
                        :value="tariff"
                        @change="UPDATE_VALUE(['tariff', $event])"
                        :options="tariffOptions"/>
      </div>

<!--      <transition name="fade">-->
         <div v-if="tariff" class="about-tariff">
            <div class="tab-pane__title">
               Информация о тарифе
            </div>

            <TableTariff/>
         </div>
<!--      </transition>-->

      <button class="btn choose"
              :disabled="!tariff"
              @click="chooseTariff"
      >
         Выбрать
      </button>

   </b-modal>
</template>

<script>
import TableTariff from "@/components/requestCRM/TableTariff";
import {mapGetters, mapMutations} from "vuex";

export default {
   name: "ModalTariffs",
   components: {
      TableTariff
   },
   data() {
      return {
         productOptions: [
            {value: null, text: 'Выберите продукт', disabled: true},
            {value: 'a', text: 'This is First option'},
            {value: 'b', text: 'Selected Option'},
         ],
         tariffOptions: [
            {value: null, text: 'Выберите тариф', disabled: true},
            {value: 'a', text: 'This is First option'},
            {value: 'b', text: 'Selected Option'},
         ],

      }
   },

   computed: mapGetters( [
      'product',
      'tariff'
   ] ),

   methods: {
      ...mapMutations([
         'UPDATE_VALUE'
      ]),
      chooseTariff() {
         this.$store.commit( 'CHOOSE_TARIFF' )
         this.$root.$emit( 'bv::hide::modal', 'tariffs' )
      }
   }
}
</script>

<style lang="scss" scoped>

.tariffs-select {
   margin-bottom: 24px;
}

label {
   width: 120px;
}

.btn.choose {
   margin-top: 6px;
}

.about-tariff {
   margin-top: 50px;
   margin-bottom: 24px;
}

@media (max-width: 767px) {
   label {
      margin-bottom: 10px;
   }
}
</style>