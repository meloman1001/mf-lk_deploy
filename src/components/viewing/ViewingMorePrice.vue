<template>
   <div class="ViewingMorePrice">
      <p>Ежемесячные списания: <span>0 ₽</span></p>
      <p>Ежемесячные со скидкой: <span>0 ₽/мес</span></p>
      <p>Разовые: <span>0 ₽/мес</span></p>
   </div>
</template>

<script>
export default {
name: "ViewingMorePrice"
}
</script>

<style lang="scss" scoped>
.ViewingMorePrice {
   margin-top: 23px;
   margin-bottom: 30px;
   text-align: right;

   p {
      font-size: 19px;
      line-height: 25px;
   }

   span {
      font-weight: 500;
   }

   @media (max-width: 767px) {
      p {
         font-size: 16px;
      }
   }
}

</style>