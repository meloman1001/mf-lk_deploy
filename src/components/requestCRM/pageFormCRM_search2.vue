<template>
   <div class="request__data-clients">

      <div class="tab-pane__title">
         2/4. Данные клиента
      </div>

      <form @submit.prevent="submitClientData">

         <div class="tab-pane__input">
            <label>Фамилия</label>
            <input type="text" disabled :value="searchLName">
         </div>

         <div class="tab-pane__input">
            <label>Имя</label>
            <input type="text" disabled :value="searchName">
         </div>

         <div class="tab-pane__input">
            <label>Отчество</label>
            <input type="text" disabled :value="searchPatronymic">
         </div>

         <div class="tab-pane__input mob-phone">
            <label>Мобильный <br> телефон</label>
            <input type="tel" disabled v-mask="'+7 ### ###-##-##'" :value="searchPhone">
         </div>

         <div class="tab-pane__input">
            <label>Адрес</label>
            <input type="text" disabled>
         </div>

         <div class="tab-pane__input">
            <label>Частный сектор</label>
            <div class="input-radio">

               <input type="radio"
                      v-model="sector"
                      name="activation"
                      id="activation-no"
                      value="no"
               >
               <label for="activation-no">Нет
                  <label></label>
               </label>
            </div>
            <div class="input-radio">

               <input type="radio"
                      v-model="sector"
                      name="activation"
                      id="activation-yes"
                      value="yes"
               >
               <label for="activation-yes">Да
                  <label></label>
               </label>
            </div>

            <b-form-select v-model="sector" :options="selectSector"/>
         </div>

         <div class="tab-pane__input">
            <label>Услуги</label>
            <div class="tab-pane__input-services">
               <p>Интернет: <span>Безлимитный ФЛ 60 Мбит/с</span></p>
               <p>Телевидение: <span>Wifire TV 20+</span></p>
            </div>
         </div>

         <div class="tab-pane__input">
            <label>Номер для SMS информирования</label>
            <input type="text">
         </div>

         <div class="tab-pane__input">
            <label>Комментарий к заявке</label>
            <input type="text">
         </div>

         <div class="tab-pane__btns">
            <div @click="GO_TO_PAGE_CRM(['pageFormCRM_search2', 'pageFormCRM'])"
                 class="btn back">Назад
            </div>

            <button class="btn" type="submit">Подтвердить</button>
         </div>
      </form>
   </div>
</template>

<script>
import {required, minLength} from "vuelidate/lib/validators";
import {mapGetters, mapMutations} from "vuex";

export default {
   name: "pageFormCRM2_search2",
   data() {
      return {
         sector: 'no',
         selectSector: [
            {value: 'yes', text: 'да'},
            {value: 'no', text: 'нет'},
         ]
      }
   },

   computed: {
      ...mapGetters( [
         'disabledInput',
         'formCRM2',
         'searchLName',
         'searchName',
         'searchPatronymic',
         'searchPhone',
      ] )
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
         'GO_TO_PAGE_CRM'
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

select {
   display: none;
}

.tab-pane__input-services {
   line-height: 20px;

   span {
      font-weight: 500;
   }
}

@media (max-width: 767px) {

   .input-radio {
      display: none;
   }

   select {
      display: block;
   }

   .tab-pane__input label {
      width: 100% !important;

      br {
         display: none;
      }
   }
}

</style>