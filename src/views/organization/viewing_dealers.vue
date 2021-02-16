<template>
   <div class="request viewing-users">
      <div class="wrapper">
         <div class="wrapper__block">
            <b-breadcrumb :items="breadcrumb"></b-breadcrumb>

            <p class="big-green-title">Просмотр дилеров</p>

            <div class="viewing-users__search">
               <label>
                  Поиск
                  <input type="text" />
                  <span class="input-btn-search"></span>
               </label>
            </div>

            <DealersTable />
         </div>
      </div>
   </div>
</template>

<script>

import DealersTable from "@/components/viewing_dealers/DealersTable";

export default {
   name: "viewing_dealers",
   components: {
      DealersTable
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
               text: 'Просмотр дилеров',
               active: true
            }
         ],

      }
   },
}
</script>

<style lang="scss" scoped>

.big-green-title {
   margin-bottom: 39px;
}

.viewing-users__search {
   display: flex;
   align-items: center;
   justify-content: flex-end;
   margin-bottom: 35px;
   position: relative;

   input {
      margin-left: 45px;
      width: 236px;
      padding-right: 50px;
   }

   .input-btn-search {
      position: absolute;
      right: 10px;
      width: 40px;
      height: 40px;
      background: url('../../assets/svg/Search_24.svg') center / 22px no-repeat;
      cursor: pointer;
   }
}

.viewing-users__collapse-all {
   text-align: right;
   color: var(--text-gray);
   margin-bottom: 13px;

   span {
      cursor: pointer;
      &:hover {
         text-decoration: underline;
      }
   }
}

@media (max-width: 767px) {
   .big-green-title {
      margin-bottom: 27px;
   }

   .viewing-users__search {
      margin-bottom: 35px;

      input {
         margin-left: 25px;
         width: 236px;
         padding-right: 50px;
      }

      .input-btn-search {
         position: absolute;
         right: 10px;
         width: 40px;
         height: 40px;
         background: url('../../assets/svg/Search_24.svg') center / 22px no-repeat;
         cursor: pointer;
      }
   }

}
</style>