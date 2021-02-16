<template>
   <div class="request__info request">
      <div class="wrapper">
         <div class="wrapper__block">
            <b-breadcrumb :items="breadcrumb"></b-breadcrumb>

            <p class="big-green-title">Заявка CRM</p>

            <div class="tab-pane__title">
               Req2222222
            </div>

            <div class="info__content">
               <div class="info__row">
                  <p>Дата</p>
                  <p>25.10.2020 13:00</p>
               </div>

               <div class="info__row">
                  <p>Город</p>
                  <p>Москва</p>
               </div>

               <div class="info__row">
                  <p>Номер</p>
                  <p>Req2222222</p>
               </div>

               <div class="info__row">
                  <p>Тип</p>
                  <p>Новый клиент</p>
               </div>

               <div class="info__row">
                  <p>Онлайн подключение</p>
                  <p>Нет</p>
               </div>

               <div class="info__row">
                  <p>Дилер</p>
                  <p></p>
               </div>

               <div class="info__row">
                  <p>Глобальный статус</p>
                  <p>Активный</p>
               </div>

               <div class="info__row">
                  <p>Автоматическая отмена заявки</p>
                  <p>Нет</p>
               </div>

               <div class="info__row">
                  <p>Причина отмены заявки</p>
                  <p></p>
               </div>

               <div class="info__row">
                  <p>Комментарий при отмене</p>
                  <p></p>
               </div>

               <div class="info__row">
                  <p>Статус</p>
                  <p>Выполнение подключения</p>
               </div>

               <div class="info__row">
                  <p>Дата закрытия</p>
                  <p></p>
               </div>

               <div class="info__row">
                  <p>Адрес</p>
                  <p>Москва, Оружейный ,41, 1</p>
               </div>

               <div class="info__row">
                  <p>Частный сектор</p>
                  <p>Нет</p>
               </div>

               <div class="info__row">
                  <p>ФИО</p>
                  <p>Иванов Иван Иванович</p>
               </div>

               <div class="info__row">
                  <p>Лицевой счет</p>
                  <p>12345678</p>
               </div>

               <div class="info__row">
                  <p>Пакет при регистрации</p>
                  <p>—</p>
               </div>

               <div class="info__row">
                  <p>Пакет</p>
                  <p>—</p>
               </div>

               <div class="info__row info__row_table">
                  <p>Продукт при регистрации</p>
                  <ViewingMoreTable />
               </div>

               <div class="info__row info__row_table">
                  <p>Продукт</p>
                  <ViewingMoreTable />
               </div>

               <div class="info__row">
                  <p>Сумма ежемесячных списаний</p>
                  <p>0 ₽</p>
               </div>

               <div class="info__row">
                  <p>Сумма разовых списаний</p>
                  <p>0 ₽</p>
               </div>

               <div class="info__row">
                  <p>UTM-метка</p>
                  <p></p>
               </div>

               <div class="info__row">
                  <p>Мобильный телефон</p>
                  <p>+7 999 999-99-99</p>
               </div>

               <div class="info__row">
                  <p>Комментарий при создании</p>
                  <p></p>
               </div>

               <div class="info__row">
                  <p>Дата подключения</p>
                  <p><span class="text-date">01.12.2020 с 13:00 до 14:00</span></p>
               </div>

               <div class="info__row">
                  <p>Отложено по</p>
                  <p></p>
               </div>

               <div class="info__row">
                  <p>Отложено по причине</p>
                  <p></p>
               </div>

               <div class="info__row">
                  <p>Доступные переводы статуса</p>
                  <div class="info__btns">
                     <div class="btn cancel-revers">Отложить</div>
                     <div class="btn cancel">Отменить</div>
                  </div>
               </div>

               <div class="info__row">
                  <p>Автоматизиро&shy;ванная обработка заявки</p>
                  <p>Автоматическая обработка успешно завершена</p>
               </div>

               <div class="info__row">
                  <p>Канал продаж</p>
                  <p>Агент РФ</p>
               </div>

               <div class="info__row">
                  <p>Комментарий к заявке</p>
                  <CommentRequest  />
               </div>

            </div>
         </div>
      </div>


   </div>
</template>

<script>
import ViewingMoreTable from "@/components/viewing/ViewingMoreTable";
import CommentRequest from "@/components/viewing/CommentRequest";

export default {
   name: "viewingCRM_more",
   components: {
      ViewingMoreTable,
      CommentRequest
   },
   data() {
      return {
         breadcrumb: [
            {
               text: 'Главная страница',
               to: {name: 'home'}
            },
            {
               text: 'Просмотр заявок CRM',
               to: {name: 'viewingCRM'}
            },{
               text: 'Заявка на подключение CRM',
               active: true
            }
         ],
      }
   },
   methods: {}
}
</script>

<style lang="scss" scoped>
.request__info {

   .info__content {
      padding-top: 15px;
   }

   .info__btns {
      height: 0;
      margin-top: -13px;
      display: flex;
      flex-wrap: wrap;

      .btn {
         margin-right: 20px;

         &:last-child {
            margin-bottom: 0;
         }
      }
   }

   .info__row {
      display: flex;
      margin-bottom: 27px;
      line-height: 20px;

      &:last-child {
         margin-bottom: 0;
      }

      p:first-child {
         width: 260px;
         flex-shrink: 0;
      }
   }

   .info__row_table {
      margin-bottom: 0 !important;

      @media (max-width: 840px) {
         flex-wrap: wrap;

         .table-tariff {
            margin-top: 30px;
         }
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

      .info__content {
         padding-top: 0;
         margin-top: -5px;
      }

      .info__btns {
         height: auto;
         margin-top: 0;

         .btn:not(:last-child) {
            margin-right: 20px;
            margin-bottom: 20px;
         }
      }

      .info__row {
         margin-bottom: 29px;

         p:first-child {
            width: 150px;
            padding-right: 30px;
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