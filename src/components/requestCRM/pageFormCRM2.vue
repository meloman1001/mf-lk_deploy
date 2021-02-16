<template>
   <div class="request__data-clients">

      <div class="tab-pane__title">
         2/4. Данные клиента
      </div>

      <form @submit.prevent="submitClientData">

         <div class="tab-pane__input">
            <label class="star">Фамилия</label>
            <input type="text"
                   :disabled="disabledInput"
                   v-model.trim="formCRM2.family"
                   :class="{ invalid: validFamily }"
            >

         </div>

         <div class="tab-pane__input">
            <label class="star">Имя</label>
            <input type="text"
                   :disabled="disabledInput"
                   v-model.trim="formCRM2.name"
                   :class="{ invalid: validName }"
            >
         </div>

         <div class="tab-pane__input">
            <label>Отчество</label>
            <input type="text"
                   :disabled="disabledInput"
            >
         </div>

         <div class="tab-pane__input mob-phone">
            <label class="star">Мобильный <br> телефон</label>
            <input type="tel"
                   :disabled="disabledInput"
                   v-mask="'+7 ### ###-##-##'"
                   v-model.trim="formCRM2.mobPhone"
                   :class="{ invalid: validMobPhone }"
            >
         </div>

         <div class="tab-pane__input">
            <label>Домашний <br> телефон</label>
            <input type="tel"
                   :disabled="disabledInput"
                   v-mask="'##########'"
            >
         </div>

         <div class="tab-pane__input">
            <label>E-mail</label>
            <input type="text"
                   :disabled="disabledInput"
            >
         </div>

         <div class="tab-pane__input">
            <label>UTM-метка</label>
            <input type="text"
                   :disabled="disabledInput"
            >
         </div>

         <div class="tab-pane__input">
            <label>Номер для SMS <br> информирования</label>
            <input type="text"
                   v-mask="'+7 ### ###-##-##'"
                   :disabled="disabledInput"
            >
         </div>

         <div class="tab-pane__input">
            <label>Комментарий <br> к заявке</label>
            <input type="text"
                   :disabled="disabledInput"
            >
         </div>

         <div class="tab-pane__btns">
            <div @click="GO_TO_PAGE_CRM(['pageFormCRM2', 'pageFormCRM'])"
                 class="btn back">Назад
            </div>

            <button v-if="!disabledInput" class="btn" type="submit">Подтвердить</button>
            <div v-else
                 class="btn"
                 type="submit"
                 @click="BTN_FORM2_DISABLED"
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
   name: "pageFormCRM2",

   computed: {
      ...mapGetters( [
         'disabledInput',
         'formCRM2'
      ] ),
      validFamily() {
         return !this.$v.formCRM2.family.required && this.$v.formCRM2.family.$dirty
      },
      validName() {
         return !this.$v.formCRM2.name.required && this.$v.formCRM2.name.$dirty
      },
      validMobPhone() {
         return (!this.$v.formCRM2.mobPhone.required || !this.$v.formCRM2.mobPhone.minLength )
            && this.$v.formCRM2.mobPhone.$dirty
      }
   },

   validations: {
      formCRM2: {
         family: {required},
         name: {required},
         mobPhone: {required, minLength: minLength( 16 )},
      },
   },

   methods: {
      ...mapMutations([
         'GO_TO_PAGE_CRM',
         'BTN_FORM2_DISABLED'
      ]),
      submitClientData() {
         if (this.$v.formCRM2.$invalid) {
            this.$v.formCRM2.$touch()
         } else {
            this.$store.commit( 'BACK' )
            this.$store.commit( 'GO_TO_PAGE_CRM', ['pageFormCRM2', 'pageFormCRM3'] )
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