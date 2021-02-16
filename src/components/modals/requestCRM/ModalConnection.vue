<template>
   <b-modal id="modalConnection"
            title="Назначено подключение"
            modal-class="request"
            centered
            no-fade
            no-stacking
            hide-footer>
      <div class="connection__data">

         <p>
            Желаемая дата:
            <span>
               {{ dateDesiredConfirm | dateFormat('DD.MM.YYYY') }}
               {{ timeDesired }}
            </span>
         </p>

         <p>
            Дата подключения:
            <span>
               {{ dateConnectionConfirm | dateFormat('DD.MM.YYYY') }}
               {{ timeConnection }}
            </span>
         </p>

      </div>

      <p class="confirm">
         Нажимая кнопку «Назначить на мастера», я подтверждаю отправку заявки непосредственно исполнителю без участия
         сотрудников Контактного Центра
      </p>

      <div class="btns">
         <button class="btn"
                 v-b-modal.modalConnectionAssigned
                 @click="pushRequest"
         >
            Отправить заявку в КЦ
         </button>
         <button class="btn">Назначить на мастера</button>
         <button class="btn back">Отмена</button>
      </div>
   </b-modal>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
   name: "modalConnection",
   computed: mapGetters( [
      'timeDesired',
      'timeConnection',
      'dateDesiredConfirm',
      'dateConnectionConfirm',
      'requests'
   ] ),
   methods: {
      pushRequest() {
         this.requests.push(
            new Object({
               timeDesired: this.timeDesired,
               timeConnection: this.timeConnection,
               dateDesiredConfirm: this.dateDesiredConfirm,
               dateConnectionConfirm: this.dateConnectionConfirm
            })
         )
         console.log(this.requests)
      }
   }

}
</script>

<style lang="scss" scoped>
#modalConnection {
   .btns {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
   }

   .btn {
      margin-right: 20px;

      &:last-child {
         margin: 0;
      }
   }

   p {
      line-height: 20px;

      span {
         font-weight: 500;
      }
   }

   .connection__data,
   .confirm {
      margin-bottom: 40px;
   }

   .confirm {
      max-width: 559px;
   }

   @media (max-width: 767px) {
      .btn {
         margin-bottom: 20px;

         &:nth-child(2) {
            margin-bottom: 40px;
         }
      }
   }

}
</style>