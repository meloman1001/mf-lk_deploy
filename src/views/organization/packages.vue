<template>
   <div class="request packages">
      <div class="wrapper">
         <div class="wrapper__block">
            <b-breadcrumb :items="breadcrumb"></b-breadcrumb>

            <p class="big-green-title">Скрытые пакеты</p>

            <b-tabs >
               <b-tab title="Партнеры" active>
                  <label class="label-input">
                     Выберите <br> партнера
                     <b-select :value="0" :options="partners"></b-select>
                  </label>

                  <div class="packages__title">
                     Исключенные пакеты для дилера <span class="text-green">{{ titlePartners }}</span>
                  </div>

                  <div class="viewing-users__search">
                     <label>
                        Поиск по названию пакета
                        <input type="text" />
                        <span class="input-btn-search"></span>
                     </label>
                  </div>

                  <PackagesTable />
                  <PackagesFilters :title="titlePartners"/>

                  <PackagesTableFind />

               </b-tab>


               <b-tab title="Агенты">
                  <label class="label-input">
                     Выберите <br> агента
                     <b-select :value="0" :options="agents"></b-select>
                  </label>

                  <div class="packages__title">
                     Исключенные пакеты для дилера <span class="text-green">{{ titleAgents }}</span>
                  </div>

                  <div class="viewing-users__search">
                     <label>
                        Поиск по названию пакета
                        <input type="text" />
                        <span class="input-btn-search"></span>
                     </label>
                  </div>

                  <PackagesTable />
                  <PackagesFilters :title="titleAgents"/>

                  <PackagesTableFind />
               </b-tab>
            </b-tabs>

         </div>
      </div>
   </div>
</template>

<script>
import PackagesTable from "@/components/organization/PackagesTable";
import PackagesFilters from "@/components/organization/PackagesFilters";
import PackagesTableFind from "@/components/organization/PackagesTableFind";

export default {
   name: "packages",
   components: {
      PackagesTable,
      PackagesFilters,
      PackagesTableFind,
   },
   data() {
      return {
         titleAgents: 'Для всех агентов',
         titlePartners: 'Для всех партнеров',
         breadcrumb: [
            {
               text: 'Главная страница',
               to: {name: 'home'}
            },{
               text: 'Управление дилерами и тарифами',
               active: true
            },
            {
               text: 'Скрытые пакеты',
               active: true
            }
         ],
         partners: [
            {value: 0, text: 'Для всех'},
            {value: 1, text: '1'},
            {value: 2, text: '2'},
         ],
         agents: [
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
   }
}
</style>