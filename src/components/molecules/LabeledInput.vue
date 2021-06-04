<template>
  <div>
    <div class="mb-1 flex row justify-between" v-if="label || $slots.addon">
      <AppLabel :name="name" :label="label" class="font-normal" />
      <span v-if="$slots.addon" :for="name" class="text-primary-base"
        ><slot name="addon"></slot
      ></span>
    </div>
    <AppInput
      :value="value"
      @input="$emit('input', $event)"
      :placeholder="placeholder"
      :type="type"
      :name="name"
    />
    <AppError :error-message="errorMessage" />
  </div>
</template>

<script>
import AppLabel from '../atoms/AppLabel'
import AppError from '../atoms/AppError'
import AppInput from '../atoms/AppInput'

export default {
  components: { AppError, AppLabel, AppInput },
  name: 'LabeledInput',
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    errorMessage: {
      type: String,
      default: '',
    },
  },
}
</script>
