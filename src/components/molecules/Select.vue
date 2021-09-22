<template>
  <div v-clickoutside="() => (isVisible = false)" :aria-labelledby="name" class="relative">
    <div
      class="px-2 py-1 flex flex-row items-center w-full border"
      :class="classSelect"
      @click="open"
    >
      <div class="flex flex-row items-center flex-1 mr-1 space-x-1">
        <slot name="prepend" :classIcon="classIcon"></slot>
        <slot :ref="content" :on="keyboardActions">
          <div
            ref="content"
            :tabindex="disabled ? '-1' : '0'"
            :class="classContent"
            v-on="keyboardActions"
          >
            {{ content }}
          </div>
        </slot>
      </div>
      <div v-if="!dismissValue">
        <IconCaret class="fill-current" :class="[reverseCaret, classIcon].join(' ')" />
      </div>
      <div
        v-else
        class="rounded"
        :class="[classDismiss, classIcon].join(' ')"
        :tabindex="disabled ? '-1' : '0'"
        @click="clear"
        @keydown.enter="clearKey"
      >
        <IconDismiss class="fill-current" />
      </div>
    </div>
    <SelectItems
      ref="items"
      :is-visible="isVisible"
      :border="border"
      :variant="variant"
      class="absolute left-0 right-0 top-full z-10"
    >
      <template v-if="items.length">
        <SelectItem
          v-for="(item, index) in items"
          :key="item.value"
          v-slot="props"
          :variant="variant"
          :border="border"
          :item="item"
          :is-selected="isSelected(index)"
          @selected="selected"
        >
          <slot name="selectItem" :item="props.item"></slot>
        </SelectItem>
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
    name: {
      type: String,
      default: '',
    },
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
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isVisible: false,
      select: -1,
    }
  },
  computed: {
    keyboardActions() {
      return {
        focus: this.focus,
        keydown: this.keydown,
      }
    },
    content() {
      return this.value.text ?? this.placeholder
    },
    classContent() {
      return this.value.text ? this.classText : this.classPlaceholder
    },
    reverseCaret() {
      return this.isVisible ? 'transform rotate-180' : ''
    },
    classSelect() {
      const classNames = []
      if (this.disabled) {
        if (this.isPrimary) {
          if (this.border) classNames.push('border-grey-light')
          else classNames.push('bg-grey-base border-grey-base')
        } else if (this.isSecondary) {
          if (this.border) classNames.push('border-grey-secondary-light')
          else classNames.push('bg-grey-secondary-base border-grey-secondary-base')
        }
      } else if (this.isPrimary) {
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
      if (this.border) {
        if (this.isPrimary) {
          classNames.push('text-grey-base')
        } else if (this.isSecondary) {
          classNames.push('text-grey-secondary-base')
        }
      } else if (this.isPrimary) {
        classNames.push('text-grey-light')
      } else if (this.isSecondary) {
        classNames.push('text-grey-secondary-light')
      }

      return classNames.join(' ')
    },
    classText() {
      const classNames = []

      if (this.disabled) {
        if (this.isPrimary) {
          if (this.border) classNames.push('text-grey-base')
          else classNames.push('text-grey-light')
        } else if (this.isSecondary) {
          if (this.border) classNames.push('text-grey-secondary-base')
          else classNames.push('text-grey-secondary-light')
        }
      } else if (this.border) classNames.push('text-black')
      else classNames.push('text-white-base')

      return classNames.join(' ')
    },
    classIcon() {
      const classNames = []
      if (this.disabled) {
        if (this.border) {
          if (this.isPrimary) classNames.push('text-grey-base')
          else if (this.isSecondary) classNames.push('text-grey-secondary-base')
        } else if (this.isPrimary) classNames.push('text-grey-light')
        else if (this.isSecondary) classNames.push('text-grey-secondary-light')
      } else if (this.border) {
        if (this.isPrimary) classNames.push('text-primary-base')
        else if (this.isSecondary) classNames.push('text-secondary-base')
      } else classNames.push('text-white-base')

      return classNames.join(' ')
    },
    classDismiss() {
      const classNames = []

      if (this.disabled) return ''
      else classNames.push('cursor-pointer')

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
    open() {
      if (this.disabled) return

      this.isVisible = true
    },
    selected(item) {
      this.isVisible = false
      this.$emit('selected', item)
    },
    clear() {
      if (this.disabled) return

      this.isVisible = true
      this.select = -1
      this.$emit('selected', {})
    },
    clearKey() {
      this.clear()
      this.$refs.content.focus()
    },
    focus() {
      if (this.disabled) return

      this.isVisible = true
    },
    blur() {
      this.select = -1
      this.isVisible = false
    },
    isSelected(index) {
      return index === this.select
    },
    scrollItem() {
      const el = this.$refs.items.$children[this.select].$el
      el.scrollIntoView({ block: 'nearest' })
    },
    keydown(e) {
      if (e.key === 'ArrowUp') {
        // Prevent to move the scroll bar from the page
        e.preventDefault()
        this.up()
      }

      if (e.key === 'ArrowDown') {
        // Prevent to move the scroll bar from the page
        e.preventDefault()
        this.down()
      }

      if (e.key === 'Enter') {
        // Stop propagation to a form
        e.stopPropagation()
        this.enter()
      }

      if (e.key === 'Escape') this.blur()

      // Close the select when tab is pressed
      if (e.key === 'Tab') this.blur()
    },
    down() {
      if (this.select < this.items.length - 1) {
        this.select++
        this.scrollItem()
      }

      if (this.select === -1) {
        this.select = 0
      }
    },
    up() {
      if (this.select > 0) {
        this.select--
        this.scrollItem()
      }

      if (this.select === -1) {
        this.select = this.items.length - 1
      }
    },
    enter() {
      if (!this.isVisible) {
        this.isVisible = true
        return
      }

      if (this.select === -1) {
        this.focus()
        return
      }

      this.selected(this.items[this.select])
    },
  },
}
</script>
