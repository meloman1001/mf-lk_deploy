<template>
   <b-modal id="modalChooseDate"
            title="Выбор даты подключения"
            modal-class="request"
            centered
            no-fade
            no-stacking
            hide-footer>

      <div class="modal-row">
         <label>Желаемая дата <br> и время подключения </label>

         <datepicker :value="dateDesired"
                     @input="UPDATE_VALUE(['dateDesired', $event])"
                     input-class="datepicker"
                     :language="ru"
                     placeholder="Дата"
                     monday-first
                     :disabled-dates="disabledDates"
         />

         <b-select @change="UPDATE_VALUE(['timeDesired', $event])"
                   :value="timeDesired"
                   :options="time"
         />

      </div>

      <div class="modal-row">
         <label>Дата и время <br> подключения</label>

         <datepicker :value="dateConnection"
                     @input="UPDATE_VALUE(['dateConnection', $event])"
                     input-class="datepicker"
                     :language="ru"
                     placeholder="Дата"
                     monday-first
                     :disabled-dates="disabledDates"
         />

         <b-select @change="UPDATE_VALUE(['timeConnection', $event])"
                   :value="timeConnection"
                   :options="time"
         />

      </div>

      <div class="modal-row">
         <label class="empty"></label>
         <p>Доступ ограничен в выходные дни и праздничные, только ЛА</p>
      </div>

      <button class="btn"
              :disabled="!validate"
              @click="CONFIRM_DATE_DESIRED"
              v-b-modal.modalConnection
      >Подтвердить
      </button>


   </b-modal>
</template>

<script>
import Datepicker from "vuejs-datepicker"
import {ru} from 'vuejs-datepicker/dist/locale'
import {mapGetters, mapMutations} from 'vuex'

export default {
   name: "ModalChooseDate",
   components: {
      Datepicker
   },

   data() {
      return {
         ru: ru,
         disabledDates: {
            to: new Date( Date.now() - 43200000 ),
            from: new Date( Date.now() + 86400000 * 27 )
         },
         time: [
            {value: null, text: 'Время', disabled: true},
            {value: 'с 9:00 до 10:00', text: 'с 9:00 до 10:00'},
            {value: 'с 10:00 до 11:00', text: 'с 10:00 до 11:00'},
            {value: 'с 11:00 до 12:00', text: 'с 11:00 до 12:00'},
            {value: 'с 12:00 до 13:00', text: 'с 12:00 до 13:00'},
            {value: 'с 13:00 до 14:00', text: 'с 13:00 до 14:00'},
            {value: 'с 14:00 до 15:00', text: 'с 14:00 до 15:00'},
            {value: 'с 15:00 до 16:00', text: 'с 15:00 до 16:00'},
            {value: 'с 16:00 до 17:00', text: 'с 16:00 до 17:00'},
            {value: 'с 17:00 до 18:00', text: 'с 17:00 до 18:00'},
            {value: 'с 18:00 до 19:00', text: 'с 18:00 до 19:00'},
            {value: 'с 19:00 до 20:00', text: 'с 19:00 до 20:00'},
            {value: 'с 20:00 до 21:00', text: 'с 20:00 до 21:00'},
         ]
      }
   },

   computed: {
      ...mapGetters( [
         'dateDesired',
         'dateConnection',
         'timeDesired',
         'timeConnection'
      ] ),
      validate() {
         return this.$store.getters.dateDesired !== '' &&
            this.$store.getters.dateConnection !== '' &&
            !!this.timeDesired &&
            !!this.timeConnection
      },
      dateDesired: {
         get() {
            return this.$store.state.dateDesired
         },
      },
      dateConnection: {
         get() {
            return this.$store.state.dateConnection
         },
      },
   },
   methods: {
      ...mapMutations([
         'CONFIRM_DATE_DESIRED',
         'UPDATE_VALUE'
      ])
   }
}
</script>

<style lang="scss">
#modalChooseDate {

   .cell.day:not(.disabled):not(.blank) {
      background-color: rgba(0, 185, 86, .15);
   }

   .modal-row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-bottom: 24px;

      &:last-child {
         margin-bottom: 0;
      }
   }

   label {
      min-width: 190px;
      line-height: 20px;
   }

   .datepicker {
      width: 230px;
      margin-right: 20px;
      background: url('../../../assets/svg/Calendar_input.svg') calc(100% - 15px) 50% / 14px no-repeat;
   }

   select {
      max-width: 179px;
   }

   p {
      max-width: 352px;
      line-height: 20px;
   }

   @media (max-width: 767px) {
      br {
         display: none;
      }

      label {
         margin-bottom: 10px;
      }

      input, select, .vdp-datepicker {
         max-width: 290px;
         width: 100% !important;
         margin-right: 0;
      }

      .vdp-datepicker {
         margin-bottom: 20px;
      }

      .empty {
         display: none;
      }
   }
}
</style>