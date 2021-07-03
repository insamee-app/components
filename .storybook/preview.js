import Vue from 'vue'
import VScrollLock from 'v-scroll-lock'
import { configure } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import '../src/styles/index.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

Vue.use(VScrollLock)

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
  template: '<slot></slot>',
})

configure(require.context('../src/components', true, /\.stories\.js$/), module)
