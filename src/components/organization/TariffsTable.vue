<template>
   <div class="table-tariff PackageTable">
      <div class="pc">
         <div class="table-tariff__header">
            <p>Продукт</p>
            <p>Тариф</p>
            <p>Регион</p>
            <p>Нас. Пункт</p>
            <p class="PackageTable__delete">Удалить из исключения</p>
         </div>

         <div class="table-tariff__body">
            <div>
               <div class="table-tariff__body-head">
                  <p>Интернет</p>
                  <p>Ржаница (Орел)</p>
                  <p>Брянская</p>
                  <p>Люберцы</p>
                  <p>
                     <label class="checkbox">
                        <input type="checkbox"/>
                        <span></span>
                     </label>
                  </p>
               </div>

               <div class="table-tariff__row">
                  <p>gm_discount</p>
                  <p>34234234_gdsfgdsfg_45345</p>
               </div>
            </div>

         </div>
      </div>
      <div class="mobile">
         <div class="table-tariff__header">
            <div>Продукт</div>
            <div class="PackageTable__delete">Удалить из исключения</div>
         </div>
         <div class="table-tariff__body">
            <div class="table-tariff__body-head">
               <div>Интернет</div>
               <div>
                  <label class="checkbox">
                     <input type="checkbox"/>
                     <span></span>
                  </label>
               </div>
            </div>

            <div class="table-tariff__body-desc">

               <div>
                  <div class="table-tariff__row">
                     <p>Тариф</p>
                     <p>Ржаница (Орел)</p>
                  </div>

                  <div class="table-tariff__row">
                     <p>Регион</p>
                     <p>Брянская</p>
                  </div>

                  <div class="table-tariff__row">
                     <p>Нас. Пункт</p>
                     <p>Люберцы</p>
                  </div>

                  <div class="table-tariff__row">
                     <p>gm_discountid</p>
                     <p>23f2344r-wergh-g456-4564- 005576h67555</p>
                  </div>

               </div>

            </div>
         </div>
      </div>

      <div class="btn">Применить</div>
   </div>
</template>

<script>

export default {
   name: "TariffsTable",
   components: {}
}
</script>

<style lang="scss" scoped>

.PackageTable__delete {
   color: var(--text-blue);
   cursor: pointer;

   &:hover {
      text-decoration: underline;
   }
}

.table-tariff {
   position: relative;
   width: 100%;

   > div {
      margin-bottom: 30px;
   }

   * {
      line-height: 20px;
   }

   .table-tariff__header {
      display: flex;
      align-items: flex-end;
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
         word-break: break-word;
      }

      p:first-child {
         width: 18.7%;
         flex-shrink: 1;
      }

      p:nth-child(2) {
         width: 30%;
         margin-right: auto;
      }

      p:nth-child(3) {
         width: 20%;
      }

      p:nth-child(4) {
         width: 18.4%;
      }

      p:nth-child(5) {
         width: 106px;
      }

      .checkbox {
         position: absolute;
         right: 25px;
         top: calc(50% - 12px)
      }

   }

   .table-tariff__body {
      margin-top: -1px;
   }

   .table-tariff__body-head {
      display: flex;
      align-items: center;
      padding: 17px 0 17px 25px;
      position: relative;
      border: 1px solid #D9D9D9;
      margin-top: -1px;
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
         width: 140px;
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
            padding: 17px 0 17px 15px;

            > div:last-child {
               font-weight: 500;
            }

            .checkbox {
               right: 13px;
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
            margin-bottom: 20px;
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