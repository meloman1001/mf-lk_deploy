<template>
   <footer class="footer">
      <div class="wrapper">
         <p class="footer__copyright">© 2020 ПАО «МегаФон»</p>
         <p class="footer__privacy-policy">Продолжая использовать наш сайт, вы даете согласие на обработку файлов
            Cookies и других пользовательских
            данных, в соответствии с <a href="#">Политикой конфиденциальности</a>.</p>
      </div>
   </footer>
</template>

<script>
export default {
   name: "Footer"
}
</script>

<style lang="scss" scoped>
.footer {
   color: var(--text-gray);
   padding-bottom: 79px;

   .wrapper {
      display: flex;
      justify-content: space-between;
   }

   .footer__copyright {
      font-size: 14px;
   }

   .footer__privacy-policy {
      max-width: 400px;
      font-size: 12px;
      line-height: 16px;

      a {
         color: var(--text-gray);
         text-decoration: underline;
      }
   }

   @media (max-width: 767px) {
      padding-bottom: 31px;

      .wrapper {
         flex-wrap: wrap;
      }

      .footer__copyright {
         width: 100%;
         margin-bottom: 15px;
      }
   }

}
</style>