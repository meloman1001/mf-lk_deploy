<template>
   <div class="table-tariff">
      <div class="pc">
         <div class="table-tariff__header">
            <p>Продукт</p>
            <p>Ежемесячные списания</p>
            <p>Ежемесячные со скидкой</p>
            <p>Разовые</p>
         </div>
         <div class="table-tariff__body">
            <div class="table-tariff__body-head">
               <p> Аренда оборудования </p>
               <p> 0 ₽ </p>
               <p> 0 ₽ </p>
               <p> 0 ₽ </p>
            </div>

            <div class="table-tariff__row">
               <p>Тариф</p>
               <p>Аренда ТВ приставки (беспл)</p>
            </div>

            <div class="table-tariff__body-head">
               <p> Интернет </p>
               <p> 0 ₽ </p>
               <p> 0 ₽ </p>
               <p> 0 ₽ </p>
            </div>

            <div class="table-tariff__row">
               <p>Тариф</p>
               <p>Домашний интернет 250Мбит\с + базовый</p>
            </div>

            <div class="table-tariff__body-head">
               <p>Мобильный интернет</p>
               <p> 0 ₽ </p>
               <p> 0 ₽ </p>
               <p> 0 ₽ </p>
            </div>

            <div class="table-tariff__row">
               <p>Тариф</p>
               <p>[FMC] covid-19 Мобильный интернет LTE</p>
            </div>

         </div>
      </div>
      <div class="mobile">
         <div class="table-tariff__header">
            <div>Продукт</div>
            <div>Ежемесячные списания</div>
         </div>
         <div class="table-tariff__body">
            <div class="table-tariff__body-head">
               <div>Аренда оборудования</div>
               <div>0 ₽</div>
            </div>

            <div class="table-tariff__body-desc">

               <div>
                  <div class="table-tariff__row">
                     <p>Тариф</p>
                     <p>[FMC] Аренда ТВ-приставки (беспл)</p>
                  </div>

                  <div class="table-tariff__row">
                     <p>Ежемесячные со скидкой</p>
                     <p>0 ₽</p>
                  </div>

                  <div class="table-tariff__row">
                     <p>Разовые</p>
                     <p>0 ₽</p>
                  </div>

               </div>

            </div>
         </div>
         <div class="table-tariff__body">
            <div class="table-tariff__body-head">
               <div>Интернет</div>
               <div>0 ₽</div>
            </div>

            <div class="table-tariff__body-desc">

               <div>
                  <div class="table-tariff__row">
                     <p>Тариф</p>
                     <p>[FMC] Аренда ТВ-приставки (беспл)</p>
                  </div>

                  <div class="table-tariff__row">
                     <p>Ежемесячные со скидкой</p>
                     <p>0 ₽</p>
                  </div>

                  <div class="table-tariff__row">
                     <p>Разовые</p>
                     <p>0 ₽</p>
                  </div>

               </div>

            </div>
         </div>
         <div class="table-tariff__body">
            <div class="table-tariff__body-head">
               <div>Мобильный интернет</div>
               <div>0 ₽</div>
            </div>

            <div class="table-tariff__body-desc">

               <div>
                  <div class="table-tariff__row">
                     <p>Тариф</p>
                     <p>[FMC] Аренда ТВ-приставки (беспл)</p>
                  </div>

                  <div class="table-tariff__row">
                     <p>Ежемесячные со скидкой</p>
                     <p>0 ₽</p>
                  </div>

                  <div class="table-tariff__row">
                     <p>Разовые</p>
                     <p>0 ₽</p>
                  </div>

               </div>

            </div>
         </div>
      </div>

      <ViewingMorePrice />
   </div>
</template>

<script>
import ViewingMorePrice from "@/components/viewing/ViewingMorePrice";

export default {
   name: "ViewingMoreTable",
   components: {
      ViewingMorePrice
   }
}
</script>

<style lang="scss" scoped>

.table-tariff {
   position: relative;
   width: 100%;

   * {
      line-height: 20px;
   }

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
      * {
         line-height: 20px;
      }

      p {
         padding-right: 20px;
         flex-shrink: 0;
      }

      p:first-child {
         margin-right: auto;
         flex-shrink: 1;
      }

      p:nth-child(2) {
         width: 130px;
      }

      p:nth-child(3) {
         width: 130px;
      }

      p:nth-child(4) {
         width: 67px;
      }

   }

   .table-tariff__body {
      margin-top: -1px;
   }

   .table-tariff__body-head {
      display: flex;
      align-items: center;
      padding: 14px 0 14px 25px;
      position: relative;
      border: 1px solid #D9D9D9;
      margin-top: -1px;
      line-height: 20px;
   }


   .table-tariff__row {
      display: flex;
      padding: 27px 25px;
      background-color: #F7F7F7;
      line-height: 18px;
      border: 1px solid #D9D9D9;
      margin-top: -1px;

      p:first-child {
         color: var(--text-gray);
         width: 100px;
         flex-shrink: 0;
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
               width: auto;
               padding-right: 20px;
            }

            > div:last-child {
               width: 105px;
               margin-left: auto;
            }
         }

         .table-tariff__header {
            padding-left: 15px;
            margin-bottom: 9px;
         }

         .table-tariff__body-head {
            padding-left: 15px;

            > div:last-child {
               font-weight: 500;
            }
         }

         .table-tariff__body-desc {
            background-color: #F7F7F7;
            border: 1px solid #D9D9D9;
            margin-top: -1px;
            padding: 29px 15px;

            > div {
               width: 100%;

               p {
                  display: inline-block;
                  width: auto;
                  padding-left: 10px;
                  color: #333;
               }

               p:first-child {
                  width: 112px;
                  padding-right: 10px;
                  padding-left: 0;
                  flex-shrink: 0;
               }
            }

            > div:first-child {
               color: var(--text-gray);
            }
         }

         .table-tariff__row {
            margin-bottom: 25px;
            padding: 0;
            border: 0;

            &:last-child {
               margin-bottom: 0;
            }

            p:first-child {
               color: var(--text-gray);
            }
         }
      }
   }
}

</style>