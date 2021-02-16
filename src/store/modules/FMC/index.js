import fix from '@/store/modules/FMC/fix'
import rent from "@/store/modules/FMC/rent";

export default {
   modules: {
      fix,
      rent
   },
   state: {
      pageFormFMC: true,
      pageFormFMC2: false,
      pageFormFMC3: false,
      pageFormFMC4: false,
      pageFormFMC5: false,
      pageFormFMC6: false,
      pageFormFMC7: false,
      addressDataFMC: true,
      formDisabledFMC: false,
      formDisabledFMC2: false,
      totalPriceFMCTotal: 0,
      totalPriceFMCAbon: 0,
      rentTotal: [],
      rentTotalOver: [],
      fixTotal: [],
      fixTotalOver: [],
      total: [],
      totalOver: 0,
      formFMC: {
         city: '',
         home: ''
      },
      formFMCNext: {
         front: '',
         apartment: ''
      },
      formFMC2: {
         family: '',
         name: '',
         mobPhone: '',
      },
      tariffsConvergent : [
         {
            name: 'Объединяй! <br> ХИТ',
            recommend: true,
            call: '1300 мин',
            mobInternet: 'Безлимитный',
            homeInternet: [
               '100 Мбит',
               '300 Мбит Москва',
               '200 Мбит Ханты-Мансийск',
            ],
            tvChannels: '160',
            services: 'ТВ-приставка (Бесплатно)',
            price: 850
         }, {
            name: 'Объединяй! <br> Эконом',
            call: '1300 мин',
            mobInternet: 'Безлимитный',
            homeInternet: [
               '100 Мбит',
               '300 Мбит Москва',
               '200 Мбит Ханты-Мансийск',
            ],
            tvChannels: '160',
            services: 'ТВ-приставка (Бесплатно)',
            price: 650
         }, {
            name: 'Объединяй! <br> Для своих',
            call: '1300 мин',
            mobInternet: 'Безлимитный',
            homeInternet: [
               '100 Мбит',
               '300 Мбит Москва',
               '200 Мбит Ханты-Мансийск',
            ],
            tvChannels: '160',
            services: 'ТВ-приставка (Бесплатно)',
            price: 1350
         }, {
            name: 'Объединяй! <br> Два интернета',
            call: '1300 мин',
            mobInternet: 'Безлимитный',
            homeInternet: [
               '100 Мбит',
               '300 Мбит Москва',
               '200 Мбит Ханты-Мансийск',
            ],
            tvChannels: '160',
            services: 'ТВ-приставка (Бесплатно)',
            price: 750
         },
      ],
      tariffsHome : [
         {
            name: '#ДляДома <br> Интернет (100)',
            recommend: true,
            price: 399
         }, {
            name: '#ДляДома <br> ПлюсТВ (100)',
            price: 500
         }, {
            name: '#ДляДома <br> Всё (200)',
            price: 550
         }, {
            name: '#ДляДома <br> Максимум (300)',
            price: 950
         },
      ],
   },
   getters: {
      // PAGE_FORM_FMC
      pageFormFMC(state) {
         return state.pageFormFMC
      },

      pageFormFMC2(state) {
         return state.pageFormFMC2
      },

      pageFormFMC3(state) {
         return state.pageFormFMC3
      },

      pageFormFMC4(state) {
         return state.pageFormFMC4
      },

      pageFormFMC5(state) {
         return state.pageFormFMC5
      },

      pageFormFMC6(state) {
         return state.pageFormFMC6
      },

      pageFormFMC7(state) {
         return state.pageFormFMC7
      },

// /PAGE_FORM_FMC

      totalPriceFMCTotal(state) {
         return state.totalPriceFMCTotal.length
      },

      totalPriceFMCAbon(state) {
         return state.totalPriceFMCAbon
      },

      tariffsConvergent(state) {
         return state.tariffsConvergent
      },

      tariffsHome(state) {
         return state.tariffsHome
      },


      formDisabledFMC(state) {
         return state.formDisabledFMC
      },

      formDisabledFMC2(state) {
         return state.formDisabledFMC2
      },

      formFMC(state) {
         return state.formFMC
      },

      formFMCNext(state) {
         return state.formFMCNext
      },

      formFMC2(state) {
         return state.formFMC2
      },

      addressDataFMC(state) {
         return state.addressDataFMC
      },

      totalOver(state) {
         return state.totalOver
      },
   },
   mutations: {
      UPDATE_PRICE(state, value) {
         state.totalPriceFMCAbon = value
         state.totalOver = state.totalPriceFMCAbon + state.rentTotalOver + state.fixTotalOver
      },

      GO_TO_PAGE_FMC(state, [close, open]) {
         state[close] = false
         state[open] = true
      },

      SUBMIT_FORM_FMC(state) {
         state.addressDataFMC = false
      },

      SHOW_CLIENTS_FMC(state) {
         state.formDisabledFMC = true
      },

      BTN_FORM_DISABLED_FMC(state) {
         state.formDisabledFMC = false
      },

      DISABLED_FORM_FMC2(state) {
         state.formDisabledFMC2 = !state.formDisabledFMC2
      },

// аккордеон FMC
      VOLUME_UPDATE(state, [index, volume, module]) {
         let arrVolume = module + 'Volume'
         state[module][arrVolume][index] = volume
      },
      VOLUME_PLUS_ONE(state, [index, module]) {
         let arrVolume = module + 'Volume'
         let arrChecked = module + 'Checked'
         let dataFMC = module + 'FMC'

         if (state[module][arrVolume][index] === 0) {
            state[module][arrChecked][index] = 1
            state.totalPriceFMCTotal += state[module][dataFMC][index].price
         } else state.totalPriceFMCTotal -= state[module][dataFMC][index].price
      },

      SELECT_CHECKED(state, [index, volume, module]) {
         let arrVolume = module + 'Volume'
         let arrChecked = module + 'Checked'
         let arrTotal = module + 'Total'
         let arrTotalOver = module + 'TotalOver'
         state[module][arrVolume][index] !== 0 ? state[module][arrChecked][index] = state[module][arrVolume][index] : ''

         // подсчет суммы 5/7
         let dataFMC = module + 'FMC'
         state.totalPriceFMCTotal += volume * state[module][dataFMC][index].price
         state.total[index] = volume * state[module][dataFMC][index].price
         state[arrTotal][index] = volume * state[module][dataFMC][index].price
         state[arrTotalOver] = state[arrTotal].reduce( (sum, current) => {
            return sum + current
         }, 0 )
         state.totalOver = state.totalPriceFMCAbon + state.rentTotalOver + state.fixTotalOver
      },
// /аккордеон FMC

      NEW_REQUEST_FMC(state) {
         state.pageFormFMC = true
         state.pageFormFMC2 = false
         state.pageFormFMC3 = false
         state.pageFormFMC4 = false
         state.pageFormFMC5 = false
         state.pageFormFMC6 = false
         state.pageFormFMC7 = false
         state.addressDataFMC = true
         state.formDisabledFMC = false
         state.formDisabledFMC2 = false
         state.totalPriceFMCTotal = 0
         state.totalPriceFMCAbon = 0
         state.rentTotal = []
         state.rentTotalOver = []
         state.fixTotal = []
         state.fixTotalOver = []
         state.total = []
         state.totalOver = 0
         state.formFMC = {
            city: '',
            home: ''
         },
            state.formFMCNext = {
               front: '',
               apartment: ''
            }
         state.formFMC2 = {
            family: '',
            name: '',
            mobPhone: '',
         }
      }

   }

}