<template>
  <div>
    <div v-if="label || $slots.addon" class="mb-1 flex row justify-between">
      <AppLabel :name="name" :label="label" input />
      <span v-if="$slots.addon" :for="name" class="text-primary-base">
        <slot name="addon"></slot>
      </span>
    </div>
    <AppInput
      :value="value"
      :placeholder="placeholder"
      :type="type"
      :name="name"
      :autocomplete="autocomplete"
      @input="$emit('input', $event)"
    />
    <AppError :error-message="errorMessage" />
  </div>
</template>

<script>
import AppLabel from '../atoms/AppLabel'
import AppError from '../atoms/AppError'
import AppInput from '../atoms/AppInput'

export default {
  name: 'LabeledInput',
  components: { AppError, AppLabel, AppInput },
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
    autocomplete: {
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
