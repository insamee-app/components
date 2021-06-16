<template>
  <div>
    <div v-if="label || $slots.addon" class="mb-1 flex row justify-between">
      <AppLabel :name="name" :label="label" input />
      <span v-if="$slots.addon" :for="name" class="text-primary-base">
        <slot name="addon"></slot>
      </span>
    </div>
    <AppTextarea
      :value="value"
      :placeholder="placeholder"
      :name="name"
      @input="$emit('input', $event)"
    />
    <AppError :error-message="errorMessage" />
  </div>
</template>

<script>
import AppLabel from '../atoms/AppLabel'
import AppError from '../atoms/AppError'
import AppTextarea from '../atoms/AppTextarea.vue'

export default {
  name: 'LabeledTextarea',
  components: { AppError, AppLabel, AppTextarea },
  props: {
    value: {
      type: String,
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
