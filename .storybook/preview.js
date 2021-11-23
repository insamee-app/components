import Vue from 'vue'
import VScrollLock from 'v-scroll-lock'
import Vuelidate from 'vuelidate'
import VueCompositionAPI from '@vue/composition-api'
import { configure } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import '../src/styles/index.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'grey',
    values: [
      {
        name: 'grey',
        value: '#F7F7F7',
      },
    ],
  },
}

Vue.use(Vuelidate)
Vue.use(VScrollLock)
Vue.use(VueCompositionAPI)

Vue.component('NuxtLink', {
  props: ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    },
  },
  template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>',
})

Vue.component('ClientOnly', {
  template: '<div><slot></slot></div>',
})

configure(require.context('../src/components', true, /\.stories\.js$/), module)
