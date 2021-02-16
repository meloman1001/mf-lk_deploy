<template>
   <div id="app">
      <div v-if="login">
         <Header @logout="login = false"/>
         <router-view/>
         <Footer/>
         <BurgerMenu @logout="login = false"/>
      </div>


      <Login v-else @submit="login = true"/>
   </div>
</template>

<script>

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BurgerMenu from "@/components/modals/BurgerMenu";
import Login from "@/components/Login";

export default {
   name: 'App',
   components: {
      Header,
      Footer,
      BurgerMenu,
      Login
   },
   data() {
      return {
         login: false
      }
   }
}
</script>

<style lang="scss">
// bootstrap
@import '../node_modules/bootstrap/scss/bootstrap.scss';
@import '../node_modules/bootstrap-vue/src/index.scss';
// шрифт
@import "./assets/fonts/fonts.css";
// обнуление
@import "./assets/scss/null.scss";
// цвета
@import "./assets/scss/colors.scss";
// общий
@import "./assets/scss/template.scss";
</style>
