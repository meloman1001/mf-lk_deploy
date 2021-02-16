<template>
   <div class="login">
      <div class="login__window">
         <div class="login__logo">
            <img src="../assets/svg/logo.svg" width="100%" alt="img">
         </div>
         <form @submit.prevent="submit">
            <label>

               <span>Логин</span>

               <input type="text" v-model.trim="form.login"
                      :class="{ invalid: validLogin }"
               />
            </label>

            <label class="login__password">

               <span>Пароль</span>

               <input :type="inputType"
                      v-model.trim="form.password"
                      :class="{ invalid: validPassword }"
               />
               <div @click="changeType('inputFlag', 'inputType')"
                    :class="inputFlag ? 'show-password' : 'hide-password'"
               />
            </label>

            <button class="btn">Войти</button>

         </form>

         <div class="login__forget">
            <span>Не помню пароль</span>
         </div>
      </div>
      <div class="login__copyright">
         <span>© 2021 ПАО «МегаФон»</span>
      </div>
   </div>

</template>

<script>
import {required} from "vuelidate/lib/validators";

export default {
   name: "Login",
   validations: {
      form: {
         password: {required},
         login: {required},
      }
   },
   data() {
      return {
         inputType: 'password',
         inputFlag: false,
         login: false,
         form: {
            password: '',
            login: '',
         }
      }
   },
   computed: {
      validLogin() {
         return !this.$v.form.login.required && this.$v.form.login.$dirty
      },
      validPassword() {
         return !this.$v.form.password.required && this.$v.form.password.$dirty
      }
   },
   methods: {
      changeType(flag, type) {
         this[flag] = !this[flag]
         this[flag] ? this[type] = 'text' : this[type] = 'password'
      },
      submit() {
         if (this.$v.form.$invalid) {
            this.$v.form.$touch()
         } else {
            this.$emit('submit')
            this.$v.$reset()
         }
      }
   }
}
</script>

<style lang="scss" scoped>
.login {
   min-height: 100vh;
   background: url('../assets/svg/superznak.svg') center / 100% no-repeat;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;

   .login__window {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 43px 72px 66px;
      max-width: 384px;
      background-color: #fff;

      label, input, .btn {
         width: 100%;
      }

      label {
         font-weight: 500;
         margin-bottom: 19px;

         &:last-child {
            margin-bottom: 0;
         }

         input {
            height: 48px;
            margin-top: 10px;
         }
      }
   }

   .login__logo {
      width: 125px;
      margin-bottom: 42px;
   }

   .login__password {
      position: relative;

      input {
         padding-right: 48px;
      }
   }

   .hide-password,
   .show-password {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 48px;
      height: 48px;
      background: url('../assets/svg/Hide_24.svg') center / 24px no-repeat;
      cursor: pointer;
   }

   .show-password {
      background: url('../assets/svg/Show_24.svg') center / 24px no-repeat;
   }

   .btn {
      height: 48px;
      justify-content: center;
      margin-top: 5px;
      margin-bottom: 39px;
   }

   .login__forget {
      color: var(--text-blue);
      cursor: pointer;

      &:hover {
         text-decoration: underline;
      }
   }

   .login__copyright {
      position: absolute;
      bottom: 23px;
      color: var(--text-gray);
   }

   @media (max-width: 767px) {
      background: #fff;
      justify-content: flex-start;

      .login__copyright {
         position: relative;
         width: 100%;
         bottom: 0;
         flex-grow: 1;
         background-color: #EDEDED;
         text-align: center;
         padding-top: 65px;
      }
   }

}
</style>