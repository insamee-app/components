<template>
  <component
    :is="getComponentType"
    :disabled="disabled || loading"
    class="rounded flex justify-center focus:outline-none"
    :class="classButton"
    :to="to"
    :href="href"
    @click="to ? '' : $emit('click', $event)"
  >
    <IconSpinner v-if="loading" class="animate-spin h-6 w-6 fill-current" :class="classSpinner" />
    <slot></slot>
  </component>
</template>

<script>
import IconSpinner from './icons/IconSpinner'

export default {
  name: 'AppButton',
  components: { IconSpinner },
  props: {
    large: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
    empty: {
      type: Boolean,
      default: false,
    },
    to: {
      type: Object,
      default: undefined,
    },
    href: {
      type: String,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    fit: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'secondary'].includes(value)
      },
    },
  },
  computed: {
    isPrimary() {
      return this.type === 'primary'
    },
    isSecondary() {
      return this.type === 'secondary'
    },
    classButton() {
      const classNames = []

      if (this.empty) {
        if (this.isPrimary) {
          classNames.push('text-primary-base')
        } else if (this.isSecondary) {
          classNames.push('text-secondary-base')
        }
        return classNames.join(' ')
      }

      if (this.large) classNames.push('p-2 text-lg')
      else classNames.push('py-1 px-2 text-base')

      if (this.border) {
        classNames.push('border bg-white')
        if (this.isPrimary) {
          classNames.push('border-primary-dark text-primary-base')
        } else if (this.isSecondary) {
          classNames.push('border-secondary-dark text-secondary-base')
        }
      } else if (this.disabled || this.loading) {
        if (this.isPrimary) {
          classNames.push('bg-grey-base text-white')
        } else if (this.isSecondary) {
          classNames.push('bg-grey-secondary-base text-white')
        }
      } else if (this.isPrimary) {
        classNames.push('bg-primary-base text-white')
      } else if (this.isSecondary) {
        classNames.push('bg-secondary-base text-white')
      }

      return classNames.join(' ')
    },
    classSpinner() {
      const classNames = []

      if (this.border) classNames.push('')
      else classNames.push('text-white')

      if (this.$slots.default) classNames.push('mr-2')

      return classNames.join(' ')
    },
    getComponentType() {
      if (this.to) return 'NuxtLink'
      if (this.href) return 'a'

      return 'button'
    },
  },
}
</script>
