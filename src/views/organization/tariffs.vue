<template>
   <div class="request packages">
      <div class="wrapper">
         <div class="wrapper__block">
            <b-breadcrumb :items="breadcrumb"></b-breadcrumb>

            <p class="big-green-title">Скрытые тарифы</p>

            <b-tabs >
               <b-tab title="Партнеры" active>
                  <label class="label-input">
                     Выберите <br> агента
                     <b-select :value="0" :options="partners"></b-select>
                  </label>

                  <div class="packages__title">
                     Исключенные тарифы <span class="text-green">Для всех партнеров</span>
                  </div>

                  <div class="viewing-users__search">
                     <label>
                        <span>Поиск по названию тарифного плана</span>
                        <input type="text" />
                        <span class="input-btn-search"></span>
                     </label>
                  </div>

                  <TariffsTable />
                  <TariffsFilters />
               </b-tab>


               <b-tab title="Агенты">
                  <div class="packages__title">
                     Нет исключенных тарифов <span class="text-green">Для всех агентов</span>
                  </div>

                  <TariffsFilters />
               </b-tab>
            </b-tabs>

         </div>
      </div>
   </div>
</template>

<script>
import TariffsTable from "@/components/organization/TariffsTable";
import TariffsFilters from "@/components/organization/TariffsFilters";

export default {
   name: "tariffs",
   components: {
      TariffsTable,
      TariffsFilters,
   },
   data() {
      return {
         breadcrumb: [
            {
               text: 'Главная страница',
               to: {name: 'home'}
            },{
               text: 'Управление дилерами и тарифами',
               active: true
            },
            {
               text: 'Скрытые тарифы',
               active: true
            }
         ],
         partners: [
            {value: 0, text: 'Для всех'},
            {value: 1, text: '1'},
            {value: 2, text: '2'},
         ]
      }
   },
}
</script>

<style lang="scss" scoped>
.breadcrumb {
   margin-bottom: 32px;
}

.big-green-title {
   margin-bottom: 36px;
}

.request .tab-pane {
   padding-top: 53px;
}

.packages__title {
   font-size: 30px;
   line-height: 43px;
   margin-bottom: 29px;
}

.label-input {
   margin-bottom: 42px;
}

.viewing-users__search {
   margin-bottom: 34px;

   label {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
   }

   input {
      margin-left: 33px;
   }

   span {
      max-width: 144px;
      line-height: 20px;
   }
}

@media (max-width: 767px) {
   .breadcrumb {
      margin-bottom: 17px;
   }

   .big-green-title {
      margin-bottom: 28px;
   }

   .request .tab-pane {
      padding-top: 34px;
   }

   .label-input  {
      margin-bottom: 31px;

      br {
         display: none;
      }
   }

   .packages__title {
      font-size: 24px;
      line-height: 32px;
   }

   .viewing-users__search {
      width: 236px;
      margin-left: auto;

      input {
         margin-top: 10px;
         margin-left: 0;
      }

      span {
         max-width: none;
      }
   }
}
</style>