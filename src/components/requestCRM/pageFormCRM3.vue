<template>
   <div class="request__data-clients">

      <div class="tab-pane__title">
         3/4. Подключения
      </div>

      <section class="lk-home applications">
         <div class="options">
            <div v-for="block of blocks"
                 :key="block.id"
                 class="options__block"
                 v-b-modal.tariffs
            >
               <div class="options__name" v-html="block.name"></div>
               <div class="options__round_hover"></div>
               <div class="options__round"></div>
            </div>
         </div>
      </section>

      <template v-if="showTableTariff">
         <TableTariffResult />
         <TotalPrice/>
      </template>

      <div class="data-clients__btns">
         <div class="btn back"
              @click="GO_TO_PAGE_CRM(['pageFormCRM3', 'pageFormCRM2'] )">Назад
         </div>

         <div v-if="showTableTariff" class="btn"
              @click="GO_TO_PAGE_CRM(['pageFormCRM3', 'pageFormCRM4'])">Подтвердить
         </div>
      </div>

      <ModalTariffs />
   </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import ModalTariffs from "@/components/modals/requestCRM/ModalTariffs";
import TotalPrice from "@/components/requestCRM/TotalPrice";
import TableTariffResult from "@/components/requestCRM/TableTariffResult";

export default {
   name: "pageFormCRM3",
   components: {
      ModalTariffs,
      TableTariffResult,
      TotalPrice
   },

   data() {
      return {
         activation: 'no',
         selectActivation: [
            {value: 'no', text: 'Нет'},
            {value: 'yes', text: 'Да'}
         ],
         blocks: [
            {name: 'Выбрать тариф'},
            {name: 'Выбрать <br> пакет услуг'},
         ]
      }
   },

   computed: {
      ...mapGetters([
         'showDelete',
         'showTableTariff',
      ])
   },
   methods: {
      ...mapMutations([
         'GO_TO_PAGE_CRM',
      ])
   }
}
</script>


<style lang="scss" scoped>
.lk-home {
   margin-bottom: 34px;

   .options__block {
      box-shadow: 0 0 6px #00000026;
      height: 97px;
      width: 100% !important;
      padding: 0 0 0 25px;
      max-width: 354px;
      display: flex;
      align-self: center;
      font-size: 19px;
      line-height: 30px;
      font-weight: 400;
      cursor: pointer;
      transition: .3s;

      .options__round_hover {
         bottom: calc(50% - 17px);
         right: 41px;
      }

      &:hover {
         box-shadow: 0 0 16px rgb(0 0 0 / 15%);

         .options__round_hover {
            bottom: calc(50% - 17px);
            right: 41px;
            transform: scale(4.5);
         }
      }
   }

   .options__round {
      width: 56px;
      height: 56px;
      bottom: calc(50% - 28px);
      right: 30px;
      border: 3px solid var(--mf-green)
   }

   .options__name {
      display: flex;
      align-self: center;
   }


   @media (max-width: 767px) {

      .options__block {
         background: #fff;
         margin-bottom: 20px;
         border: 0;
         width: 100%;
         max-width: none;
         padding-right: 85px;

         .options__round_hover {
            left: auto;
         }

         &:hover .options__round_hover {
            left: auto;
         }
      }

      .options__round {
         left: auto;
      }
   }

}

.data-clients__btns {
   display: flex;
   justify-content: space-between;
}


</style>