<template>
   <div v-if="items.length" class="table-tariff">
      <div class="pc">
         <div class="table-tariff__header">
            <p>Тарифный план</p>
            <p>Сумма разового списания</p>
            <p>Ежемесячная абонентская плата</p>
            <p>Стоимость <br> с учетом скидки</p>
            <div class="table-tariff__delete table-tariff__delete_empty"></div>
         </div>

         <div v-for="(item, index) of items" :key="index" class="table-tariff__body">
            <div class="table-tariff__body-head">
               <p>{{ item.tariff }}</p>
               <p>{{ item.oneTimeWriteOff }}</p>
               <p>{{ item.subscription }}</p>
               <p>{{ item.priceDiscount }}</p>
               <div @click="deleteItem(index)" class="table-tariff__delete">
                  <svg id="Delete_24" xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 18 24">
                     <path id="Delete_24-2" data-name="Delete_24"
                           d="M13.4,4,12.34,6H7v8H9.07l1,14H21.93l1-14H25V6H19.62l-1-2Zm6.67,22H12l-.9-12h9.85ZM23,8v4H9V8h4.55L14.6,6h2.78l1,2Z"
                           transform="translate(-7 -4)" fill="#c9c9c9"/>
                  </svg>
               </div>
            </div>

            <div class="table-tariff__body-desc">

               <div class="table-tariff__row">
                  <p>Продукт</p>
                  <p>{{ item.product }}</p>
               </div>

               <div class="table-tariff__row">
                  <p>Индивидуальная скидка</p>
                  <p>{{ item.individualDiscount }}</p>
               </div>

               <div class="table-tariff__row">
                  <p>Скидка</p>
                  <p>{{ item.discount }}</p>
               </div>

            </div>
         </div>
      </div>

      <div class="mobile">
         <div class="table-tariff__header">
            <div>Тарифный план</div>
         </div>

         <div v-for="(item, index) of items" :key="index" class="table-tariff__body">
            <div class="table-tariff__body-head">
               <div>{{ item.tariff }}</div>
               <svg @click="deleteItem(index)" id="Delete_24" xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 18 24">
                  <path id="Delete_24-2" data-name="Delete_24"
                        d="M13.4,4,12.34,6H7v8H9.07l1,14H21.93l1-14H25V6H19.62l-1-2Zm6.67,22H12l-.9-12h9.85ZM23,8v4H9V8h4.55L14.6,6h2.78l1,2Z"
                        transform="translate(-7 -4)" fill="#c9c9c9"/>
               </svg>
            </div>

            <div class="table-tariff__body-desc">

               <div>

                  <div class="table-tariff__row">
                     <p>Продукт</p>
                     <p>{{ item.product }}</p>
                  </div>

                  <div class="table-tariff__row">
                     <p>Индивидуальная скидка</p>
                     <p>{{ item.individualDiscount }}</p>
                  </div>

                  <div class="table-tariff__row">
                     <p>Скидка</p>
                     <p>{{ item.discount }}</p>
                  </div>

                  <div class="table-tariff__row">
                     <p>Сумма разового списания</p>
                     <p>{{ item.oneTimeWriteOff }}</p>
                  </div>

                  <div class="table-tariff__row">
                     <p>Ежемесячная абонентская плата</p>
                     <p>{{ item.subscription }}</p>
                  </div>

                  <div class="table-tariff__row">
                     <p>Стоимость <br> с учетом скидки</p>
                     <p>{{ item.priceDiscount }}</p>
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
   name: "TableTariffResult",
   data() {
      return {
         items: [
            {
               tariff: "Wifire Интернет 250 2.0",
               oneTimeWriteOff: '0.00 ₽',
               subscription: '700.00 ₽',
               priceDiscount: '700.00 ₽',
               product: 'Интернет',
               individualDiscount: '0 %',
               discount: '0 %'
            },{
               tariff: "Wifire Интернет 250 2.0",
               oneTimeWriteOff: '0.00 ₽',
               subscription: '700.00 ₽',
               priceDiscount: '700.00 ₽',
               product: 'Интернет',
               individualDiscount: '0 %',
               discount: '0 %'
            },
         ]
      }
   },
   computed: mapGetters( ['showDelete'] ),
   methods: {
      deleteItem(index) {
         this.items.splice(index, 1)
      }
   }
}
</script>

<style lang="scss" scoped>
.table-tariff {
   margin-bottom: 30px;
   line-height: 20px;

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
      padding: 14px 0 14px 25px;
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
            margin-bottom: 12px;

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
            padding-right: 15px;
            justify-content: space-between;

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
            //padding: 30px 25px 5px;
            > div {
               width: 100%;

               p {
                  display: inline-block;
                  //width: 40%;
                  padding-left: 10px;
                  color: #333;
               }

               p:first-child {
                  width: 68%;
                  padding-right: 20px;
                  padding-left: 0;
               }
            }

            > div:first-child {
               color: var(--text-gray);
            }
         }

         .table-tariff__row {
            margin-bottom: 21px;
         }
      }
   }
}
</style>