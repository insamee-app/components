<template>
  <div>
    <div v-if="label || $slots.addon" class="mb-1 flex row justify-between">
      <AppLabel :name="name" :label="label" input :variant="variant" />
      <span
        v-if="$slots.addon"
        :for="name"
        :class="{ 'text-primary-base': isPrimary, 'text-secondary-base': isSecondary }"
      >
        <slot name="addon"></slot>
      </span>
    </div>
    <AppTextarea
      :value="value"
      :placeholder="placeholder"
      :name="name"
      :variant="variant"
      @input="$emit('input', $event)"
    />
    <AppError :error-message="errorMessage" />
  </div>
</template>

<script>
import AppLabel from '../atoms/AppLabel'
import AppError from '../atoms/AppError'
import AppTextarea from '../atoms/AppTextarea.vue'
import { variant } from '../../mixins'

export default {
  name: 'LabeledTextarea',
  components: { AppError, AppLabel, AppTextarea },
  mixins: [variant],
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
