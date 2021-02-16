<template>
   <header class="header">
      <div class="wrapper">
         <div class="header__logo">
            <router-link to="/">
               <img src="../assets/svg/logo.svg" alt="img">
            </router-link>
         </div>

         <div class="header__nav">
            <div class="header__notifications">
               <router-link :to="{name: 'notifications'}">
                  <img src="../assets/svg/notifications.svg" alt="img">
               </router-link>
            </div>

            <b-dropdown class="header__dropdown"
                        toggle-class="header__dropdown"
                        id="headerDropdown"
                        :text="'Ivan.Ivanov'"
            >
               <div class="dropdown-menu-wrapper">

                  <b-dropdown-item-button class="user">
                     Ivan.Ivanov
                  </b-dropdown-item-button>

                  <b-dropdown-item-button>
                     <router-link :to="{name: 'login'}">Личные данные</router-link>
                  </b-dropdown-item-button>

                  <b-dropdown-item-button>
                     <router-link :to="{name: 'changePassword'}">Смена пароля</router-link>

                  </b-dropdown-item-button>

                  <b-dropdown-item-button>
                     <router-link :to="{name: 'login'}">Тарифы для сотрудников</router-link>
                  </b-dropdown-item-button>

                  <b-dropdown-item-button @click="logout" class="logout">
                     <span>Выйти из Личного кабинета</span>
                  </b-dropdown-item-button>

               </div>
            </b-dropdown>
         </div>
      </div>
   </header>
</template>

<script>
export default {
   name: "Header",

   data() {
      return {}
   },
   methods: {
      logout() {
         if(this.$route.name !== 'home') this.$router.push({name: 'home'})
         this.$emit('logout')
      }
   }
}
</script>

<style lang="scss">
.header {
   height: 70px;
   box-shadow: 0 3px 6px #00000012;
   background-color: #fff;
   position: sticky;
   top: 0;
   z-index: 1000;

   .header__logo {
      height: 100%;
      padding: 10px 0;

      a {
         display: block;
         height: 100%;
      }

      img {
         max-width: 100%;
         max-height: 100%;
      }
   }

   .wrapper {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
   }

   .header__nav {
      display: flex;
      align-items: center;
      height: 100%;
   }

   .header__notifications {
      margin-right: 30px;
   }

   .header__dropdown {
      min-width: 246px;
      height: 100%;
      position: relative;
      font-size: 19px;
      border-left: 1px solid #CCCCCC;
      border-right: 1px solid #CCCCCC;
      cursor: pointer;

      &.show {
         border-color: transparent;
      }

      .dropdown-toggle {
         height: 100%;
         display: flex;
         align-items: center;
         padding: 0 15px 0 23px;
         background-color: #fff !important;
         border: none;
         color: #333333;
         box-shadow: none !important;

         &:before {
            content: '';
            display: inline-block;
            background: url('../assets/svg/user_mf.svg') center / contain no-repeat;
            width: 12px;
            height: 20px;
            margin-right: 10px;
            flex-shrink: 0;
         }

         &:after {
            content: '';
            border: 0;
            background: url('../assets/svg/arrow_green_down.svg') center / contain no-repeat;
            width: 11px;
            height: 11px;
            margin-left: auto;
            flex-shrink: 0;
         }
      }

      .dropdown-menu {
         width: 100%;
         box-shadow: 0 3px 6px #00000029;
         transform: translateY(0px) !important;
         border: 0;
         border-radius: 0;
         padding: 0;
         margin: 0;
         background-color: rgba(0, 0, 0, .5);

         .dropdown-menu-wrapper {
            background-color: #fff;
         }

         .dropdown-item {
            height: 50px;
            line-height: normal;
            display: flex;
            align-items: center;
            font-size: 14px;
            background-color: #fff;
            color: #333;
            padding: 0 0 0 45px;

            a {
               border-top: 1px solid #ccc;
               height: 100%;
               width: 100%;
               display: flex;
               align-items: center;
            }

         }

         .user {
            height: 70px;
            line-height: 70px;
            display: flex;
            align-items: center;
            padding: 0 15px 0 23px;
            font-size: 19px;
            border-top: 0;

            .dropdown-item {
               padding-left: 0;
               font-size: 19px;
            }

            &:before {
               content: '';
               display: inline-block;
               background: url('../assets/svg/user_mf.svg') center / contain no-repeat;
               width: 12px;
               height: 20px;
               margin-right: 10px;
               flex-shrink: 0;
            }

            &:after {
               content: '';
               border: 0;
               background: url('../assets/svg/arrow_green_down.svg') center / contain no-repeat;
               width: 11px;
               height: 11px;
               margin-left: auto;
               transform: rotate(180deg);
               flex-shrink: 0;
            }

         }

         .logout {

            .dropdown-item {
               background-color: #EDEDED;
               padding-right: 0;
               padding-left: 23px;
               border-top: 1px solid #ccc;

               a {
                  color: #333;
                  border-top: 0;
               }
            }

         }
      }
   }

   @media (max-width: 767px) {
      height: 50px;

      .header__logo {
         padding: 12px 0;
      }

      .header__notifications {
         margin-right: 25px;
      }

      .header__dropdown {
         font-size: 0;
         min-width: 0;
         width: 32px;
         height: 32px;
         background: url('../assets/svg/menu_mob.svg') 0 / contain no-repeat;
         border: 0;

         .dropdown-menu {
            position: fixed !important;
            right: 0;
            top: 0;
            height: 100%;
            transition: .3s;
            display: none;

            .dropdown-item.logout {
               flex-grow: 1;
               padding-top: 20px;
               align-items: flex-start;
            }
         }

         .dropdown-menu-wrapper {
            width: 230px;
            height: 100%;
            margin-left: auto;
            display: flex;
            flex-direction: column;
         }

         .dropdown-toggle {
            &:before,
            &:after {
               display: none;
            }
         }

      }
   }
}
</style>