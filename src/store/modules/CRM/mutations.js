export function NEW_REQUEST_CRM(state) {
   state.pageFormCRM = true
   state.pageFormCRM2 = false
   state.pageFormCRM3 = false
   state.pageFormCRM4 = false

   state.dateDesired = ''
   state.dateConnection = ''
   state.timeDesired = null
   state.timeConnection = null
   state.dateDesiredConfirm = new Date()
   state.dateConnectionConfirm = new Date()

   state.addressData = false
   state.frontData = false
   state.formDisabled = false
   state.showDelete = false
   state.showTableTariff = false

   state.disabledInput = false

   state.product = null
   state.tariff = null
   state.formCRM.city = state.formCRM.house = ''
   state.formCRMNext.front = state.formCRMNext.apartment = ''
   state.formCRM2.family = state.formCRM2.name = state.formCRM2.mobPhone = ''
}

export function CHOOSE_TARIFF(state) {
   state.showTableTariff = true
   state.showDelete = true
}

export function GO_TO_PAGE_CRM(state, [close, open]) {
   state[close] = false
   state[open] = true
}

export function BTN_FORM_DISABLED(state) {
   state.formDisabled = false
}
export function BTN_FORM2_DISABLED(state) {
   state.disabledInput = false
}

export function UPDATE_VALUE(state, [item, value]) {
   state[item] = value
}

export function CONFIRM_DATE_DESIRED(state) {
   state.dateDesiredConfirm = state.dateDesired
   state.dateConnectionConfirm = state.dateConnection
}

export function SHOW_CLIENTS(state) {
   state.formDisabled = true
}
export function SUBMIT(state) {
   state.addressData = true
}

export function BACK(state) {
   state.disabledInput = true
}
