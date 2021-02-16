<template>
   <b-modal id="modalConnectionAssigned"
            title="Предварительная заявка оформлена"
            modal-class="request"
            centered
            no-fade
            no-stacking
            hide-footer>
      <div class="btns">
         <div class="btn">Перейти в заявку</div>
         <div class="btn" @click="newRequest">Новая заявка</div>
      </div>
   </b-modal>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
   name: "ModalConnectionAssigned",
   computed: {
      ...mapGetters( [
         'timeDesired',
         'timeConnection',
         'dateDesired',
         'dateConnection',
         'dateDesiredConfirm',
         'dateConnectionConfirm',
         'requests',
      ] )
   },
   methods: {
      ...mapMutations([
         'NEW_REQUEST_CRM',
         'NEW_REQUEST_FMC',
      ]),
      newRequest() {
         if(this.$store.getters.pageFormCRM4) {
            this.NEW_REQUEST_CRM()
            document.querySelectorAll( '.request form' ).forEach( form => {
               form.reset()
            } )
         }
         if(this.$store.getters.pageFormFMC7) {
            this.NEW_REQUEST_FMC()
         }
         this.$bvModal.hide( 'modalConnectionAssigned' )

      }
   },
}
</script>

<style lang="scss">

#modalConnectionAssigned {
   .modal-dialog {
      max-width: 632px;
   }

   .btns {
      margin-top: 15px;
      display: flex;
      flex-wrap: wrap;
   }

   .btn {
      margin-right: 20px;

      &:last-child {
         margin-right: 0;
      }
   }

   @media (max-width: 767px) {
      .btn:not(:last-child) {
         margin-bottom: 20px;
      }

      .modal-dialog {
         max-width: none;
      }
   }
}


</style>