<template>
   <div v-if="dataUsers.length" class="UsersTable">
      <div class="tab-pane__title">
         <span v-if="collapseAll" class="collapse-all-request"
               @click="isCollapseAll">
            Свернуть всех пользователей
         </span>
         <span v-else class="collapse-all-request"
               @click="isCollapseAll">
            Развернуть всех пользователей
         </span>
      </div>

      <div id="tableTariff" class="table-tariff">

         <div class="pc">
            <div class="table-tariff__header">
               <p>id</p>
               <p>Наименование <br> дилера</p>
               <p>Тип дилера</p>
               <p>Количество пользователей</p>
               <p>Активные пользователи</p>
               <p>Неактивные пользователи</p>
               <p class="empty"></p>
            </div>
            <div v-for="(user, index) of dataUsers"
                 :key="index"
                 class="table-tariff__body"
            >
               <div class="table-tariff__body-head">
                  <p>{{ user.id }}</p>
                  <p>{{ user.dealer }}</p>
                  <p>{{ user.typeDealer }}</p>
                  <p>{{ user.usersValue }}</p>
                  <p>{{ user.usersActive }}</p>
                  <p>{{ user.usersNoActive }}</p>
                  <svg id="Edit_24" xmlns="http://www.w3.org/2000/svg" width="23.992" height="23.977"
                       viewBox="0 0 23.992 23.977">
                     <path id="Edit_24-2" data-name="Edit_24"
                           d="M6,28l8.16-3.32L27.37,10.62h0a2.29,2.29,0,0,0-.06-3.2L24.59,4.68a2.29,2.29,0,0,0-3.21,0L7.32,18,4,26ZM23.18,6.09l2.73,2.73a.3.3,0,0,1,0,.41L24.8,10.39,21.61,7.2l1.15-1.12a.3.3,0,0,1,.42.01ZM9,19.16,20.17,8.59l3.23,3.24L13,23,6,26Z"
                           transform="translate(-4 -4.023)" fill="#c9c9c9"/>
                  </svg>
                  <svg @click.stop="deleteUser(index)"
                       id="Delete_24" xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24">
                     <path id="Delete_24-2" data-name="Delete_24"
                           d="M13.4,4,12.34,6H7v8H9.07l1,14H21.93l1-14H25V6H19.62l-1-2Zm6.67,22H12l-.9-12h9.85ZM23,8v4H9V8h4.55L14.6,6h2.78l1,2Z"
                           transform="translate(-7 -4)" fill="#c9c9c9"/>
                  </svg>

               </div>

            </div>

         </div>

         <div class="mobile">

            <div class="table-tariff__header">
               <div>id</div>
               <div>Имя дилера</div>
               <div>Тип дилера</div>
               <div>Количество <br> пользователей</div>
               <div>Активные <br> пользователи</div>
            </div>

            <div v-for="(user, index) of dataUsers"
                 :key="index"
                 class="table-tariff__body"
            >
               <div class="table-tariff__body-head"
                    v-b-toggle:v-bind="'collapse-request-' + index"
               >
                  <div>{{ user.id }}</div>
                  <div>{{ user.dealer }}</div>
                  <div>{{ user.typeDealer }}</div>
                  <div>{{ user.usersValue }}</div>
                  <div>{{ user.usersActive }}</div>
                  <svg id="Edit_24" xmlns="http://www.w3.org/2000/svg" width="23.992" height="23.977"
                       viewBox="0 0 23.992 23.977">
                     <path id="Edit_24-2" data-name="Edit_24"
                           d="M6,28l8.16-3.32L27.37,10.62h0a2.29,2.29,0,0,0-.06-3.2L24.59,4.68a2.29,2.29,0,0,0-3.21,0L7.32,18,4,26ZM23.18,6.09l2.73,2.73a.3.3,0,0,1,0,.41L24.8,10.39,21.61,7.2l1.15-1.12a.3.3,0,0,1,.42.01ZM9,19.16,20.17,8.59l3.23,3.24L13,23,6,26Z"
                           transform="translate(-4 -4.023)" fill="#c9c9c9"/>
                  </svg>
                  <svg @click.stop="deleteUser(index)" id="Delete_24" xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24">
                     <path id="Delete_24-2" data-name="Delete_24"
                           d="M13.4,4,12.34,6H7v8H9.07l1,14H21.93l1-14H25V6H19.62l-1-2Zm6.67,22H12l-.9-12h9.85ZM23,8v4H9V8h4.55L14.6,6h2.78l1,2Z"
                           transform="translate(-7 -4)" fill="#c9c9c9"/>
                  </svg>
                  <div class="table-tariff__arrow"></div>
               </div>

               <b-collapse :id="'collapse-request-' + index"
                           v-model="user.collapse"
               >
                  <div class="table-tariff__body-desc">
                     <div>
                        <div class="table-tariff__row">
                           <p>Тип дилера</p>
                           <p>{{ user.typeDealer }}</p>
                        </div>

                        <div class="table-tariff__row">
                           <p>Количество пользователей</p>
                           <p>{{ user.usersValue }}</p>
                        </div>

                        <div class="table-tariff__row">
                           <p>Активные пользователи</p>
                           <p>{{ user.usersActive }}</p>
                        </div>

                        <div class="table-tariff__row">
                           <p>Неактивные пользователи</p>
                           <p>{{ user.usersNoActive }}</p>
                        </div>

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
   name: "DealersTable",
   data() {
      return {
         collapseAll: true,
         dataUsers: [
            {
               id: '100',
               dealer: 'Namecomp',
               typeDealer: 'Агент FMC - да',
               usersValue: 80,
               usersActive: 5,
               usersNoActive: 75
            },{
               id: '101',
               dealer: 'ООО Онлайн сервисы (Айти решения, Москва Онлайн)',
               typeDealer: 'Агент FMC - да',
               usersValue: 80,
               usersActive: 5,
               usersNoActive: 75
            },{
               id: '102',
               dealer: 'Namecomp',
               typeDealer: 'Агент FMC - да',
               usersValue: 80,
               usersActive: 5,
               usersNoActive: 75
            },{
               id: '103',
               dealer: 'Namecomp',
               typeDealer: 'Агент FMC - да',
               usersValue: 80,
               usersActive: 5,
               usersNoActive: 75
            },{
               id: '104',
               dealer: 'Namecomp',
               typeDealer: 'Агент FMC - да',
               usersValue: 80,
               usersActive: 5,
               usersNoActive: 75
            },{
               id: '105',
               dealer: 'Namecomp',
               typeDealer: 'Агент FMC - да',
               usersValue: 80,
               usersActive: 5,
               usersNoActive: 75
            },
         ]
      }
   },
   methods: {
      deleteUser(index) {
         this.dataUsers.splice(index, 1)
      },
      isCollapseAll() {
         this.collapseAll = !this.collapseAll
         this.dataUsers.forEach( el => this.collapseAll ? el.collapse = true : el.collapse = false )
      }
   },
}
</script>

