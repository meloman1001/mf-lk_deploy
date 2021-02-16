<template>
   <div>
      <form @submit.prevent="submitAddress">
         <div class="tab-pane__title">
            1/4. Адресные данные клиента
         </div>
         <div class="tab-pane__input">
            <label class="star" for="city">Город</label>
            <input id="city"
                   type="text"
                   :disabled="formDisabled"
                   v-model.trim="formCRM.city"
                   :class="{ invalid: validCity}"
            >
         </div>
         <div class="tab-pane__input">
            <label for="street">Улица</label>
            <input id="street"
                   type="text"
                   :disabled="formDisabled"
            >
         </div>
         <div class="tab-pane__input">
            <label class="star" for="house">Дом</label>
            <input id="house"
                   type="text"
                   :disabled="formDisabled"
                   v-model.trim="formCRM.house"
                   :class="{ invalid: validHouse }"
            >
         </div>
         <div v-if="!addressData" class="tab-pane__input">
            <label></label>
            <button class="btn">Подтвердить</button>
         </div>
         <div v-if="addressData" class="tab-pane__input checked">
            <label></label>
            <div>Дом подключен</div>
         </div>
      </form>

         <form v-if="addressData"
               @submit.prevent="submitAddress2"
               :class="{disabled: formDisabled}"
         >
            <div class="tab-pane__input">
               <label class="star" for="front">Подъезд</label>
               <input id="front"
                      type="text"
                      :disabled="formDisabled"
                      v-model.trim="formCRMNext.front"
                      :class="{ invalid: validFront }"
               >
            </div>
            <div class="tab-pane__input">
               <label for="level">Этаж</label>
               <input id="level"
                      type="text"
                      :disabled="formDisabled"
               >
            </div>
            <div class="tab-pane__input">
               <label class="star" for="apartment">Квартира</label>
               <input id="apartment"
                      type="text"
                      :disabled="formDisabled"
                      v-model.trim="formCRMNext.apartment"
                      :class="{ invalid: validApartment }"
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

            <div  class="tab-pane__input">
               <label></label>
               <button v-if="!formDisabled" type="submit" class="btn">Подтвердить</button>
               <div v-else class="btn" @click="BTN_FORM_DISABLED">Изменить</div>
            </div>

         </form>

         <div v-if="formDisabled" class="request__clients">

            <div class="tab-pane__title">Клиенты</div>
            <p v-if="false">По данному адресу ранее подключений не было.</p>

            <ClientsTableCRM v-else />

            <div @click="GO_TO_PAGE_CRM(['pageFormCRM', 'pageFormCRM2'])"
                 class="btn">Заявка новому
            </div>
         </div>
   </div>
</template>

<script>
import {required, minLength} from 'vuelidate/lib/validators'
import {mapGetters, mapMutations} from "vuex";
import ClientsTableCRM from "@/components/requestCRM/ClientsTableCRM";

export default {
   name: "pageFormCRM",
   components: {
      ClientsTableCRM
   },
   data() {
      return {
         breadcrumb: [
            {
               text: 'Главная страница',
               to: {name: 'home'}
            },
            {
               text: 'Заявка на подключение CRM',
               active: true
            }
         ],
      }
   },

   computed: {
      ...mapGetters([
         'formCRM',
         'formCRMNext',
         'addressData',
         'formDisabled',
      ]),
      validCity() {
         return (!this.$v.formCRM.city.required || !this.$v.formCRM.city.minLength ) && this.$v.formCRM.city.$dirty
      },
      validHouse() {
         return !this.$v.formCRM.house.required && this.$v.formCRM.house.$dirty
      },
      validFront() {
         return !this.$v.formCRMNext.front.required && this.$v.formCRMNext.front.$dirty
      },
      validApartment() {
         return !this.$v.formCRMNext.apartment.required && this.$v.formCRMNext.apartment.$dirty
      }
   },

   validations: {
      formCRM: {
         city: {required, minLength: minLength( 3 )},
         house: {required},
      },
      formCRMNext: {
         front: {required},
         apartment: {required},
      }
   },

   methods: {
      ...mapMutations([
         'BTN_FORM_DISABLED',
         'GO_TO_PAGE_CRM',
      ]),
      submitAddress() {
         if (this.$v.formCRM.$invalid) {
            this.$v.formCRM.$touch()
         } else {
            this.$store.commit('SUBMIT')
            this.$v.$reset()
         }

      },
      submitAddress2() {
         if (this.$v.formCRMNext.$invalid || this.$v.formCRM.$invalid) {
            this.$v.formCRMNext.$touch()
            this.$v.formCRM.$touch()
         } else {
            this.$store.commit('SHOW_CLIENTS')
            this.$v.$reset()
         }
      },
   }
}
</script>

<style lang="scss" scoped>

@media (max-width: 767px) {
   .request__clients .tab-pane__title {
      margin-bottom: 20px;
   }
}

</style>