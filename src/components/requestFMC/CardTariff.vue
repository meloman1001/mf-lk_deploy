<template>
   <VueSlickCarousel class="card-tariff-row" v-bind="slickOptions">
      <div class="card-tariff" v-for="tariff of tariffs" :key="tariff.name">
         <div class="card-tariff__wrapper">

            <div class="card-tariff__head">
               <div class="card-tariff__head-title" v-html="tariff.name"></div>
               <div v-if='tariff.recommend' class="card-tariff__recommend">Рекомендованный</div>
            </div>

            <div class="card-tariff__body">

               <div v-if="tariff.call" class="card-tariff__body-block">
                  <div class="card-tariff__body-title">Звонки</div>
                  <div class="card-tariff__body-text">{{ tariff.call }}</div>
               </div>

               <div v-if="tariff.mobInternet" class="card-tariff__body-block">
                  <div class="card-tariff__body-title">Мобильный интернет</div>
                  <div class="card-tariff__body-text">{{ tariff.mobInternet }}</div>
               </div>

               <div v-if="tariff.homeInternet" class="card-tariff__body-block">
                  <div class="card-tariff__body-title">Домашний интернет</div>
                  <div class="card-tariff__body-text" v-for="home of tariff.homeInternet" :key="home.id">
                     <p>{{ home }}</p>
                  </div>
               </div>

               <div v-if="tariff.tvChannels" class="card-tariff__body-block">
                  <div class="card-tariff__body-title">Каналы ТВ</div>
                  <div class="card-tariff__body-text">{{ tariff.tvChannels }}</div>
               </div>

               <div v-if="tariff.services" class="card-tariff__body-block">
                  <div class="card-tariff__body-title">Доп. сервисы</div>
                  <div class="card-tariff__body-text">{{ tariff.services }}</div>
               </div>

            </div>

            <div class="card-tariff__footer">
               <p>{{ tariff.price }} ₽</p>

               <div class="input-radio-tariff">

                  <input type="radio"
                         v-model="tariffsRadio"
                         name="tariffsRadio"
                         :id="tariff.name"
                         :value="tariff.price"
                         @change="UPDATE_PRICE(tariffsRadio)"
                  >
                  <label v-if="tariffsRadio === tariff.price" class="btn">Выбран</label>
                  <label v-else :for="tariff.name" class="btn back">Выбрать</label>
               </div>

            </div>
         </div>
      </div>
   </VueSlickCarousel>
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import {mapMutations} from "vuex";

export default {
   name: "CardTariff",
   components: {
      VueSlickCarousel
   },
   props: ['tariffs'],
   data() {
      return {
         tariffsRadio: '',
         slickOptions: {
            slidesToShow: 4,
            arrows: false,
            draggable: false,
            responsive: [
               {
                  breakpoint: 767,
                  settings: {
                     slidesToShow: 1,
                     draggable: true,
                     centerMode: true,
                     infinite: false,
                     dots: true
                  }
               }
            ]
         }
      }
   },
   methods: {
      ...mapMutations([
         'UPDATE_PRICE'
      ])
   }
}
</script>

<style lang="scss">

.input-radio-tariff {
   input {
      display: none;
   }

   label {
      width: 100%;
   }
}

.card-tariff-row {
   display: flex;
   margin: 0 -10px 25px;
}

.slick-track {
   display: flex !important;
}

.slick-initialized .slick-slide {
   height: auto;

   > div {
      height: 100%;
   }
}

.slick-dots {
   bottom: -50px;

   *, li button:before {
      width: 12px !important;
      margin: 0 !important;
   }

   li button:before {
      opacity: 1;
      color: var(--text-gray);
      font-size: 8px;
   }

   li.slick-active button:before {
      opacity: 1;
      font-size: 12px;
      color: var(--mf-green);
   }
}

.card-tariff {
   height: 100%;
   padding: 0 10px;

   .card-tariff__wrapper {
      border: 1px solid #D9D9D9;
      padding: 11px 18px 26px;
      height: 100%;
      display: flex;
      flex-direction: column;
   }

   .card-tariff__head {
      text-align: center;
      line-height: 25px;
      flex-grow: 1;
   }

   .card-tariff__head-title {
      font-size: 19px;
      font-weight: 500;
   }

   .card-tariff__recommend {
      font-size: 12px;
   }

   .card-tariff__body {
      margin-bottom: 30px;
   }

   .card-tariff__body-block {
      margin-bottom: 14px;

      &:last-child {
         margin-bottom: 0;
      }
   }

   .card-tariff__body-title {
      color: var(--text-gray);
      line-height: 20px;
      margin-bottom: 2px;
   }

   .card-tariff__body-text, p {
      line-height: 20px;
      font-weight: 500;
   }

   .card-tariff__footer {
      p {
         font-size: 19px;
         line-height: 20px;
         margin-bottom: 7px;
         text-align: center;
      }

      .btn {
         justify-content: center;
         width: 100%;
         height: 32px;
      }
   }
}

@media (max-width: 767px) {

   .card-tariff-row {
      display: flex;
      margin: 0 -15px 25px;
   }

   .slick-list {
      padding: 0 50px 0 5px !important;
   }

   .card-tariff-row {
      margin-bottom: 75px;
   }
}
</style>