<template>
  <div v-clickoutside="() => (isVisible = false)" class="relative">
    <div
      class="px-2 py-1 flex flex-row items-center w-full border"
      :class="classSelect"
      @click="isVisible = true"
    >
      <div class="flex flex-row items-center flex-1 mr-1 space-x-1">
        <slot name="prepend" :classIcon="classIcon"></slot>
        <slot>
          <div v-if="!value.text" :class="classPlaceholder">{{ placeholder }}</div>
          <div v-else :class="classText">{{ value.text }}</div>
        </slot>
      </div>
      <div v-if="!dismissValue">
        <IconCaret class="fill-current" :class="[reverseCaret, classIcon].join(' ')" />
      </div>
      <div
        v-else
        class="rounded cursor-pointer focus:outline-none"
        :class="[classDismiss, classIcon].join(' ')"
        @click="clear"
      >
        <IconDismiss class="fill-current" />
      </div>
    </div>
    <SelectItems
      :is-visible="isVisible"
      :border="border"
      :variant="variant"
      class="absolute left-0 right-0 top-full z-10"
    >
      <template v-if="items.length">
        <SelectItem
          v-for="item in items"
          :key="item.value"
          :variant="variant"
          :border="border"
          :item="item"
          @selected="selected"
        />
      </template>
      <template v-else>Il n'y a rien à afficher</template>
    </SelectItems>
  </div>
</template>

<script>
import IconCaret from '../atoms/icons/IconCaret'
import IconDismiss from '../atoms/icons/IconDismiss'
import { clickOutside } from '../../directives'
import { variant } from '../../mixins'
import SelectItem from './SelectItem'
import SelectItems from './SelectItems'

export default {
  name: 'Select',
  components: { IconCaret, SelectItem, IconDismiss, SelectItems },
  directives: {
    clickoutside: clickOutside,
  },
  mixins: [variant],
  props: {
    value: {
      type: Object,
      required: true,
    },
    dismissValue: {
      type: [String, Number],
      default: undefined,
    },
    border: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isVisible: false,
    }
  },
  computed: {
    reverseCaret() {
      return this.isVisible ? 'transform rotate-180' : ''
    },
    classSelect() {
      const classNames = []
      if (this.isPrimary) {
        if (this.border) classNames.push('border-primary-dark')
        else classNames.push('bg-primary-base border-primary-base')
      } else if (this.isSecondary) {
        if (this.border) classNames.push('border-secondary-dark')
        else classNames.push('bg-secondary-base border-secondary-base')
      }

      if (this.isVisible) classNames.push('rounded-t shadow-lg')
      else classNames.push('rounded')

      return classNames.join(' ')
    },
    classPlaceholder() {
      const classNames = []

      if (this.isPrimary) {
        classNames.push('text-grey-light')
      } else if (this.isSecondary) {
        classNames.push('text-grey-secondary-light')
      }

      return classNames.join(' ')
    },
    classText() {
      const classNames = []

      if (this.border) classNames.push('text-black')
      else classNames.push('text-white-base')

      return classNames.join(' ')
    },
    classIcon() {
      const classNames = []

      if (this.border) {
        if (this.isPrimary) classNames.push('text-primary-base')
        else if (this.isSecondary) classNames.push('text-secondary-base')
      } else classNames.push('text-white-base')

      return classNames.join(' ')
    },
    classDismiss() {
      const classNames = []

      if (this.isPrimary) {
        if (this.border)
          classNames.push(
            'focus:bg-grey-light focus:text-primary-dark hover:bg-grey-light hover:text-primary-dark'
          )
        else classNames.push('hover:bg-primary-dark')
      } else if (this.isSecondary) {
        if (this.border)
          classNames.push(
            'focus:bg-grey-secondary-light focus:text-secondary-dark hover:bg-grey-secondary-light hover:text-secondary-dark'
          )
        else classNames.push('hover:bg-secondary-dark')
      }

      return classNames.join(' ')
    },
  },
  methods: {
    selected(item) {
      this.isVisible = false
      this.$emit('selected', item)
    },
    clear() {
      this.isVisible = true
      this.$emit('selected', {})
    },
  },
}
</script>
