<template>
   <div>
      <div class="content">

         <section class="lk-home applications">
            <div class="wrapper">
               <div class="option-title">
                  <span class="big-green-title">{{ requests.title }}</span>
               </div>
               <div class="options">
                  <router-link v-for="option of requests.options"
                               :key="option.id"
                               :to="{name: option.link}"
                               class="options__block"
                  >
                     <div class="options__name" v-html="option.name"></div>
                     <div class="options__round_hover"></div>
                     <div class="options__round"></div>
                  </router-link>
               </div>
            </div>
         </section>

         <section v-for="block of homeBlock2"
                  :key="block.id"
                  class="lk-home"
         >
            <div class="wrapper">
               <div class="option-title">
                  <span class="big-green-title" v-html="block.title"></span>
               </div>
               <div class="options">
                  <router-link v-for="option of block.options"
                               :key="option.id"
                               :to="{name: option.link}"
                               class="options__block options__block_small"
                  >
                     <div class="options__name" v-html="option.name"></div>
                     <div class="options__round"></div>
                     <div class="options__round_hover"></div>
                  </router-link>
               </div>
            </div>
         </section>

         <section class="lk-home">
            <div class="wrapper">
               <div class="option-title">
                  <span class="big-green-title" v-html="requestsCity.title"></span>
               </div>
               <div class="options">
                  <router-link v-for="option of requestsCity.options"
                               :key="option.id"
                               :to="{name: option.link}"
                               class="options__block">
                     <div class="options__name" v-html="option.name"></div>
                     <div class="options__round"></div>
                     <div class="options__round_hover"></div>
                  </router-link>
               </div>
            </div>
         </section>

      </div>
   </div>
</template>

<script>

export default {
   name: 'Home',
   components: {},
   data() {
      return {
         test: null,
         requests: {
            title: "Заявки Wifire и МегаФон",
            options: [
               {
                  name: "Заявка на подключение <br> CRM",
                  link: "requestCRM"
               }, {
                  name: "Заявка на подключение <br> FMC",
                  link: "requestFMC"
               }, {
                  name: "Просмотр заявок <br> на подключение CRM",
                  link: "viewingCRM"
               }, {
                  name: "Просмотр заявок <br> на подключение FMC",
                  link: "viewingFMC"
               }, {
                  name: "Загрузка <br> регистрационных анкет",
                  link: ""
               }, {
                  name: "Акт по заявкам <br> CRM & FMC",
                  link: "viewingAct"
               }
            ]
         },
         homeBlock2: [
            {
               title: "Создание и редактирова<br>ние пользова<br>телей",
               options: [
                  {name: "Добавить пользователя", link: ''},
                  {name: "Просмотр пользовате<br>лей", link: 'viewing_users'},
               ]
            }, {
               title: "Управление дилерами и тарифами",
               options: [
                  {name: "Добавить дилера", link: ''},
                  {name: "Просмотр дилеров", link: 'viewing_dealers'},
                  {name: "Скрытые тарифы", link: 'tariffs'},
                  {name: "Скрытые пакеты", link: 'packages'},
                  {name: "Добавить скидку FMC", link: ''},
                  {name: "Просмотр скидки FMC", link: ''},
               ]
            }, {
               title: "100 Мбит/с <br> на весь год",
               options: [
                  {name: "Подключение", link: ''},
                  {name: "Просмотр", link: ''},
                  {name: "Отчет", link: ''},
               ]
            }, {
               title: "TV/Mobile аккаунты",
               options: [
                  {name: "Подключение", link: ''},
                  {name: "Просмотр", link: ''},
                  {name: "Отчет", link: ''},
               ]
            }
         ],
         requestsCity: {
            title: "Заявки <br> Псков",
            options: [
               {name: "Заявка на подключение <br> КИС", link: ''},
               {name: "Просмотр заявок <br> на подключение КИС", link: ''},
               {name: "Заявка на подключение <br> услуг существующим <br> абонентам КИС", link: ''},
               {name: "Просмотр Заявок на <br> подключение услуг <br> существующим абонентам КИС", link: ''},
               {name: "Акт по созданным <br> заявкам на <br> подключение", link: ''},
               {name: "Просмотр Заявок на <br> подключение услуг <br> существующим <br> абонентам КИС", link: ''},
               {name: "Акт по заявкам на <br> подключение услуг <br> существующим <br> абонентам КИС", link: ''},
            ]
         }
      }
   },
   // mounted() {
   //    this.axios( {
   //       url: 'https://api.wifire.ru/api/address/check_address_dadata',
   //       method: 'POST',
   //       data: 'г Санкт-Петербург, пр-кт Науки, д 6/1',
   //    } )
   //       .then( response => console.log( response ) )
   // }
}
</script>


<style lang="scss">
.lk-home {
   margin-bottom: 60px;

   &:last-child {
      margin-bottom: -20px;
   }

   .wrapper {
      display: flex;
   }

   .option-title {
      flex-shrink: 0;
      width: 280px;
      margin-right: 60px;
   }

   .options {
      display: flex;
      flex-wrap: wrap;
      max-width: 800px;
   }

   .options__block {
      padding: 20px;
      margin: 0 20px 20px 0;
      height: 167px;
      width: 354px;
      font-size: 19px;
      font-weight: 500;
      line-height: 25px;
      position: relative;
      overflow: hidden;
      background: #fff;
      transition: .3s;
      color: #333;

      &:hover {
         box-shadow: 0 0 16px rgb(0 0 0 / 15%);

         .options__round {
            border-color: #fff;
            z-index: 1;

            &_hover {
               transform: scale(3);
               opacity: 1;
            }
         }
      }
   }

   .options__name {
      position: relative;
      z-index: 1;
   }

   .options__block_small {
      width: 167px;
      height: 167px;
   }

   &.applications .options__block:last-child {
      width: 177px;
   }

   .options__round {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      border: 2px solid var(--mf-green);
      position: absolute;
      bottom: 20px;
      right: 20px;
      transition: .3s;

      &_hover {
         content: '';
         height: 34px;
         width: 34px;
         border-radius: 50%;
         background-color: var(--mf-green);
         transition: .3s;
         position: absolute;
         bottom: 20px;
         right: 20px;
         transform: scale(0);
         opacity: 0;
      }
   }

   @media (max-width: 767px) {
      margin: 0 0 35px;

      .wrapper {
         flex-wrap: wrap;
         padding: 0;
      }

      br {
         display: none;
      }

      .option-title {
         padding-left: 15px;
         margin-bottom: 30px;
      }

      .options,
      &.applications .options__block:last-child {
         width: 100%;
      }

      .options__block {
         width: 100%;
         height: 70px;
         border-bottom: 1px solid #ccc;
         padding: 0 40px 0 70px;
         display: flex;
         align-items: center;
         font-size: 14px;
         line-height: 20px;
         margin: 0;
         background: #fff url('../assets/svg/arrow_green_right.svg') calc(100% - 20px) 50% / 7px no-repeat;

         &:last-child {
            border-bottom: 0;
         }

         &:hover {
            .options__round_hover {
               transform: scale(2.5);

            }
         }
      }

      .options__round {
         left: 20px;
         bottom: calc(50% - 15px);
         right: auto;
         height: 30px;
         width: 30px;

         &_hover {
            left: 18px;
            bottom: calc(50% - 17px);
            right: auto;
         }
      }
   }
}
</style>