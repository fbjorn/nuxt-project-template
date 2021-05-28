import Vue from 'vue'
import { extend, ValidationProvider, ValidationObserver } from 'vee-validate'
import * as vee from 'vee-validate/dist/rules'
import { messages } from 'vee-validate/dist/locale/en.json'

extend('required', { ...vee.required, message: 'This field is required' })
extend('min', { ...vee.min, message: messages.min })
extend('max', { ...vee.max, message: messages.max })
extend('min_value', { ...vee.min_value, message: messages.min_value })
extend('max_value', { ...vee.max_value, message: messages.max_value })

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
