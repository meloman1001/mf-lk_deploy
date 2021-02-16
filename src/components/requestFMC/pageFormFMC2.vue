<template>
   <div class="request__data-clients">

      <div class="tab-pane__title">
         2/4. Данные клиента
      </div>

      <form @submit.prevent="submitClientData">

         <div class="tab-pane__input">
            <label class="star" for="family">Фамилия</label>
            <input id="family"
                   type="text"
                   :disabled="formDisabledFMC2"
                   v-model.trim="formFMC2.family"
                   :class="{ invalid: validFamily }"
            >
         </div>

         <div class="tab-pane__input">
            <label class="star" for="name">Имя</label>
            <input id="name"
                   type="text"
                   :disabled="formDisabledFMC2"
                   v-model.trim="formFMC2.name"
                   :class="{ invalid: validName }"
            >
         </div>

         <div class="tab-pane__input">
            <label for="patronym">Отчество</label>
            <input id="patronym"
                   type="text"
                   :disabled="formDisabledFMC2"
            >
         </div>

         <div class="tab-pane__input mob-phone">
            <label class="star" for="mob-phone">Мобильный <br> телефон</label>
            <input id="mob-phone"
                   type="tel"
                   :disabled="formDisabledFMC2"
                   v-mask="'+7 ### ###-##-##'"
                   v-model.trim="formFMC2.mobPhone"
                   :class="{ invalid: validMobPhone }"
            >
         </div>

         <div class="tab-pane__input">
            <label for="phone">Домашний <br> телефон</label>
            <input id="phone"
                   type="tel"
                   :disabled="formDisabledFMC2"
                   v-mask="'##########'"
            >
         </div>

         <div class="tab-pane__input">
            <label for="mail">E-mail</label>
            <input id="mail"
                   type="text"
                   :disabled="formDisabledFMC2"
            >
         </div>

         <div class="tab-pane__input">
            <label for="UTM">UTM-метка</label>
            <input id="UTM"
                   type="text"
                   :disabled="formDisabledFMC2"
            >
         </div>

         <div class="tab-pane__input">
            <label for="sms">Номер для SMS <br> информирования</label>
            <input id="sms"
                   type="text"
                   v-mask="'+7 ### ###-##-##'"
                   :disabled="formDisabledFMC2"
            >
         </div>

         <div class="tab-pane__input">
            <label for="comment">Комментарий <br> к заявке</label>
            <input id="comment"
                   type="text"
                   :disabled="formDisabledFMC2"
            >
         </div>

         <div class="tab-pane__btns">
            <div @click="GO_TO_PAGE_FMC(['pageFormFMC2', 'pageFormFMC'])"
                 class="btn back">Назад
            </div>

            <button v-if="!formDisabledFMC2" class="btn">Подтвердить</button>
            <div v-else
                 class="btn"
                 type="submit"
                 @click="DISABLED_FORM_FMC2"
            >Изменить
            </div>
         </div>

      </form>
   </div>
</template>

<script>
import {required, minLength} from "vuelidate/lib/validators";
import {mapGetters, mapMutations} from "vuex";

export default {
   name: "pageFormFMC2",

   computed: {
      ...mapGetters( [
         'formDisabledFMC2',
         'formFMC2',
      ] ),
      validFamily() {
         return !this.$v.formFMC2.family.required && this.$v.formFMC2.family.$dirty
      },
      validName() {
         return !this.$v.formFMC2.name.required && this.$v.formFMC2.name.$dirty
      },
      validMobPhone() {
         return (!this.$v.formFMC2.mobPhone.required || !this.$v.formFMC2.mobPhone.minLength )
            && this.$v.formFMC2.mobPhone.$dirty
      }
   },

   validations: {
      formFMC2: {
         family: {required},
         name: {required},
         mobPhone: {required, minLength: minLength( 16 )},
      },
   },

   methods: {
      ...mapMutations([
         'GO_TO_PAGE_FMC',
         'DISABLED_FORM_FMC2'
      ]),
      submitClientData() {
         if (this.$v.formFMC2.$invalid) {
            this.$v.formFMC2.$touch()
         } else {
            this.DISABLED_FORM_FMC2()
            this.GO_TO_PAGE_FMC(['pageFormFMC2', 'pageFormFMC3'] )
            this.$v.$reset()
         }

      },

   }
}
</script>


<style lang="scss" scoped>
.tab-pane__btns {
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: space-between;
}

@media (max-width: 767px) {
   .tab-pane__input label {
      width: 100% !important;

      br {
         display: none;
      }
   }
}

</style>