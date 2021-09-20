<template>
  <ul class="grid grid-cols-2 gap-2 capitalize">
    <li v-for="value in keys" :key="value" class="text-center">
      <component
        :is="links[value] ? 'AppLink' : 'div'"
        class="p-1 text-lg"
        :link="href(value)"
        :variant="links[value] ? variant : undefined"
      >
        {{ content(value) }}
      </component>
    </li>
  </ul>
</template>

<script>
import { variant } from '../../mixins'
import AppLink from '../atoms/AppLink.vue'

export default {
  name: 'AppContact',
  components: { AppLink },
  mixins: [variant],
  props: {
    links: {
      type: Object,
      required: true,
    },
  },
  computed: {
    keys() {
      return Object.keys(this.links)
    },
  },
  methods: {
    href(value) {
      if (value === 'email') {
        return `mailto:${this.links[value]}`
      } else if (value === 'mobile') {
        return `tel:${this.links[value]}`
      } else {
        return this.links[value]
      }
    },
    content(value) {
      return this.links[value] ? value : `${value}: non renseigné`
    },
  },
}
</script>
