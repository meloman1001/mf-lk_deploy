<template>
   <div class="content request">
      <div class="wrapper">
         <div class="wrapper__block">

            <b-breadcrumb :items="breadcrumb"></b-breadcrumb>

            <p class="big-green-title">Заявка на подключение FMC</p>

            <div v-show="pageFormFMC">
               <form @submit.prevent="submitFormFMC">

                  <div class="tab-pane__title">
                     1/7. Адресные данные клиента
                  </div>

                  <div class="tab-pane__input">
                     <label class="star">Город</label>
                     <input type="text"
                            :disabled="formDisabledFMC"
                            v-model.trim="formFMC.city"
                            :class="{ invalid: validCity}"
                     >
                  </div>

                  <div class="tab-pane__input">
                     <label>Улица</label>
                     <input type="text" :disabled="formDisabledFMC">
                  </div>

                  <div class="tab-pane__input">
                     <label class="star">Дом</label>
                     <input type="text"
                            :disabled="formDisabledFMC"
                            v-model.trim="formFMC.house"
                            :class="{ invalid: validHouse}"
                     >
                  </div>
                  <div v-if="addressDataFMC" class="tab-pane__input">
                     <label></label>
                     <button class="btn">Подтвердить</button>
                  </div>
                  <div v-else class="tab-pane__input checked">
                     <label></label>
                     <div>Дом подключен</div>
                  </div>
               </form>

               <form v-if="!addressDataFMC"
                     @submit.prevent="submitFormFMCNext"
               >
                  <div class="tab-pane__input">
                     <label class="star" for="front">Подъезд</label>
                     <input id="front"
                            type="text"
                            :disabled="formDisabledFMC"
                            v-model.trim="formFMCNext.front"
                            :class="{ invalid: validFront}"
                     >
                  </div>
                  <div class="tab-pane__input">
                     <label for="level">Этаж</label>
                     <input id="level"
                            type="text"
                            :disabled="formDisabledFMC"
                     >
                  </div>
                  <div class="tab-pane__input">
                     <label class="star" for="apartment">Квартира</label>
                     <input id="apartment"
                            type="text"
                            :disabled="formDisabledFMC"
                            v-model.trim="formFMCNext.apartment"
                            :class="{ invalid: validApartment}"
                     >
                  </div>

                  <div class="tab-pane__input tab-pane__input_text">
                     <label for="apartment">Комментарий <br> по дому</label>
                     <div class="tab-pane__input-comment">—</div>
                  </div>
                  <div class="tab-pane__input tab-pane__input_text">
                     <label for="apartment">Комментарий <br> УК/ТСЖ</label>
                     <div class="tab-pane__input-comment">Доступ ограничен в выходные дни и праздничные, только
                        ЛА
                     </div>
                  </div>
                  <div class="tab-pane__input tab-pane__input_text">
                     <label for="apartment">Частный сектор</label>
                     <div class="tab-pane__input-radio">

                        <div class="input-radio">
                           <input checked type="radio" name="sector" id="no" value="no">
                           <label for="no">Нет
                              <label></label>
                           </label>
                        </div>

                        <div class="input-radio">
                           <input type="radio" name="sector" id="yes" value="yes">
                           <label for="yes">Да
                              <label></label>
                           </label>
                        </div>

                     </div>
                  </div>

                  <div class="tab-pane__input">
                     <label></label>

                     <button v-if="!formDisabledFMC"
                             class="btn">Подтвердить
                     </button>

                     <div v-else class="btn"
                          @click="BTN_FORM_DISABLED_FMC">Изменить
                     </div>

                  </div>

               </form>

               <div v-if="formDisabledFMC" class="request__clients">

                  <div class="tab-pane__title">Клиенты</div>
                  <p v-if="true">По данному адресу ранее подключений не было.</p>
                  <ClientsTableFMC v-else/>
                  <div @click="GO_TO_PAGE_FMC(['pageFormFMC', 'pageFormFMC2'])"
                       class="btn">Заявка новому
                  </div>

               </div>
            </div>

            <pageFormFMC2 v-show="pageFormFMC2"/>
            <pageFormFMC3 v-show="pageFormFMC3"/>
            <pageFormFMC4 v-show="pageFormFMC4"/>
            <pageFormFMC5 v-show="pageFormFMC5"/>
            <pageFormFMC6 v-show="pageFormFMC6"/>
            <pageFormFMC7 v-show="pageFormFMC7"/>

         </div>
      </div>
   </div>
</template>

<script>

import {mapGetters, mapMutations} from "vuex";
import {required, minLength} from "vuelidate/lib/validators";
import pageFormFMC2 from "@/components/requestFMC/pageFormFMC2";
import pageFormFMC3 from "@/components/requestFMC/pageFormFMC3";
import pageFormFMC4 from "@/components/requestFMC/pageFormFMC4";
import pageFormFMC5 from "@/components/requestFMC/pageFormFMC5";
import pageFormFMC6 from "@/components/requestFMC/pageFormFMC6";
import pageFormFMC7 from "@/components/requestFMC/pageFormFMC7";
import ClientsTableFMC from "@/components/requestFMC/ClientsTableFMC";

export default {
   name: "pageFormFMC",

   components: {
      pageFormFMC2,
      pageFormFMC3,
      pageFormFMC4,
      pageFormFMC5,
      pageFormFMC6,
      pageFormFMC7,
      ClientsTableFMC
   },

   data() {
      return {
         breadcrumb: [
            {
               text: 'Главная страница',
               to: {name: 'home'}
            },
            {
               text: 'Заявка на подключение FMC',
               active: true
            }
         ],
      }
   },

   computed: {
      ...mapGetters( [
         'addressDataFMC',
         'formDisabledFMC',
         'formFMC',
         'formFMCNext',
         'pageFormFMC',
         'pageFormFMC2',
         'pageFormFMC3',
         'pageFormFMC4',
         'pageFormFMC5',
         'pageFormFMC6',
         'pageFormFMC7',
      ] ),
      validCity() {
         return (!this.$v.formFMC.city.required || !this.$v.formFMC.city.minLength ) && this.$v.formFMC.city.$dirty
      },
      validHouse() {
         return !this.$v.formFMC.house.required && this.$v.formFMC.house.$dirty
      },
      validFront() {
         return !this.$v.formFMCNext.front.required && this.$v.formFMCNext.front.$dirty
      },
      validApartment() {
         return !this.$v.formFMCNext.apartment.required && this.$v.formFMCNext.apartment.$dirty
      }
   },

   validations: {
      formFMC: {
         city: {required, minLength: minLength( 3 )},
         house: {required},
      },
      formFMCNext: {
         front: {required},
         apartment: {required},
      }
   },

   methods: {
      ...mapMutations( [
         'BTN_FORM_DISABLED_FMC',
         'GO_TO_PAGE_FMC'
      ] ),
      submitFormFMC() {
         if (this.$v.formFMC.$invalid) {
            this.$v.formFMC.$touch()
         } else {
            this.$store.commit( 'SUBMIT_FORM_FMC' )
            this.$v.$reset()
         }
      },
      submitFormFMCNext() {
         if (this.$v.formFMCNext.$invalid || this.$v.formFMC.$invalid) {
            this.$v.formFMCNext.$touch()
            this.$v.formFMC.$touch()
         } else {
            this.$store.commit( 'SHOW_CLIENTS_FMC' )
            this.$v.$reset()
         }
      }

   }
}
</script>

<style lang="scss">
</style>