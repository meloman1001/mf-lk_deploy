<template>
   <div class="request viewing-users">
      <div class="wrapper">
         <div class="wrapper__block">
            <b-breadcrumb :items="breadcrumb"></b-breadcrumb>

            <p class="big-green-title">Просмотр пользователей</p>

            <div class="viewing-users__search">
               <label>
                  Поиск
                  <input type="text" />
                  <span class="input-btn-search"></span>
               </label>
            </div>

            <UsersTable />
         </div>
      </div>
   </div>
</template>

<script>
import UsersTable from "@/components/users/UsersTable";

export default {
   name: "viewing_users",
   components: {
      UsersTable
   },
   data() {
      return {
         breadcrumb: [
            {
               text: 'Главная страница',
               to: {name: 'home'}
            },{
               text: 'Создание и редактирование пользователя',
               active: true
            },
            {
               text: 'Просмотр пользователей',
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