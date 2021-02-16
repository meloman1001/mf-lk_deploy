<template>
   <div class="viewingCRM request">
      <div class="wrapper">
         <div class="wrapper__block">

            <b-breadcrumb :items="breadcrumb"></b-breadcrumb>

            <p class="big-green-title">Просмотр заявок CRM</p>

            <div class="tab-pane__title">Фильтр заявок</div>

            <div class="viewingCRM__date-block">
               <div class="label-input">
                  <span>Начальная дата</span>

                  <datepicker input-class="datepicker"
                              :language="ru"
                              placeholder="Дата"
                              monday-first
                  />
               </div>

               <div class="label-input">
                  <span>Конечная дата</span>

                  <datepicker input-class="datepicker"
                              :language="ru"
                              placeholder="Дата"
                              monday-first
                  />
               </div>
            </div>

            <div class="request__tabs">

               <b-tabs>
                  <b-tab title="Дилер" active>
                     <form class="">
                        <div class="inputs-wrapper">
                           <label class="label-input">
                              <span>Дилер</span>
                              <b-select :value="0" :options="filterSeller"/>
                           </label>

                           <label class="label-input">
                              <span>Номер заявки</span>
                              <input type="text"/>
                           </label>

                           <label class="label-input">
                              <span>ФИО абонента</span>
                              <input type="text"/>
                           </label>

                           <label class="label-input">
                              <span>Глобальный статус</span>
                              <b-select :value="0" :options="filterGlobalStatus"/>
                           </label>

                           <label class="label-input">
                              <span>По статусу</span>
                              <b-select :value="0" :options="filterStatus"/>
                           </label>
                        </div>

                        <button class="btn">Найти</button>
                     </form>

                     <RequestsCRM/>

                  </b-tab>

                  <b-tab title="Канал продаж">
                     <form class="">
                        <div class="inputs-wrapper">
                           <label class="label-input">
                              <span>Канал продаж</span>
                              <b-select :value="0" :options="filterChannel"/>
                           </label>

                           <label class="label-input">
                              <span>Номер заявки</span>
                              <input type="text"/>
                           </label>

                           <label class="label-input">
                              <span>ФИО абонента</span>
                              <input type="text"/>
                           </label>

                           <label class="label-input">
                              <span>Глобальный статус</span>
                              <b-select :value="0" :options="filterGlobalStatus"/>
                           </label>

                           <label class="label-input">
                              <span>По статусу</span>
                              <b-select :value="0" :options="filterStatus"/>
                           </label>
                        </div>

                        <button class="btn">Найти</button>
                     </form>

                     <RequestsCRM/>
                  </b-tab>
               </b-tabs>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import Datepicker from "vuejs-datepicker"
import {ru} from 'vuejs-datepicker/dist/locale'
import RequestsCRM from "@/components/viewing/RequestsCRM";

export default {
   name: "viewingCRM",
   components: {
      Datepicker,
      RequestsCRM
   },
   data() {
      return {
         ru: ru,
         breadcrumb: [
            {
               text: 'Главная страница',
               to: {name: 'home'}
            },
            {
               text: 'Просмотр заявок CRM',
               active: true
            }
         ],
         filterSeller: [
            {value: 0, text: 'Выберите дилера', disabled: true},
            {value: 'a', text: '1'},
            {value: 'b', text: '2'},
         ],
         filterChannel:  [
            {value: 0, text: 'Выберите канал продаж', disabled: true},
            {value: 'a', text: '1'},
            {value: 'b', text: '2'},
         ],
         filterGlobalStatus: [
            {value: 0, text: 'Выберите статус', disabled: true},
            {value: 'a', text: '1'},
            {value: 'b', text: '2'},
         ],
         filterStatus: [
            {value: 0, text: 'Выберите статус', disabled: true},
            {value: 'a', text: '1'},
            {value: 'b', text: '2'},
         ],
      }
   },
}
</script>

<style lang="scss">
.viewingCRM {

   .viewingCRM__date-block {
      margin-bottom: 40px;
   }

   form {
      .inputs-wrapper {
         margin-bottom: 30px;
      }

      button {
         margin-left: 149px;
      }
   }

   @media (max-width: 767px) {
      form {
         button {
            margin-left: 0;
         }
      }

      .big-green-title {
         margin-bottom: 24px;
      }

      .tab-pane__title {
         margin-bottom: 22px;
      }

      .viewingCRM__date-block {
         margin-bottom: 30px;
      }

      .tab-pane {
         padding-top: 32px;
      }

      .label-input {
         margin-bottom: 21px;
      }
   }
}

.viewingCRM__requests {
   padding-top: 50px;

   @media (max-width: 767px) {
      padding-top: 40px;

      .tab-pane__title {
         margin-bottom: 20px;
      }
   }

}
</style>