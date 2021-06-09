<template>
  <div>
    <div class="mb-1 flex row justify-between" v-if="label || $slots.addon">
      <AppLabel :name="name" :label="label" input />
      <span v-if="$slots.addon" :for="name" class="text-primary-base">
        <slot name="addon"></slot>
      </span>
    </div>
    <AppTextarea
      :value="value"
      @input="$emit('input', $event)"
      :placeholder="placeholder"
      :name="name"
    />
    <AppError :error-message="errorMessage" />
  </div>
</template>

<script>
import AppLabel from '../atoms/AppLabel'
import AppError from '../atoms/AppError'
import AppTextarea from '../atoms/AppTextarea.vue'

export default {
  components: { AppError, AppLabel, AppTextarea },
  name: 'LabeledTextarea',
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