<style lang="scss" scoped>

.collapse-all-request {
   color: var(--text-gray);
   font-size: 14px;
   line-height: 20px;
   padding-right: 10px;
   margin-left: auto;
   cursor: pointer;

   &:hover {
      text-decoration: underline;
   }
}

.tab-pane__title {
   display: none;
   align-items: flex-end;
   margin-bottom: 7px;
}

@media (max-width: 1023px) {
   .tab-pane__title {
      display: flex;
      margin-bottom: 18px;
   }
}

.table-tariff {
   position: relative;

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

   .table-tariff__header {
      display: flex;
      align-items: flex-end;
      color: var(--text-gray);
      font-size: 14px;
      line-height: 20px;
      padding-left: 25px;
      margin-bottom: 20px;

      .empty {
         width: 123px;
      }
   }

   .table-tariff__header,
   .table-tariff__body-head {
      p {
         padding-right: 20px;
         flex-shrink: 0;
      }

      p:first-child {
         width: 64px;
      }

      p:nth-child(2) {
         width: 21.5%;
      }

      p:nth-child(3) {
         width: 18.5%;
      }

      p:nth-child(4) {
         width: 14.5%;
      }

      p:nth-child(5) {
         width: 13%;
      }

      p:nth-child(6) {
         width: 13%;
      }

      #Edit_24 {
         margin-right: 20px;
         margin-left: auto;
      }

      #Delete_24 {
         margin-right: 24px;
      }

      svg {
         flex-shrink: 0 ;
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
         margin-bottom: 23px;

         &:last-child {
            margin-bottom: 0;
         }
      }

      p:first-child {
         color: var(--text-gray);
         width: 196px;
         padding-right: 30px;
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

   svg {
      cursor: pointer;
      &:hover path {
         fill: #333
      }
   }

   .mobile {
      display: none;
   }

   @media (min-width: 768px) and (max-width: 1023px) {
      .pc {
         display: none;
      }

      .mobile {
         display: block;

         .table-tariff__header,
         .table-tariff__body-head {
            padding-right: 45px;
            div {
               padding-right: 20px;
               flex-shrink: 0;
            }

            div:first-child {
               width: 64px;
            }

            div:nth-child(2) {
               width: 23%;
            }

            div:nth-child(3) {
               width: 19%;
            }

            div:nth-child(4) {
               width: 19%;
            }

            #Edit_24 {
               margin-right: 20px;
               margin-left: auto;
            }

            #Delete_24 {
               margin-right: 24px;
            }

            svg {
               flex-shrink: 0 ;
            }

         }

         .table-tariff__body-desc {

             .table-tariff__row:not(:last-child) {
               display: none;
            }
         }

      }

   }

   @media (max-width: 767px) {
      .pc {
         display: none;
      }
      .mobile {
         display: block;

         .table-tariff__arrow {
            width: 25px !important;
            right: 7px !important;
         }

         .table-tariff__header,
         .table-tariff__body-head {
            padding-left: 15px;
            padding-right: 55px;

            > div {
               width: auto;
               margin-right: auto;
               padding-right: 20px;

               &:nth-child(3),
               &:nth-child(5),
               &:nth-child(4){
                  display: none;
               }
            }

            > div:first-child, {
               flex-shrink: 0;
               margin-right: 0;
               width: 47px;
            }

            #Delete_24 {
               margin-right: 0;
            }


         }

         .table-tariff__header {
            margin-bottom: 9px;
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
                  width: 111px;
                  padding-right: 13px;
                  padding-left: 0;
                  color: var(--text-gray);
                  flex-shrink: 0;
               }
            }
         }

         .table-tariff__row {
            margin-bottom: 23px;
         }
      }
   }
}

</style>