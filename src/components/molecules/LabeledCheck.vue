<template>
  <div class="relative flex flex-row items-center">
    <AppCheck :value="value" :name="name" @change="$emit('change', $event)" />
    <AppLabel :name="name" :label="label" class="ml-2 text-black font-normal" />
  </div>
</template>

<script>
import AppCheck from '../atoms/AppCheck'
import AppLabel from '../atoms/AppLabel'

export default {
  components: { AppCheck, AppLabel },
  name: 'LabeledCheck',
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
  },
}
</script>
