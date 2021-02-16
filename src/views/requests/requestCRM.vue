<template>
   <div class="content request">
      <div class="wrapper">
         <div class="wrapper__block">

            <b-breadcrumb :items="breadcrumb"></b-breadcrumb>

            <p class="big-green-title">Заявка на подключение CRM</p>

            <div class="request__tabs">

               <b-tabs v-show="pageFormCRM">
                  <b-tab active>
                     <template #title>Новый клиент/ <br> Поиск по адресу</template>
                     <pageFormCRM/>
                  </b-tab>
                  <b-tab title="Поиск по ФИО или телефону">
                     <template #title>Поиск по ФИО <br> или телефону</template>

                     <pageFormCRM_search @search="search" />

                     <div v-if="showResult" class="request__search-result">
                        <div class="tab-pane__title">Клиенты</div>
                        <ClientsTableCRM />
                        <div @click="GO_TO_PAGE_CRM(['pageFormCRM', 'pageFormCRM2'])"
                             class="btn">Заявка новому
                        </div>
                     </div>

                  </b-tab>
                  <b-tab title="Поиск по ЛС"></b-tab>
               </b-tabs>

            </div>

            <pageFormCRM2 v-show="pageFormCRM2"/>
            <pageFormCRM3 v-show="pageFormCRM3"/>
            <pageFormCRM4 v-show="pageFormCRM4"/>
            <pageFormCRM_search2 v-show="pageFormCRM_search2" />

         </div>
      </div>
   </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import pageFormCRM from "@/components/requestCRM/pageFormCRM";
import pageFormCRM2 from "@/components/requestCRM/pageFormCRM2";
import pageFormCRM3 from "@/components/requestCRM/pageFormCRM3";
import pageFormCRM4 from "@/components/requestCRM/pageFormCRM4";
import ClientsTableCRM from "@/components/requestCRM/ClientsTableCRM";
import pageFormCRM_search from "@/components/requestCRM/pageFormCRM_search";
import pageFormCRM_search2 from "@/components/requestCRM/pageFormCRM_search2";

export default {
   name: "create-CRM",
   components: {
      pageFormCRM,
      pageFormCRM2,
      pageFormCRM3,
      pageFormCRM4,
      ClientsTableCRM,
      pageFormCRM_search,
      pageFormCRM_search2,
   },

   data() {
      return {
         breadcrumb: [
            {
               text: 'Главная страница',
               to: {name: 'home'}
            },
            {
               text: 'Заявка на подключение CRM',
               active: true
            }
         ],
         showResult: false,
         searchLName: '',
         searchName: '',
         searchPatronymic: '',
         searchPhone: '',
      }
   },

   computed: {
      ...mapGetters( [
         'pageFormCRM',
         'pageFormCRM2',
         'pageFormCRM3',
         'pageFormCRM4',
         'pageFormCRM_search2',
      ] )
   },

   methods: {
      ...mapMutations([
         'GO_TO_PAGE_CRM'
      ]),
      search() {
         this.showResult = !this.showResult
      }
   }

}
</script>

<style lang="scss">
.request {
   padding: 18px 0 37px;

   form {
      position: relative;

      &:nth-child(2) {
         margin-top: 35px;
      }
   }

   .tab-pane__input.checked {
      margin-top: -10px;
      color: var(--mf-green);

      div {
         padding-left: 25px;
         background: url('../../assets/svg/ok.svg') 0 50% / contain no-repeat;
      }
   }

   .request__clients {
      margin-top: 50px;

      p {
         line-height: 20px;
         margin-bottom: 25px;
      }

      button {
         padding: 0 33px;
      }
   }

   .tab-pane {
      padding-top: 45px;
   }

   .tab-pane__title {
      font-size: 30px;
      margin-bottom: 35px;
      letter-spacing: -0.4px;
   }

   .tab-pane__input {
      margin-bottom: 24px;
      display: flex;

      &:last-child {
         margin-bottom: 0;
      }

      &.mob-phone label {
         display: block;
      }

      > label {
         width: 150px;
         line-height: 20px;
         display: flex;
         align-items: center;
         flex-shrink: 0;

         &.star:after {
            content: ' *';
            color: #E96980;
            margin-left: 5px;
         }
      }

      > input {
         height: 40px;
         max-width: 290px;
         width: 100%;
      }

      .btn {
         margin-top: 8px;
         padding: 0 30px;
      }
   }

   .tab-pane__input-comment {
      line-height: 20px;
   }

   .tab-pane__input-radio {
      display: flex;
      align-items: center;

      label {
         cursor: pointer;
      }
   }

   .input-radio {
      margin-right: 20px;

      &:last-child {
         margin-right: 0;
      }
   }

   .request__search-result {
      margin-top: 50px;
   }

   @media (max-width: 767px) {
      padding: 0 0 65px;

      .wrapper {
         padding: 0;
      }

      .wrapper__block {
         padding: 25px 15px 40px;
      }

      .tab-pane__title {
         font-size: 24px;
      }

      .tab-pane__input {
         flex-wrap: wrap;

         &.mob-phone label {
            display: flex;
         }

         > label {
            margin-bottom: 10px;
         }

         &:last-child {
            label {
               display: none;
            }
         }
      }

      .tab-pane__input_text {
         flex-wrap: nowrap;

         > label {
            margin-bottom: 0;
            align-self: flex-start;
         }
      }

   }

}
</style>