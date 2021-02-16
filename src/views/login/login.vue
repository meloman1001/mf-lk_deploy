<template>
   <div class="content login">
      <div class="wrapper">
         <div class="wrapper__block">
            <b-breadcrumb :items="breadcrumb"></b-breadcrumb>
            <p class="big-green-title">Личные данные</p>

            <div class="login__data">

               <div class="data__table-row">
                  <div class="data__table-title">Ваша учетная запись</div>
                  <div class="data__table-data">Ivanov.Ivan</div>
               </div>

               <div class="data__table-row">
                  <div class="data__table-title">Ваш Дилер</div>
                  <div class="data__table-data">Дилер</div>
               </div>

               <div class="data__table-row">
                  <div class="data__table-title">Права пользователя</div>
                  <div class="data__table-data">Администратор</div>
               </div>

            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "login",
   data() {
      return {
         breadcrumb: [
            {
               text: 'Главная страница',
               to: {name: 'home'}
            },
            {
               text: 'Личные данные',
               active: true
            }
         ],
      }
   }
}
</script>

<style lang="scss" scoped>
.login {
   padding: 18px 0 37px;

   .login__data {
      padding-top: 13px;
   }

   .data__table-row {
      display: flex;
      line-height: 20px;
      margin-bottom: 27px;

      &:last-child {
         margin-bottom: 0;
      }
   }

   .data__table-title {
      max-width: 182px;
      width: 100%;
   }

   @media (max-width: 767px) {
      padding: 0 0 65px;

      .wrapper {
         padding: 0;
      }

      .wrapper__block {
         padding: 23px 15px 35px;
      }

      .login__data {
         padding-top: 0;
      }

      .data__table-title {
         max-width: 150px;
         padding-right: 20px;
      }
   }
}

</style>