<template>
  <textarea
    :id="name"
    class="w-full border rounded p-2 focus:outline-none"
    :class="classTextArea"
    :value="value"
    name="text"
    cols="30"
    rows="10"
    :placeholder="placeholder"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
import { variant } from '../../mixins'

export default {
  name: 'AppTextarea',
  mixins: [variant],
  props: {
    value: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  computed: {
    classTextArea() {
      const classNames = []

      if (this.isPrimary) {
        classNames.push('placeholder-grey-base border-primary-dark')
      } else if (this.isSecondary) {
        classNames.push('placeholder-grey-secondary-base border-secondary-dark')
      }

      return classNames.join(' ')
    },
  },
}
</script>
