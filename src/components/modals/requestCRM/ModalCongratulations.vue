<template>
   <b-modal id="modalCongratulations"
            title="Поздравляем!"
            modal-class="request"
            centered
            no-fade
            no-stacking
            hide-footer>

      <div class="req-request">
         Создана заявка <span>Req 2345436</span>
      </div>

      <div class="choose-time">
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22">
            <path id="Calendar_24" d="M26,6H21V4H19V6H13V4H11V6H6V26H26ZM11,8v2h2V8h6v2h2V8h3v4H8V8ZM8,24V14H24V24Z"
                  transform="translate(-6 -4)"/>
         </svg>
         Выбрать<span v-b-modal.modalChooseDate>
         дату и время подключения</span>
      </div>

      <div class="btn">Продолжить</div>

   </b-modal>
</template>

<script>
export default {
   name: "modalCongratulations",
   data() {
      return {}
   },
   methods: {}
}
</script>

<style lang="scss">
#modalCongratulations.modal {

   .modal-dialog {
      max-width: 632px;
   }

   .req-request {
      margin-bottom: 20px;

      span {
         color: var(--text-blue);
      }
   }

   .choose-time {
      display: flex;
      align-items: center;
      margin-bottom: 60px;

      svg {
         margin-right: 14px;
      }

      span {
         color: var(--text-blue);
         border-bottom: 1px dashed;
         cursor: pointer;
         margin-left: 5px;

         &:hover {
            border-bottom: 1px solid;
         }
      }
   }

   @media (max-width: 767px) {
      .modal-dialog {
         max-width: none;
      }
   }
}
</style>