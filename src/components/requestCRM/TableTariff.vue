<template>
   <div class="table-tariff">
      <div class="pc">
         <div class="table-tariff__header">
            <p>Тарифный план</p>
            <p>Сумма разового списания</p>
            <p>Ежемесячная абонентская плата</p>
            <p>Стоимость <br> с учетом скидки</p>
<!--            <div v-if="showDelete" class="table-tariff__delete table-tariff__delete_empty"></div>-->
         </div>
         <div class="table-tariff__body">
            <div class="table-tariff__body-head">
               <p>Wifire Интернет 250 2.0</p>
               <p>0.00 ₽</p>
               <p>700.00 ₽</p>
               <p>700.00 ₽</p>
<!--               <div class="table-tariff__delete">-->
<!--                  <svg id="Delete_24" xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 18 24">-->
<!--                     <path id="Delete_24-2" data-name="Delete_24"-->
<!--                           d="M13.4,4,12.34,6H7v8H9.07l1,14H21.93l1-14H25V6H19.62l-1-2Zm6.67,22H12l-.9-12h9.85ZM23,8v4H9V8h4.55L14.6,6h2.78l1,2Z"-->
<!--                           transform="translate(-7 -4)" fill="#c9c9c9"/>-->
<!--                  </svg>-->
<!--               </div>-->
            </div>

            <div class="table-tariff__body-desc">

               <div class="table-tariff__row">
                  <p>Продукт</p>
                  <p>Интернет</p>
               </div>

               <div class="table-tariff__row">
                  <p>Индивидуальная скидка</p>
                  <p>0 %</p>
               </div>

               <div class="table-tariff__row">
                  <p>Скидка</p>
                  <p>0 %</p>
               </div>

            </div>
         </div>
         <div class="table-tariff__body">
            <div class="table-tariff__body-head">
               <p>Друг Wifire TV 120+</p>
               <p>0.00 ₽</p>
               <p>99.00 ₽</p>
               <p>99.00 ₽</p>
<!--               <div class="table-tariff__delete">-->
<!--                  <svg id="Delete_24" xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 18 24">-->
<!--                     <path id="Delete_24-2" data-name="Delete_24"-->
<!--                           d="M13.4,4,12.34,6H7v8H9.07l1,14H21.93l1-14H25V6H19.62l-1-2Zm6.67,22H12l-.9-12h9.85ZM23,8v4H9V8h4.55L14.6,6h2.78l1,2Z"-->
<!--                           transform="translate(-7 -4)" fill="#c9c9c9"/>-->
<!--                  </svg>-->
<!--               </div>-->
            </div>

            <div class="table-tariff__body-desc">

               <div class="table-tariff__row">
                  <p>Продукт</p>
                  <p>Телевидение</p>
               </div>

               <div class="table-tariff__row">
                  <p>Индивидуальная скидка</p>
                  <p>0 %</p>
               </div>

               <div class="table-tariff__row">
                  <p>Скидка</p>
                  <p>0 %</p>
               </div>

            </div>
         </div>

      </div>

      <div class="mobile">

         <div class="table-tariff__header">
            <div>Тарифный план</div>
            <div>Сумма разового списания</div>
         </div>

         <div class="table-tariff__body">
            <div class="table-tariff__body-head">
               <div>Wifire Интернет 250 2.0</div>
               <div>0.00 ₽</div>
<!--               <svg v-if="showDelete"-->
<!--                    id="Delete_24" xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 18 24">-->
<!--                  <path id="Delete_24-2" data-name="Delete_24"-->
<!--                        d="M13.4,4,12.34,6H7v8H9.07l1,14H21.93l1-14H25V6H19.62l-1-2Zm6.67,22H12l-.9-12h9.85ZM23,8v4H9V8h4.55L14.6,6h2.78l1,2Z"-->
<!--                        transform="translate(-7 -4)" fill="#c9c9c9"/>-->
<!--               </svg>-->
            </div>

            <div class="table-tariff__body-desc">

               <div>
                  <div class="table-tariff__row">
                     <p>Ежемесячная абонентская плата</p>
                     <p>700.00 ₽</p>
                  </div>

                  <div class="table-tariff__row">
                     <p>Стоимость <br> с учетом скидки</p>
                     <p>700.00 ₽</p>
                  </div>

                  <div class="table-tariff__row">
                     <p>Продукт</p>
                     <p>Интернет</p>
                  </div>

                  <div class="table-tariff__row">
                     <p>Индивидуальная скидка</p>
                     <p>0 %</p>
                  </div>

                  <div class="table-tariff__row">
                     <p>Скидка</p>
                     <p>0 %</p>
                  </div>
               </div>

            </div>
         </div>
         <div class="table-tariff__body">
            <div class="table-tariff__body-head">
               <div>Друг Wifire TV 120+</div>
               <div>0.00 ₽</div>
