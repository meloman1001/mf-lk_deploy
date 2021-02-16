<template>
   <div class="viewingCRM viewingAct request">
      <div class="wrapper">
         <div class="wrapper__block">

            <b-breadcrumb :items="breadcrumb"></b-breadcrumb>

            <p class="big-green-title">Акт по созданным заявкам CRM & FMC</p>

            <div class="tab-pane__title">Фильтр заявок</div>

            <b-tabs>
               <b-tab title="По дате создания" active>
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
                              </div>
                              <div v-b-modal.pairOff class="btn">Сформировать</div>

                           </form>

                           <ReportAct />

                        </b-tab>

                        <b-tab title="Канал продаж">
                           <form class="">
                              <div class="inputs-wrapper">
                                 <label class="label-input">
                                    <span>Канал продаж</span>
                                    <b-select :value="0" :options="filterChannel"/>
                                 </label>
                              </div>
                              <div v-b-modal.pairOff class="btn">Сформировать</div>

                           </form>

                           <ReportAct />
                        </b-tab>
                     </b-tabs>
                  </div>
               </b-tab>

               <b-tab title="По дате завершения">
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
                              </div>
                              <div v-b-modal.pairOff class="btn">Сформировать</div>

                           </form>

                           <ReportAct />

                        </b-tab>

                        <b-tab title="Канал продаж">
                           <form class="">
                              <div class="inputs-wrapper">
                                 <label class="label-input">
                                    <span>Канал продаж</span>
                                    <b-select :value="0" :options="filterChannel"/>
                                 </label>
                              </div>
                              <div v-b-modal.pairOff class="btn">Сформировать</div>

                           </form>

                           <ReportAct />
                        </b-tab>
                     </b-tabs>
                  </div>
               </b-tab>
            </b-tabs>


         </div>
      </div>
      <PairOff />
   </div>
</template>

<script>
import Datepicker from "vuejs-datepicker"
import {ru} from "vuejs-datepicker/dist/locale"
import PairOff from "@/components/modals/PairOff";
import ReportAct from "@/components/viewingAct/ReportAct";

export default {
   name: "viewingAct",
   components: {
      Datepicker,
      PairOff,
      ReportAct
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
               text: 'Акт по созданным заявкам CRM & FMC',
               active: true
            }
         ],
         filterSeller: [
            {value: 0, text: 'Выберите дилера', disabled: true},
            {value: 'a', text: '1'},
            {value: 'b', text: '2'},
         ],
         filterChannel: [
            {value: 0, text: 'Выберите канал продаж', disabled: true},
            {value: 'a', text: '1'},
            {value: 'b', text: '2'},
         ],
      }
   },

}
</script>

<style lang="scss">
.viewingAct {

   .big-green-title {
      margin-bottom: 36px;
   }

   .tab-pane {
      padding-top: 49px;
   }

   .tab-pane__title {
      margin-bottom: 37px;
   }

   .viewingCRM__date-block {
      margin-bottom: 40px;
   }

   form {
      .inputs-wrapper {
         margin-bottom: 30px;
      }

      .btn {
         margin-left: 149px;
      }
   }

   @media (max-width: 767px) {
      .big-green-title {
         margin-bottom: 26px;
      }

      .tab-pane {
         padding-top: 37px;
      }

      .tab-pane__title {
         margin-bottom: 25px;
      }

      form {
         .btn {
            margin-left: 0;
         }
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