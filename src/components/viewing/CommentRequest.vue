<template>
   <div class="CommentRequest">
      <p class="CommentRequest__title">{{ comment }}</p>

      <div class="CommentRequest__block-mobile">

         <textarea v-model.trim="commentTextarea"></textarea>

         <div class="CommentRequest__footer">
            <div class="btn" @click="sendComment">Добавить комментарий</div>
            <b-form-file placeholder="Word, pdf, png?? до 10 мб"></b-form-file>
         </div>

      </div>

   </div>
</template>

<script>
export default {
   name: "CommentRequest",
   data() {
      return {
         commentTextarea: '',
         comment: 'Комментарий к заявке',
      }
   },
   methods: {
      sendComment() {
         if(this.commentTextarea) {
            this.comment = this.commentTextarea
            this.commentTextarea = ''
         }
      }
   }
}
</script>

<style lang="scss" scoped>
.CommentRequest {
   width: 100%;

   textarea {
      height: 90px !important;
      margin-bottom: 33px;
   }

   .CommentRequest__title {
      margin-bottom: 30px;
   }

   .CommentRequest__footer {
      display: flex;
      align-items: center;

      .btn {
         flex-shrink: 0;
         margin-right: 20px;
      }
   }

   @media (max-width: 767px) {

      textarea {
         margin-top: 20px;
         height: 140px !important;
      }

      .CommentRequest__footer {
         flex-wrap: wrap;

         .btn {
            margin-right: 0;
            margin-bottom: 30px;
         }
      }

      .CommentRequest__block-mobile {
         width: calc(100% + 150px);
         margin-left: -150px;
      }
   }
}


</style>