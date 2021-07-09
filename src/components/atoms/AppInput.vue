<template>
  <div class="rounded py-1 px-2 w-full" :class="classAppInput">
    <slot name="prepend"></slot>
    <input
      :id="name"
      :value="value"
      :type="type"
      :placeholder="placeholder"
      class="focus:outline-none w-full"
      :class="classInput"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
import { variant } from '../../mixins'

export default {
  name: 'AppInput',
  mixins: [variant],
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    border: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  computed: {
    classInput() {
      const classNames = []

      if (!this.border) {
        if (this.isPrimary) classNames.push('bg-primary-base')
        else if (this.isSecondary) classNames.push('bg-secondary-base')
      }

      if (this.isPrimary) classNames.push('placeholder-grey-light')
      else if (this.isSecondary) classNames.push('placeholder-grey-secondary-light')

      return classNames.join(' ')
    },
    classAppInput() {
      const classNames = []

      if (this.border) {
        classNames.push('border text-black')
        if (this.isPrimary) classNames.push('border-primary-dark')
        else if (this.isSecondary) classNames.push('border-secondary-dark')
      } else {
        classNames.push('text-white-base')
        if (this.isPrimary) classNames.push('bg-primary-base')
        else if (this.isSecondary) classNames.push(' bg-secondary-base')
      }

      return classNames.join(' ')
    },
  },
}
</script>
