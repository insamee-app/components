<template>
  <Select
    :border="border"
    :variant="variant"
    :items="filteredItems"
    :value="value"
    :dismiss-value="search"
    @selected="selected"
  >
    <template #prepend="{ classIcon }">
      <IconSearch class="fill-current" :class="classIcon" />
    </template>
    <div class="flex flex-wrap space-x-1 w-full">
      <slot name="selected"></slot>
      <input
        ref="input"
        v-model="search"
        type="text"
        class="focus:outline-none rounded-none flex-1"
        :class="classInput"
        :placeholder="placeholder"
      />
    </div>
    <template #selectItem="{ item }">
      <slot name="selectItem" :item="item"></slot>
    </template>
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
    value: {
      type: Object,
      required: true,
    },
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
    unsetSearch: {
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

      if (this.border) classNames.push('bg-white-base')
      else {
        if (this.isPrimary) classNames.push('bg-primary-base placeholder-grey-light')
        else if (this.isSecondary)
          classNames.push('bg-secondary-base placeholder-grey-secondary-light')

        classNames.push('text-white-base')
      }

      return classNames.join(' ')
    },
  },
  methods: {
    selected(item) {
      if (item.text) {
        if (!this.unsetSearch) this.search = item.text
        this.$emit('selected', item)
      } else {
        this.search = ''
        this.$refs.input.focus()
        this.$emit('selected', {})
      }
    },
  },
}
</script>
