<template>
   <div class="viewingCRM__requests">
      <div @scroll="handleScroll" class="tab-pane__title">
         <span>Заявки</span>
         <span v-if="collapseAll" class="collapse-all-request"
               @click="isCollapseAll">
            Свернуть все заявки
         </span>
         <span v-else class="collapse-all-request"
               @click="isCollapseAll">
            Развернуть все заявки
         </span>
      </div>

      <div id="tableTariff" class="table-tariff">
         <div class="btn-params-wrapp">
            <div @click="scrollTop"
                 :class="{'show': btnParams}"
                 class="btn btn-params">
            </div>
         </div>

         <div class="pc">
            <div class="table-tariff__header">
               <p>Дата создания</p>
               <p>Номер</p>
               <p>Статус</p>
               <p>Город</p>
               <p>Создал</p>
               <p>Глобальный статус</p>
            </div>
            <div v-for="(request, index) of dataRequest"
                 :key="index"
                 class="table-tariff__body"
            >
               <div class="table-tariff__body-head"
                    v-b-toggle:v-bind="'collapse-request-' + index"
               >
                  <p>{{ request.date }}</p>
                  <p>{{ request.number }}</p>
                  <p>{{ request.status }}</p>
                  <p>{{ request.city }}</p>
                  <p>{{ request.created }}</p>
                  <p>{{ request.gStatus }}</p>
                  <div class="table-tariff__arrow"></div>
               </div>

               <b-collapse :id="'collapse-request-' + index"
                           v-model="request.collapse"
               >
                  <div class="table-tariff__body-desc">
                     <div class="table-tariff__row">
                        <p>Мобильный телефон</p>
                        <p>{{ request.phone }}</p>
                     </div>

                     <div class="table-tariff__row">
                        <p>Дата подключения</p>
                        <p><span class="text-date">
                     {{ request.dateConnection }}
                  </span></p>
                     </div>

                     <div class="table-tariff__row">
                        <p>Дата закрытия</p>
                        <p>01.12.2020</p>
                     </div>

                     <router-link :to="{name: 'viewingCRM_more'}" class="btn">Подробнее</router-link>
                  </div>
               </b-collapse>
            </div>

         </div>

         <div class="mobile">

            <div class="table-tariff__header">
               <div>Дата создания</div>
               <div>Номер</div>
            </div>

            <div v-for="(request, index) of dataRequest"
                 :key="index" class="table-tariff__body">
               <div class="table-tariff__body-head"
                    v-b-toggle:v-bind="'collapse-request-' + index" >
                  <div>{{ request.date }}</div>
                  <div>{{ request.number }}</div>
                  <div class="table-tariff__arrow"></div>
               </div>

               <b-collapse :id="'collapse-request-' + index"
                           v-model="request.collapse">
                  <div class="table-tariff__body-desc">

                     <div>
                        <div class="table-tariff__row">
                           <p>Статус</p>
                           <p>{{ request.status }}</p>
                        </div>

                        <div class="table-tariff__row">
                           <p>Город</p>
                           <p>{{ request.city }}</p>
                        </div>

                        <div class="table-tariff__row">
                           <p>Создал</p>
                           <p>{{ request.created }}</p>
                        </div>

                        <div class="table-tariff__row">
                           <p>Глобальный статус</p>
                           <p>{{ request.gStatus }}</p>
                        </div>

                        <div class="table-tariff__row">
                           <p>Мобильный телефон</p>
                           <p>{{ request.phone }}</p>
                        </div>

                        <div class="table-tariff__row">
                           <p>Дата подключения</p>
                           <p>{{ request.dateConnection }}</p>
                        </div>

                        <div class="table-tariff__row">
                           <p>Дата закрытия</p>
                           <p>01.12.2020</p>
                        </div>

                        <router-link :to="{name: 'viewingCRM_more'}" class="btn">Подробнее</router-link>
                     </div>

                  </div>
               </b-collapse>
            </div>

         </div>

      </div>
   </div>

</template>

