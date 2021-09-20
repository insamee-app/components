<template>
  <div>
    <AppLabel :label="label" :variant="variant" :input="input" :name="name" />
    <slot></slot>
  </div>
</template>

<script>
import AppLabel from '../atoms/AppLabel'
import { variant } from '../../mixins'

export default {
  name: 'LabeledItem',
  components: { AppLabel },
  mixins: [variant],
  props: {
    name: {
      type: String,
      default: '',
    },
    input: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      required: true,
    },
  },
}
</script>
