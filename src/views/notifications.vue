<template>
   <div class="content notifications">
      <div class="wrapper">
         <div class="wrapper__block">
            <b-breadcrumb :items="breadcrumb"></b-breadcrumb>
            <p class="big-green-title">Уведомления</p>
            <b-tabs>
               <b-tab title="Последние события" active>
                  <ul class="notifications__block">
                     <li>У вашей заявки
                        <router-link :to="{name: ''}">Req2233445</router-link>
                        от 07.08.2020 отменен слот по причине «Перенос по вине ОЭ/РБ/МБ»
                     </li>
                     <li>У вашей заявки
                        <router-link :to="{name: ''}">Req2233444</router-link>
                        от 06.08.2020 отменен слот по причине «Автоматическое планирование»
                     </li>
                     <li>У вашей заявки
                        <router-link :to="{name: ''}">Req2233444</router-link>
                        от 05.08.2020 отменен слот по причине «Перенос по форс-мажорным обстоятельствам»
                     </li>
                  </ul>
               </b-tab>

               <b-tab title="История просмотров">
                  <ul class="notifications__block">
                     <li>Заявки
                        <router-link :to="{name: ''}">Req2233445</router-link>
                        от 15.09.2020 создана
                     </li>
                     <li>Заявки
                        <router-link :to="{name: ''}">Req2233444</router-link>
                       от 15.09.2020 просмотрена
                     </li>

                  </ul>
               </b-tab>
            </b-tabs>


         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "notifications",

   data() {
      return {
         breadcrumb: [
            {
               text: 'Главная страница',
               to: {name: 'home'}
            }, {
               text: 'Уведомления',
               active: true
            }
         ],
      }
   },
}
</script>

<style lang="scss">
.notifications {
   padding: 18px 0 37px;

   .tab-content {
      padding-top: 55px;
   }

   .big-green-title {
      margin-bottom: 50px;
   }

   .notifications__block {
      margin-bottom: 0;

      li {
         position: relative;
         margin-bottom: 30px;
         line-height: 20px;
         padding-left: 20px;

         &:last-child {
            margin-bottom: 0;
         }
      }

      li:before {
         content: '— ';
         position: absolute;
         left: 0;
      }

      a {
         color: var(--text-blue);
      }
   }

   @media (max-width: 767px) {
      padding: 0 0 65px;

      .tab-content {
         padding-top: 30px;
      }

      .big-green-title {
         margin-bottom: 25px;
      }

      .wrapper {
         padding: 0;
      }

      .wrapper__block {
         padding: 23px 15px 35px;
      }
   }
}

</style>