<script>
export default {
   name: "RequestsCRM",
   data() {
      return {
         btnParams: false,
         collapseAll: true,
         dataRequest: [
            {
               date: '25.11.2020 13:45',
               number: 'Req2222222',
               status: 'Выполнение подключения',
               city: 'Москва',
               created: 'Ivanov.Ivan',
               gStatus: 'Активный',
               phone: '+79999999999',
               dateConnection: '01.12.2020 с 13:00 до 14:00',
               collapse: true
            }, {
               date: '25.11.2020 13:45',
               number: 'Req2222222',
               status: 'Выполнение подключения',
               city: 'Москва',
               created: 'Ivanov.Ivan',
               gStatus: 'Активный',
               phone: '+79999999999',
               dateConnection: '01.12.2020 с 13:00 до 14:00',
               collapse: true
            }, {
               date: '25.11.2020 13:45',
               number: 'Req2222222',
               status: 'Выполнение подключения',
               city: 'Москва',
               created: 'Ivanov.Ivan',
               gStatus: 'Активный',
               phone: '+79999999999',
               dateConnection: '01.12.2020 с 13:00 до 14:00',
               collapse: true
            }, {
               date: '25.11.2020 13:45',
               number: 'Req2222222',
               status: 'Выполнение подключения',
               city: 'Москва',
               created: 'Ivanov.Ivan',
               gStatus: 'Активный',
               phone: '+79999999999',
               dateConnection: '01.12.2020 с 13:00 до 14:00',
               collapse: true
            }, {
               date: '25.11.2020 13:45',
               number: 'Req2222222',
               status: 'Выполнение подключения',
               city: 'Москва',
               created: 'Ivanov.Ivan',
               gStatus: 'Активный',
               phone: '+79999999999',
               dateConnection: '01.12.2020 с 13:00 до 14:00',
               collapse: true
            }, {
               date: '25.11.2020 13:45',
               number: 'Req2222222',
               status: 'Выполнение подключения',
               city: 'Москва',
               created: 'Ivanov.Ivan',
               gStatus: 'Активный',
               phone: '+79999999999',
               dateConnection: '01.12.2020 с 13:00 до 14:00',
               collapse: true
            }, {
               date: '25.11.2020 13:45',
               number: 'Req2222222',
               status: 'Выполнение подключения',
               city: 'Москва',
               created: 'Ivanov.Ivan',
               gStatus: 'Активный',
               phone: '+79999999999',
               dateConnection: '01.12.2020 с 13:00 до 14:00',
               collapse: true
            }, {
               date: '25.11.2020 13:45',
               number: 'Req2222222',
               status: 'Выполнение подключения',
               city: 'Москва',
               created: 'Ivanov.Ivan',
               gStatus: 'Активный',
               phone: '+79999999999',
               dateConnection: '01.12.2020 с 13:00 до 14:00',
               collapse: true
            }, {
               date: '25.11.2020 13:45',
               number: 'Req2222222',
               status: 'Выполнение подключения',
               city: 'Москва',
               created: 'Ivanov.Ivan',
               gStatus: 'Активный',
               phone: '+79999999999',
               dateConnection: '01.12.2020 с 13:00 до 14:00',
               collapse: true
            }, {
               date: '25.11.2020 13:45',
               number: 'Req2222222',
               status: 'Выполнение подключения',
               city: 'Москва',
               created: 'Ivanov.Ivan',
               gStatus: 'Активный',
               phone: '+79999999999',
               dateConnection: '01.12.2020 с 13:00 до 14:00',
               collapse: true
            }, {
               date: '25.11.2020 13:45',
               number: 'Req2222222',
               status: 'Выполнение подключения',
               city: 'Москва',
               created: 'Ivanov.Ivan',
               gStatus: 'Активный',
               phone: '+79999999999',
               dateConnection: '01.12.2020 с 13:00 до 14:00',
               collapse: true
            }, {
               date: '25.11.2020 13:45',
               number: 'Req2222222',
               status: 'Выполнение подключения',
               city: 'Москва',
               created: 'Ivanov.Ivan',
               gStatus: 'Активный',
               phone: '+79999999999',
               dateConnection: '01.12.2020 с 13:00 до 14:00',
               collapse: true
            }, {
               date: '25.11.2020 13:45',
               number: 'Req2222222',
               status: 'Выполнение подключения',
               city: 'Москва',
               created: 'Ivanov.Ivan',
               gStatus: 'Активный',
               phone: '+79999999999',
               dateConnection: '01.12.2020 с 13:00 до 14:00',
               collapse: true
            },
         ]
      }
   },
   methods: {
      isCollapseAll() {
         this.collapseAll = !this.collapseAll
         if (this.collapseAll) {
            this.dataRequest.forEach( el => {
               el.collapse = true
            } )
         } else {
            this.dataRequest.forEach( el => {
               el.collapse = false
            } )
         }
      },
      scrollTop() {
         window.scrollTo( 0, 0 )
      },
      handleScroll() {
         document.getElementById( 'tableTariff' ).getBoundingClientRect().top < 0 ?
            this.btnParams = true : this.btnParams = false
      }
   },
   created() {
      window.addEventListener( 'scroll', this.handleScroll );
   }
   ,
   destroyed() {
      window.removeEventListener( 'scroll', this.handleScroll );
   }
   ,
}
</script>

