<template>
  <div v-clickoutside="() => (isVisible = false)" class="relative">
    <div
      class="border border-primary-base rounded px-2 py-1 flex flex-row items-center w-full"
      @click="isVisible = true"
    >
      <div class="flex flex-row items-center flex-1 mr-1">
        <IconSearch class="text-primary-dark fill-current mr-1" />
        <input
          ref="input"
          v-model="search"
          type="text"
          class="focus:outline-none rounded-none placeholder-grey-light flex-1"
          :placeholder="placeholder"
        />
      </div>
      <div v-if="!selectedItem">
        <IconCaret class="text-primary-base fill-current" :class="reverseCaret" />
      </div>
      <div
        v-else
        class="
          text-primary-base
          rounded
          cursor-pointer
          focus:outline-none focus:bg-grey-light focus:text-primary-dark
          hover:bg-grey-light hover:text-primary-dark
        "
        @click="clear"
      >
        <IconDismiss class="fill-current" />
      </div>
    </div>
    <ul
      v-if="isVisible"
      class="absolute top-10 left-0 right-0 bg-white shadow rounded p-2 space-y-1"
    >
      <template v-if="filteredItems.length">
        <SelectItem
          v-for="item in filteredItems"
          :key="item.value"
          :item="item"
          @selected="selected"
        />
      </template>
      <template v-else>Rien ne correpond à votre recherche</template>
    </ul>
  </div>
</template>

<script>
import IconCaret from '../atoms/icons/IconCaret'
import IconSearch from '../atoms/icons/IconSearch'
import IconDismiss from '../atoms/icons/IconDismiss'
import { clickOutside } from '../../directives'
import SelectItem from './SelectItem'

export default {
  name: 'FilterSelect',
  components: { IconCaret, IconSearch, SelectItem, IconDismiss },
  directives: {
    clickoutside: clickOutside,
  },
  props: {
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
      search: '',
      selectedItem: undefined,
    }
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) =>
        item.text.toLowerCase().includes(this.search.toLowerCase())
      )
    },
    reverseCaret() {
      return this.isVisible ? 'transform rotate-180' : ''
    },
  },
  methods: {
    selected(item) {
      this.isVisible = false
      this.selectedItem = item
      this.search = item.text
      this.$emit('selected', item)
    },
    toggleVisibility() {
      this.isVisible = !this.isVisible
    },
    clear() {
      this.isVisible = true
      this.selectedItem = undefined
      this.search = ''
      this.$refs.input.focus()
      this.$emit('selected', undefined)
    },
  },
}
</script>
