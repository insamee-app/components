<template>
  <Select :border="border" :variant="variant" :items="filteredItems" @selected="selected">
    <template #prepend="{ classIcon }">
      <IconSearch class="fill-current" :class="classIcon" />
    </template>
    <div class="flex flex-wrap space-x-1">
      <slot name="selected"></slot>
      <input
        ref="input"
        v-model="search"
        type="text"
        class="focus:outline-none rounded-none placeholder-grey-light flex-1"
        :class="classInput"
        :placeholder="placeholder"
      />
    </div>
  </Select>
</template>

<script>
import IconSearch from '../atoms/icons/IconSearch'
import { variant } from '../../mixins'
import Select from './Select'

export default {
  name: 'Combobox',
  components: { IconSearch, Select },
  mixins: [variant],
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
    border: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      search: '',
    }
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) =>
        item.text.toLowerCase().includes(this.search.toLowerCase())
      )
    },
    classInput() {
      const classNames = []

      if (this.border) classNames.push('bg-white')
      else {
        if (this.isPrimary) classNames.push('bg-primary-base')
        else if (this.isSecondary) classNames.push('bg-secondary-base')

        classNames.push('text-white')
      }

      return classNames.join(' ')
    },
  },
  methods: {
    selected(item) {
      if (item) {
        this.search = item.text
        this.$emit('selected', item)
      } else {
        this.search = ''
        this.$refs.input.focus()
        this.$emit('selected', undefined)
      }
    },
  },
}
</script>
