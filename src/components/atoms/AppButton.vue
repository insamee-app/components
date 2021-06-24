<template>
  <component
    :is="getComponentType"
    :disabled="disabled || loading"
    class="focus:outline-none cursor-pointer"
    :class="classButton"
    :to="to"
    :href="href"
    :target="href ? '_blank' : undefined"
    :rel="href ? 'noreferrer noopener' : undefined"
    @click="to ? '' : $emit('click', $event)"
  >
    <IconSpinner v-if="loading" class="animate-spin h-6 w-6 fill-current" :class="classSpinner" />
    <slot></slot>
    <IconOpen v-if="href" class="ml-1 w-4 h-4 fill-current" />
  </component>
</template>

<script>
import vaiant from '../../mixins/variant'
import IconSpinner from './icons/IconSpinner'
import IconOpen from './icons/IconOpen'

export default {
  name: 'AppButton',
  components: { IconSpinner, IconOpen },
  mixins: [vaiant],
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
    inline: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classButton() {
      const classNames = []

      if (this.href) classNames.push('flex flex-row items-center')

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

      if (this.inline) classNames.push('inline')

      classNames.push('flex justify-center rounded')

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
