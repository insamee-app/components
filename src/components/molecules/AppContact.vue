<template>
  <ul class="grid grid-cols-2 gap-2 capitalize">
    <li v-for="value in keys" :key="value" class="text-center">
      <component
        :is="links[value] ? 'AppLink' : 'div'"
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
      return value === 'phone' ? 'tel:' + this.links[value] : this.links[value]
    },
    content(value) {
      return this.links[value] ? value : `${value}: non renseigné`
    },
  },
}
</script>
