<template>
  <div>
    <AppLabel :label="label" :variant="variant" :input="input" :name="name" />
    <!-- <div :class="className"> -->
    <slot></slot>
    <!-- </div> -->
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
    // className: {
    //   type: String,
    //   default: 'text-xl',
    // },
  },
}
</script>
