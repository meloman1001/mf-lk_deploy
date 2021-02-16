<template>
<div class="PackagesFilters">

   <div class="packages__title">
      Фильтр для поиска пакетов XRM <span class="text-green">{{ title }}</span>
   </div>

   <form @submit.prevent="submit">
      <label class="label-input">
         <span>Регион</span>
         <b-select :value="0" :options="regions"></b-select>
      </label>

      <label class="label-input">
         <span>Нас. Пункт</span>
         <input type="text" value="Все населенные пункты">
      </label>

      <label class="label-input">
         <span>Пакет</span>
         <input type="text" value="Название">
      </label>

      <button class="btn">Найти</button>
   </form>

</div>
</template>

<script>
export default {
   name: "PackagesFilters",
   props: ['title'],
   data() {
      return {
         regions: [
            {value: 0, text: 'Все регионы'}
         ],
         // area: [
         //    {value: 0, text: 'Все населенные пункты'}
         // ],
         // packages: [
         //    {value: 0, text: 'Название'}
         // ],
      }
   },
   methods: {
      submit() {
         console.log('submit')
      }
   }
}
</script>

<style lang="scss" scoped>

.PackagesFilters {
   margin-top: 13px;
   margin-bottom: 54px;

   form {
      margin-top: 0;
   }

   .btn {
      margin-left: 147px;
      margin-top: 6px;
   }
}

.packages__title {
   font-size: 30px;
   line-height: 43px;
   margin-bottom: 29px;
}

@media (max-width: 767px) {
   .PackagesFilters {
      margin-top: 0;
      margin-bottom: 43px;

      .btn {
         margin-top: 11px;
         margin-left: 0;
      }
   }

   .packages__title {
      font-size: 24px;
      line-height: 32px;
      margin-bottom: 19px;
   }

   .label-input {
      margin-bottom: 19px;
   }
}

</style>