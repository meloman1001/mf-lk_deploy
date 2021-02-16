<template>
   <div class="table-tariff PackageTable">
      <div class="pc">
         <div class="table-tariff__header">
            <p>Фамилия</p>
            <p>Имя</p>
            <p>Отчество</p>
            <p>Телефон</p>
            <p>Адрес</p>
            <p>Лицевой счет</p>
         </div>

         <div class="table-tariff__body">
            <div>
               <div class="table-tariff__body-head">
                  <p>{{ data.fn | hideName }}</p>
                  <p>{{ data.name }}</p>
                  <p>{{ data.ln }}</p>
                  <p>{{ data.phone | hidePhone }}</p>
                  <p>М******, Р****** пр-т, 18к1, кв 20</p>
                  <p>1234323</p>
               </div>

               <div class="table-tariff__row">
                  <div class="btn">Выбрать</div>
               </div>
            </div>

         </div>
      </div>
      <div class="mobile">
         <div class="table-tariff__header">
            <div>Фамилия</div>
            <div>Имя</div>
            <div>Отчество</div>
         </div>
         <div class="table-tariff__body">
            <div class="table-tariff__body-head">
               <div>{{ data.fn | hideName }}</div>
               <div>{{ data.name }}</div>
               <div>{{ data.ln }}</div>
            </div>

            <div class="table-tariff__body-desc">

               <div>
                  <div class="table-tariff__row">
                     <p>Телефон</p>
                     <p>{{ data.phone | hidePhone }}</p>
                  </div>

                  <div class="table-tariff__row">
                     <p>Адрес</p>
                     <p>М******, Р****** пр-т, 18к1, кв 20</p>
                  </div>

                  <div class="table-tariff__row">
                     <p>Лицевой счет</p>
                     <p>0 ₽</p>
                  </div>

                  <div class="table-tariff__row">
                     <div class="btn">Выбрать</div>
                  </div>

               </div>

            </div>
         </div>
      </div>

   </div>
</template>

<script>

export default {
   name: "ClientsTableFMC",
   components: {},
   data() {
      return {
         data: {
            fn: 'Иванов',
            name: 'Иван',
            ln: 'Иванович',
            phone: '+79052255740'
         }
      }
   },
   filters: {
      hideName(val) {
         let name = val.split( '' )
         let newName = [name[0]]
         for (let i = 1; i < name.length; i++) {
            name[i] = '*'
            newName.push( name[i] )
         }
         return newName.join('')
      },
      hidePhone(val) {
         let name = val.split( '' )
         let newName = []
         for (let i = 0; i < name.length; i++) {
            if (i < 4 || i > name.length - 3) {
               newName.push( name[i] )
            } else {
               name[i] = '*'
               newName.push( name[i] )
            }
         }
         return newName.join('')
      }
   }
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
         margin-bottom: 0;
      }

      p:first-child {
         width: 13.5%;
      }

      p:nth-child(2) {
         width: 12%;
      }

      p:nth-child(3) {
         width: 15%;
      }

      p:nth-child(4) {
         width: 17.2%;
      }

      p:nth-child(5) {
         width: 30%;
      }

      p:nth-child(6) {
         width: 120px;
         flex-shrink: 1;
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

            > div {
               padding-right: 20px;
            }

            > div:first-child {
               min-width: 39%;
            }

            > div:nth-child(2) {
               min-width: 34%;
            }
         }

         .table-tariff__header {
            padding-left: 15px;
            margin-bottom: 9px;
         }

         .table-tariff__body-head {
            padding: 17px 0 17px 15px;
            word-break: break-word;
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
                  margin-bottom: 3px;
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