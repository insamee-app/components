<template>
  <component
    :is="getComponentType"
    :disabled="disabled || loading"
    class="focus:outline-none"
    :class="classButton"
    :to="to"
    :href="href"
    :target="href ? '_blank' : undefined"
    :rel="href && external ? 'noreferrer noopener' : undefined"
    @click="to ? '' : $emit('click', $event)"
  >
    <IconSpinner v-if="loading" class="animate-spin h-6 w-6 fill-current" :class="classSpinner" />
    <slot></slot>
    <IconOpen v-if="href && iconExternal" class="ml-1 w-4 h-4 fill-current" />
  </component>
</template>

<script>
import { variant } from '../../mixins'
import IconSpinner from './icons/IconSpinner'
import IconOpen from './icons/IconOpen'

export default {
  name: 'AppButton',
  components: { IconSpinner, IconOpen },
  mixins: [variant],
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
    shadow: {
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
    inline: {
      type: Boolean,
      default: false,
    },
    // Remove ref to have better analyse for internal platform
    external: {
      type: Boolean,
      default: false,
    },
    iconExternal: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classButton() {
      const classNames = []

      if (this.isPrimary) classNames.push('focus:ring-2 focus:ring-primary-light')
      else if (this.isSecondary) classNames.push('focus:ring-2 focus:ring-secondary-light')

      if (!this.disabled && !this.loading) classNames.push('cursor-pointer')
      else classNames.push('cursor-not-allowed')

      if (this.inline) classNames.push('inline-flex')

      if (this.href) classNames.push('flex-row items-center')

      if (this.empty) {
        classNames.push('rounded')
        if (this.isPrimary) {
          classNames.push('text-primary-base')
        } else if (this.isSecondary) {
          classNames.push('text-secondary-base')
        } else if (this.isNegative) {
          classNames.push('text-negative')
        } else if (this.isGreySecondary) {
          classNames.push('text-grey-secondary-base')
        }
        return classNames.join(' ')
      }

      if (!this.inline) classNames.push('flex')

      if (this.large) classNames.push('p-2 text-lg')
      else classNames.push('py-1 px-2 text-base')

      classNames.push('border')
      if (this.disabled || this.loading) {
        if (this.border) {
          classNames.push('bg-white-base')
          if (this.isPrimary) {
            classNames.push('border-grey-light text-grey-base')
          } else if (this.isSecondary) {
            classNames.push('border-grey-secondary-light text-grey-secondary-base')
          }
        } else if (this.isPrimary) {
          classNames.push('bg-grey-base text-white-base')
        } else if (this.isSecondary) {
          classNames.push('bg-grey-secondary-base text-white-base')
        }
      } else if (this.border) {
        classNames.push('bg-white-base')
        if (this.isPrimary) {
          classNames.push('border-primary-dark text-primary-base')
        } else if (this.isSecondary) {
          classNames.push('border-secondary-dark text-secondary-base')
        }
      } else if (this.isPrimary) {
        classNames.push('bg-primary-base text-white-base')
      } else if (this.isSecondary) {
        classNames.push('bg-secondary-base text-white-base')
      } else if (this.isNegative) {
        classNames.push('bg-negative text-white-base')
      }

      if (!this.border) classNames.push('border-transparent')

      if (this.shadow) classNames.push('shadow-xl')

      classNames.push('justify-center rounded')

      return classNames.join(' ')
    },
    classSpinner() {
      const classNames = []

      if (this.border) classNames.push('')
      else classNames.push('text-white-base')

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