<style lang="scss" scoped>
.btn-params-wrapp {
   max-width: 988px;
   width: 100%;
   position: fixed;
   z-index: 1;
   top: 70px;

   @media (max-width: 1098px) {
      left: 0;
      max-width: none;
   }
   @media (max-width: 767px) {
      top: 50px;
   }
}

.btn-params {
   width: 54px;
   height: 54px;
   padding: 0;
   border-radius: 50%;
   cursor: pointer;
   position: absolute;
   top: -50px;
   margin-left: calc(50% - 27px);
   background: var(--mf-green) url('../../assets/svg/filter_24.svg') center / 30px no-repeat;
   transition: .15s;
   opacity: 0;
}

.btn-params.show {
   opacity: 1;
   top: 30px;

}

.collapse-all-request {
   color: var(--text-gray);
   font-size: 14px;
   line-height: 20px;
   margin-left: auto;
   cursor: pointer;

   &:hover {
      text-decoration: underline;
   }
}

.tab-pane__title {
   display: flex;
   align-items: flex-end;
}

.table-tariff {
   position: relative;

   .table-tariff__header {
      display: flex;
      color: var(--text-gray);
      font-size: 14px;
      line-height: 20px;
      padding-left: 25px;
      margin-bottom: 20px;


   }

   .table-tariff__header,
   .table-tariff__body-head {
      p {
         padding-right: 20px;
         flex-shrink: 0;
      }

      p:first-child {
         width: 18%;
      }

      p:nth-child(2) {
         width: 14.5%;
      }

      p:nth-child(3) {
         width: 23%;
      }

      p:nth-child(4) {
         width: 12%;
      }

      p:nth-child(5) {
         width: 14%;
      }

      p:nth-child(6) {
         max-width: 16%;
      }

   }

   .table-tariff__body {
      border: 1px solid #D9D9D9;
      margin-top: -1px;
   }

   .table-tariff__body-head {
      display: flex;
      align-items: center;
      padding: 14px 0 14px 25px;
      position: relative;
      line-height: 20px;
   }

   .table-tariff__body-desc {
      background-color: #F7F7F7;
      border-top: 1px solid #D9D9D9;
      padding: 25px 25px 30px;
      line-height: 18px;

      .table-tariff__row {
         display: flex;
         margin-bottom: 27px;
      }

      p:first-child {
         color: var(--text-gray);
         width: 196px;
      }

      .btn {
         margin-left: -8px;
      }

   }

   .table-tariff__delete {
      width: 30px !important;
      height: 30px;
      margin-right: 16px;
      cursor: pointer;
      background: url('../../assets/svg/Delete_24.svg') center / 18px no-repeat;
   }

   .table-tariff__delete_empty {
      background: transparent;
      cursor: auto;
   }

   .table-tariff__arrow {
      width: 25px;
      height: 25px;
      flex-shrink: 0;
      background: url('../../assets/svg/arrow_green_right.svg') center / 7px no-repeat;
      transform: rotate(90deg);
      position: absolute;
      right: 20px;
   }

   .table-tariff__body-head.not-collapsed {
      .table-tariff__arrow {
         transform: rotate(-90deg);
      }
   }

   .mobile {
      display: none;
   }

   @media (max-width: 767px) {
      .pc {
         display: none;
      }

      .mobile {
         display: block;

         .table-tariff__header,
         .table-tariff__body-head {

            > div:first-child {
               margin-right: 0;
               width: 48%;
               padding-right: 20px;
            }
         }

         .table-tariff__arrow {
            right: 10px;
         }

         .table-tariff__header {
            padding-left: 15px;
            margin-bottom: 9px;
         }

         .table-tariff__body-head {
            padding: 19px 0 19px 15px;
         }

         .table-tariff__body-desc {
            padding-left: 15px;
            padding-right: 0;

            .btn {
               margin-left: 0;
            }

            > div {
               width: 100%;

               p {
                  display: inline-block;
                  width: auto;
                  padding-left: 10px;
                  color: #333;
               }

               p:first-child {
                  width: 34%;
                  padding-right: 10px;
                  padding-left: 0;
               }
            }

            > div:first-child {
               color: var(--text-gray);
            }
         }

         .table-tariff__row {
            margin-bottom: 23px;
         }
      }
   }
}

</style>