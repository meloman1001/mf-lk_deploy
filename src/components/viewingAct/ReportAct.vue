<template>
   <div class="table-tariff">
      <div class="tab-pane__title">Отчеты</div>

      <div class="pc">
         <div class="table-tariff__header">
            <p>Статус</p>
            <p>Прогресс</p>
            <p>Дилер</p>
            <p>Создал</p>
            <p>Создан</p>
            <p>Канал продаж</p>
         </div>
         <div class="table-tariff__body">
            <div class="table-tariff__body-head">
               <p>В процессе</p>
               <p :style="{color: progress}">{{ vProgress }}</p>
               <p>Тестовый дилер</p>
               <p>Ivanov.Ivan</p>
               <p></p>
               <p></p>
            </div>

            <div class="table-tariff__body-desc">

               <div class="table-tariff__row">
                  <p>Дата, с</p>
                  <p>01.12.2020 00:00:00</p>
               </div>

               <div class="table-tariff__row">
                  <p>Дата, по</p>
                  <p>02.12.2020 23:59:00</p>
               </div>

               <div class="btn">Скачать</div>

            </div>
         </div>

      </div>

      <div class="mobile">

         <div class="table-tariff__header">
            <div>Статус</div>
            <div>Прогресс</div>
            <div>Дилер</div>
         </div>

         <div class="table-tariff__body">
            <div class="table-tariff__body-head">
               <div>В процессе</div>
               <div>100 %</div>
               <div>Тестовый дилер</div>
            </div>

            <div class="table-tariff__body-desc">

               <div>
                  <div class="table-tariff__row">
                     <p>Создал</p>
                     <p>Ivanov.Ivan</p>
                  </div>

                  <div class="table-tariff__row">
                     <p>Создан</p>
                     <p></p>
                  </div>

                  <div class="table-tariff__row">
                     <p>Канал продаж</p>
                     <p></p>
                  </div>

                  <div class="table-tariff__row">
                     <p>Дата, с</p>
                     <p>01.12.2020 00:00:00</p>
                  </div>

                  <div class="table-tariff__row">
                     <p>Дата, по</p>
                     <p>02.12.2020 23:59:00</p>
                  </div>

                  <div class="btn">Скачать</div>
               </div>

            </div>
         </div>

      </div>

   </div>
</template>

<script>
export default {
   name: "ReportAct",
   data() {
      return {
         vProgress: '100%',
      }
   },
   computed: {
      progress() {
         return this.vProgress === '100%' ? 'var(--mf-green)' : 'var(--mf-red)'
      }
   }
}
</script>

<style lang="scss" scoped>
.table-tariff {
   margin-top: 51px;
   margin-bottom: 28px;

   .tab-pane__title {
      margin-bottom: 29px;
   }

   .table-tariff__header,
   .table-tariff__body-head {
      p {
         width: 20%;
         padding-right: 20px;
         word-break: break-word;
      }

      p:first-child {
         margin-right: auto;
      }

      p:nth-child(2) {
         width: 17%;
      }
      p:nth-child(3) {
         width: 23%;
      }

      p:last-child {
         width: 135px;
      }
   }

   .table-tariff__header {
      display: flex;
      color: var(--text-gray);
      font-size: 14px;
      line-height: 20px;
      padding-left: 25px;
      margin-bottom: 20px;
   }

   .table-tariff__body {
      border: 1px solid #D9D9D9;
   }

   .table-tariff__body-head {
      display: flex;
      align-items: center;
      padding: 14px 0 14px 25px;
      line-height: 20px;
   }

   .table-tariff__body-desc {
      background-color: #F7F7F7;
      border-top: 1px solid #D9D9D9;
      padding: 25px 25px 30px;

      .table-tariff__row {
         display: flex;
         margin-bottom: 25px;
      }

      p:first-child {
         color: var(--text-gray);
         width: 117px;
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

   .mobile {
      display: none;
   }

   @media (max-width: 767px) {
      margin-top: 39px;

      .tab-pane__title {
         margin-bottom: 19px;
      }

      .pc {
         display: none;
      }

      .mobile {
         display: block;
         line-height: 20px;

         .table-tariff__row {
            margin-bottom: 20px;
         }

         .table-tariff__header,
         .table-tariff__body-head {
            padding-left: 15px;

            > div {
               width: 40%;
            }

            > div:first-child {
               margin-right: 0;
               width: 32%;
               padding-right: 15px;
            }

            > div:nth-child(2) {
               width: 27%;
            }
         }

         .table-tariff__header {
            margin-bottom: 10px;
         }

         .table-tariff__body-desc {
            padding-left: 15px;
            padding-right: 0;

            > div {
               width: 100%;

               p {
                  display: inline-block;
                  padding-left: 10px;
                  color: #333;
               }

               p:first-child {
                  width: 112px;
                  padding-right: 15px;
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