<template>
   <div class="content change-password">
      <div class="wrapper">
         <div class="wrapper__block">
            <b-breadcrumb :items="breadcrumb"></b-breadcrumb>
            <p class="big-green-title">Смена пароля</p>

            <p class="change-password__text">
               Длина пароля — не менее {{ minLenght }} символов (13 для администраторов). Пароль должен содержать латинские буквы и
               цифры в разном регистре.
            </p>

            <form @submit.prevent="submit">
               <div class="change-password__password">
                  <label>Старый пароль</label>
                  <div class="input-old-password">
                     <input :type="inputTypeOld"
                            v-model="inputOldPass"
                     />
                     <div @click="changeType('inputFlagOld', 'inputTypeOld')"
                          :class="inputFlagOld ? 'show-password' : 'hide-password'"/>
                  </div>

               </div>

               <div class="change-password__password">
                  <label>Новый пароль</label>
                  <div class="input-new-password">

                     <input :type="inputTypeNew"
                            v-model="inputNewPass"
                     />
                     <div @click="changeType('inputFlagNew', 'inputTypeNew')"
                          :class="inputFlagNew ? 'show-password' : 'hide-password'"/>
                  </div>

               </div>

               <div class="change-password__password">
                  <label class="empty"/>
                  <button type="submit"
                          class="btn"
                          :disabled="$v.$invalid">
                     Сменить пароль
                  </button>
               </div>

            </form>
         </div>
      </div>
   </div>
</template>

<script>
import {minLength, required} from "vuelidate/lib/validators";

export default {
   name: "changePassword",

   data() {
      return {
         inputTypeOld: 'text',
         inputTypeNew: 'password',
         inputFlagOld: true,
         inputFlagNew: false,
         inputNewPass: '',
         inputOldPass: '',
         breadcrumb: [
            {
               text: 'Главная страница',
               to: {name: 'home'}
            }, {
               text: 'Смена пароля',
               active: true
            }
         ],
      }
   },

   computed: {
      minLenght() {
         return this.$v.inputNewPass.$params.minLength.min
      }
   },

   validations: {
      inputOldPass: {required},
      inputNewPass: {minLength: minLength( 8 ), required},
   },

   methods: {
      changeType(flag, type) {
         this[flag] = !this[flag]
         this[flag] ? this[type] = 'text' : this[type] = 'password'
      },
      submit() {}

   }
}
</script>

<style lang="scss" scoped>
.change-password {
   padding: 18px 0 37px;

   .big-green-title {
      margin-bottom: 43px;
   }

   .change-password__text {
      line-height: 20px;
      margin-bottom: 15px;
   }

   .change-password__password {
      margin-bottom: 24px;

      &:last-child {
         margin-bottom: 0;
      }

      label {
         max-width: 150px;
         width: 100%;
      }

      input {
         width: 100%;
         padding-right: 46px;
      }
   }

   .input-old-password,
   .input-new-password {
      position: relative;
      width: 290px;
      display: inline-block;
   }

   .hide-password,
   .show-password {
      position: absolute;
      right: 0;
      top: 0;
      width: 40px;
      height: 40px;
      margin-right: 6px;
      background: url('../../assets/svg/Hide_24.svg') center / 24px no-repeat;
      cursor: pointer;
   }

   .show-password {
      background: url('../../assets/svg/Show_24.svg') center / 24px no-repeat;
   }

   button {
      margin-top: 6px;
   }

   @media (max-width: 767px) {
      padding: 0 0 65px;

      .wrapper {
         padding: 0;
      }

      .wrapper__block {
         padding: 23px 15px 35px;
      }

      label {
         margin-bottom: 10px;
      }

      .empty {
         display: none;
      }
   }

}
</style>