<template>
   <b-modal id="pairOff"
            title="Отчет заказан"
            modal-class="request"
            centered
            no-fade
            no-stacking
            hide-footer>
      <p>Через некоторое время отчет будет доступен для скачивания.</p>
      <div class="btn">Продолжить</div>
   </b-modal>
</template>

<script>
export default {
name: "PairOff"
}
</script>

<style lang="scss">
#pairOff {
   p {
      margin-bottom: 45px;
   }
   .modal-dialog {
      max-width: 632px;
   }

   @media (max-width: 767px) {
      .modal-dialog {
         max-width: none;
      }
   }
}

</style>