<!--               <svg v-if="showDelete"-->
<!--                    id="Delete_24" xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 18 24">-->
<!--                  <path id="Delete_24-2" data-name="Delete_24"-->
<!--                        d="M13.4,4,12.34,6H7v8H9.07l1,14H21.93l1-14H25V6H19.62l-1-2Zm6.67,22H12l-.9-12h9.85ZM23,8v4H9V8h4.55L14.6,6h2.78l1,2Z"-->
<!--                        transform="translate(-7 -4)" fill="#c9c9c9"/>-->
<!--               </svg>-->
            </div>

            <div class="table-tariff__body-desc">

               <div>
                  <div class="table-tariff__row">
                     <p>Ежемесячная абонентская плата</p>
                     <p>99.00 ₽</p>
                  </div>

                  <div class="table-tariff__row">
                     <p>Стоимость <br> с учетом скидки</p>
                     <p>99.00 ₽</p>
                  </div>

                  <div class="table-tariff__row">
                     <p>Продукт</p>
                     <p>Телевидение</p>
                  </div>

                  <div class="table-tariff__row">
                     <p>Индивидуальная скидка</p>
                     <p>0 %</p>
                  </div>

                  <div class="table-tariff__row">
                     <p>Скидка</p>
                     <p>0 %</p>
                  </div>
               </div>

            </div>
         </div>

      </div>

   </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
   name: "TableTariff",
   data() {
      return {
         // items: [
         //    {name: 'Тарифный план', key: "Wifire Интернет 250 2.0"},
         //    {name: 'Сумма разового списания', key: '0.00 ₽'},
         //    {name: 'Ежемесячная абонентская плата', key: '700.00 ₽'},
         //    {name: 'Стоимость с учетом скидки', key: '700.00 ₽'},
         //    {name: 'Продукт', key: 'Интернет'},
         //    {name: 'Индивидуальная скидка', key: '0 %'},
         //    {name: 'Скидка', key: '0 %'},
         // ]
      }
   },
   computed: mapGetters( ['showDelete'] )
}
</script>

<style lang="scss" scoped>
.table-tariff {
   margin-bottom: 30px;

   .table-tariff__header {
      color: var(--text-gray);
      font-size: 14px;
      line-height: 20px;
      padding-left: 25px;
      margin-bottom: 20px;
   }

   .table-tariff__body {
      border: 1px solid #D9D9D9;
      margin-top: -1px;
   }

   .table-tariff__header,
   .table-tariff__body-head {
      display: flex;

      p {
         width: 19%;
         padding-right: 20px;
      }

      p:first-child {
         margin-right: auto;
      }

   }

   .table-tariff__body-head {
      align-items: center;
      padding: 14px 0  14px 25px;
      line-height: 20px;

      p {
         font-weight: 500;
      }

      p:first-child {
         font-weight: 400;
      }
   }

   .table-tariff__body-desc {
      background-color: #F7F7F7;
      border-top: 1px solid #D9D9D9;
      padding: 25px 25px 5px;

      .table-tariff__row {
         display: flex;
         margin-bottom: 25px;
      }

      p:first-child {
         color: var(--text-gray);
         width: 25%;
         padding-right: 20px;
      }

   }

   .table-tariff__delete {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px !important;
      height: 30px;
      margin-right: 16px;
      cursor: pointer;

      path {
         transition: .15s;
      }

      &:hover path {
         fill: #333;
      }
   }

   .table-tariff__delete_empty {
      cursor: auto;
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

         .table-tariff__header {
            padding-left: 15px;

            > div {
               width: 40%;
            }

            > div:first-child {
               margin-right: 0;
               width: 60%;
               padding-right: 20px;
            }
         }

         .table-tariff__body-head {
            padding-left: 15px;

            > div {
               width: 40%;
            }

            > div:first-child {
               margin-right: 0;
               width: 60%;
               padding-right: 20px;
            }
         }

         .table-tariff__body-desc {
            padding-left: 15px;
            padding-right: 0;

            > div {
               width: 100%;

               p {
                  display: inline-block;
                  width: 40%;
                  padding-left: 10px;
                  color: #333;
               }

               p:first-child {
                  width: 60%;
                  padding-right: 20px;
                  padding-left: 0;
               }
            }

            > div:first-child {
               color: var(--text-gray);
            }
         }
      }
   }
}
</style>