<template>
   <!--   Меню бургера  -->
   <div class="header__mobile dropdown-menu">
      <div class="header__close">
         <button class="btn-close"></button>
      </div>

      <div class="dropdown-menu-wrapper">
         <div class="dropdown-item user">Ivan.Ivanov</div>

         <router-link :to="{name: 'login'}" class="dropdown-item">
            <div>Личные данные</div>
         </router-link>

         <router-link :to="{name: 'changePassword'}" class="dropdown-item">
            <div>Смена пароля</div>
         </router-link>

         <router-link :to="{name: 'home'}" class="dropdown-item">
            <div>Тарифы для сотрудников</div>
         </router-link>

         <div class="dropdown-item logout">
            <a @click="logout">
               <div>Выйти из Личного кабинета</div>
            </a>
         </div>

      </div>

   </div>
</template>

<script>
export default {
   name: "burger_menu",
   methods: {
      logout() {
         if(this.$route.name !== 'home') this.$router.push({name: 'home'})
         this.$emit('logout')
      }
   },
   mounted() {
      if (window.innerWidth <= 767) {
         let menu = document.querySelector( '.dropdown-menu.header__mobile' )
         let btnCloseMenu = document.querySelector( '.header__mobile .btn-close' )
         let linksMenu = document.querySelectorAll( '.header__mobile a > div' )

         this.$root.$on( 'bv::dropdown::show', () => {
            menu.classList.toggle( 'show' )
         } )

         document.addEventListener( 'click', function (event) {
            if (event.target === menu || event.target === btnCloseMenu)
               menu.classList.toggle( 'show' )

            linksMenu.forEach( link => {
               if (event.target === link)
                  menu.classList.toggle( 'show' )
            } )

         } )
      }
   }
}
</script>

<style lang="scss" scoped>
.header__mobile.dropdown-menu {
   position: fixed !important;
   right: 0;
   top: 0;
   height: 100%;
   transition: .3s;
   width: 100%;
   box-shadow: 0 3px 6px #00000029;
   transform: translateY(0px) !important;
   border: 0;
   border-radius: 0;
   padding: 0;
   background-color: rgba(0, 0, 0, .5);
   display: flex;
   visibility: hidden;
   opacity: 0;

   &.show {
      visibility: visible;
      opacity: 1;

      .dropdown-menu-wrapper {
         margin-right: 0;
      }
   }

   .dropdown-item.logout {
      flex-grow: 1;
      padding-top: 20px;
      align-items: flex-start;
   }

   .dropdown-menu-wrapper {
      width: 230px;
      height: 100%;
      display: flex;
      flex-direction: column;
      background-color: #fff;
      margin-left: auto;
      margin-right: -230px;
      transition: .3s;
   }

   .dropdown-item {
      height: 50px;
      display: flex;
      align-items: center;
      font-size: 14px;
      background-color: #fff;
      color: #333;
      padding: 0 0 0 45px;

      div {
         border-top: 1px solid #ccc;
         height: 100%;
         width: 100%;
         display: flex;
         align-items: center;
      }

   }

   .dropdown-item.user {
      display: flex;
      align-items: center;
      padding: 0 15px 0 23px;
      font-size: 19px;
      border-top: 0;

      &:before {
         content: '';
         display: inline-block;
         background: url('../../assets/svg/user_mf.svg') center / contain no-repeat;
         width: 12px;
         height: 20px;
         margin-right: 10px;
      }

   }

   .dropdown-item.logout {
      background-color: #EDEDED;
      justify-content: center;
      padding-right: 0;
      padding-left: 0;
      border-top: 1px solid #ccc;

      a {
         color: #333;

         div {
            border: 0;
         }
      }
   }

   .dropdown-toggle {
      &:before,
      &:after {
         display: none;
      }
   }

   .header__close {
      height: 50px;
      background-color: #fff;
      display: flex;
      justify-content: flex-end;
      flex-grow: 1;
      box-shadow: 3px 3px 6px #00000012;
      z-index: 0;

      .btn-close {
         height: 50px;
         width: 50px;
         background: url('../../assets/svg/close.svg') center / 17px no-repeat;
      }
   }
}

</style>