<template>
   <div class="total-price">

      <div class="total-price__one-time">
         <span>Сумма разового списания:</span>
         <span>0 ₽</span>
      </div>

      <div class="total-price__one-time">
         <span>Абонентская плата:</span>
         <span>799 ₽/мес</span>
      </div>

      <div class="total-price__one-time">
         <span>Стоимость с учетом скидки:</span>
         <span>799 ₽/мес</span>
      </div>

      <div class="total-price__activation">
         <label>Активация online:</label>
         <div class="input-radio">

            <input type="radio"
                   v-model="activation"
                   name="activation"
                   id="activation-no"
                   value="no"
            >
            <label for="activation-no">Нет
               <label></label>
            </label>
         </div>
         <div class="input-radio">

            <input type="radio"
                   v-model="activation"
                   name="activation"
                   id="activation-yes"
                   value="yes"
            >
            <label for="activation-yes">Да
               <label></label>
            </label>
         </div>

         <b-form-select v-model="activation" :options="selectActivation"/>
      </div>

   </div>
</template>

<script>
export default {
   name: "TotalPrice",
   data() {
      return {
         activation: 'no',
         selectActivation: [
            {value: 'no', text: 'Нет'},
            {value: 'yes', text: 'Да'}
         ],
      }
   }
}
</script>

<style lang="scss" scoped>

.total-price {
   text-align: right;
   font-size: 19px;
   line-height: 25px;
   margin-bottom: 30px;

   span:last-child {
      font-weight: 500;
      margin-left: 5px;
   }

   .total-price__activation {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      margin-top: 20px;
      font-size: 14px;

      > label {
         margin-right: 35px;
      }
   }

   select {
      display: none;
   }

   @media (max-width: 767px) {
      font-size: 16px;

      .total-price__activation {

         > label {
            width: 100%;
            margin-bottom: 10px;
            margin-right: 0;
         }
      }

      .input-radio {
         display: none;
      }

      select {
         display: block;
         margin-left: auto;
         width: 100%;
         max-width: 290px;
      }
   }
}

</style>