<template>
  <div>
    <AppLabel :class="classLabeledItem" :label="label" :variant="variant" />
    <div :class="className">
      <slot></slot>
    </div>
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
    label: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: 'text-xl',
    },
  },
}
</script>
