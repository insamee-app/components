<template>
  <div>
    <AppLabel class="text-grey-base" :label="label" />
    <div class="text-xl">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import AppLabel from '../atoms/AppLabel'

export default {
  components: { AppLabel },
  name: 'LabeledItem',
  props: {
    label: {
      type: String,
      required: true,
    },
  },
}
</script>
