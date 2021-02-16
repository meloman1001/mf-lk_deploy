export default {
   pageFormCRM: true,
   pageFormCRM2: false,
   pageFormCRM3: false,
   pageFormCRM4: false,
   pageFormCRM_search2: false,

   dateDesired: '',
   dateConnection: '',
   timeDesired: null,
   timeConnection: null,
   dateDesiredConfirm: new Date(),
   dateConnectionConfirm: new Date(),
   requests: [],

   addressData: false,
   formDisabled: false,
   showDelete: false,
   showTableTariff: false,

   disabledInput: false,

   product: null,
   tariff: null,

   formCRM: {
      city: '',
      house: '',
   },
   formCRMNext: {
      front: '',
      apartment: '',
   },

   formCRM2: {
      family: '',
      name: '',
      mobPhone: '',
   }

}