<template>
   <div class="request__info">
      <div class="tab-pane__title">
         4/4. Подключения
      </div>

      <div class="info__content">
         <div class="info__row">
            <p>Данные клиента</p>
            <p>Иванов Иван</p>
         </div>

         <div class="info__row">
            <p>Контактный номер</p>
            <p>+7 985 456-56-56</p>
         </div>

         <div class="info__row">
            <p>Адрес</p>
            <p>127006 Россия, Москва г, пер. Оружейный, д. 41, кв. 1</p>
         </div>

         <div class="info__row">
            <p>Тарифный план</p>
            <p>Объединяй! Хит</p>
         </div>

         <div class="info__row">
            <p>UTM-метка</p>
            <p></p>
         </div>

         <div class="info__row">
            <p>Доп услуги</p>
            <p>Аренда ТВ - приставки - 1 шт, 99 ₽ в месяц</p>
         </div>

         <div class="info__row">
            <p>Скидка</p>
            <p></p>
         </div>

         <div class="info__row">
            <p>Сумма активации</p>
            <p>850 ₽</p>
         </div>

         <div class="info__row">
            <p>Абонентская плата</p>
            <p>850 ₽</p>
         </div>

         <div class="info__row">
            <p>Абонентская плата со скидкой</p>
            <p>0 ₽ в месяц</p>
         </div>

         <div class="info__row">
            <p>Комментарий</p>
            <p></p>
         </div>

      </div>

      <div class="btns">
         <div class="row-btn-back">
            <div @click="GO_TO_PAGE_CRM(['pageFormCRM4', 'pageFormCRM3'])"
                 class="btn back">Назад
            </div>
         </div>
         <div class="btn cancel" @click="$router.push({name: 'home'})">Отменить</div>
         <div class="btn"
              v-b-modal.modalCongratulations
         >Создать заявку
         </div>
         <br>

         <ModalCongratulations/>
         <ModalChooseDate/>
         <ModalConnection/>
         <ModalConnectionAssigned/>
      </div>

   </div>
</template>

<script>
import ModalCongratulations from "@/components/modals/requestCRM/ModalCongratulations";
import ModalChooseDate from "@/components/modals/requestCRM/ModalChooseDate";
import ModalConnection from "@/components/modals/requestCRM/ModalConnection";
import ModalConnectionAssigned from "@/components/modals/requestCRM/ModalConnectionAssigned";
import {mapMutations} from "vuex";

export default {
   name: "pageFormCRM4",

   components: {
      ModalCongratulations,
      ModalChooseDate,
      ModalConnection,
      ModalConnectionAssigned
   },
   methods: {
      ...mapMutations([
         'GO_TO_PAGE_CRM'
      ])
   }

}
</script>

<style lang="scss" scoped>
.request__info {

   .info__content {
      padding-top: 15px;
      margin-bottom: 25px;
   }

   .info__row {
      display: flex;
      margin-bottom: 30px;
      line-height: 20px;

      &:last-child {
         margin-bottom: 0;
      }

      p:first-child {
         width: 182px;
         flex-shrink: 0;
      }
   }

   .btns {
      display: flex;
      flex-wrap: wrap;
   }

   .row-btn-back {
      margin-right: auto;
   }

   .btn.cancel {
      margin-right: 20px;
   }

   @media (max-width: 767px) {

      .info__row {
         p:first-child {
            width: 150px;
         }
      }

      .btns {
         justify-content: space-between;
      }

      .btn:not(.back) {
         margin-bottom: 30px;
      }

      .row-btn-back {
         order: 1;
         width: 100%;
      }
   }

}
</style>