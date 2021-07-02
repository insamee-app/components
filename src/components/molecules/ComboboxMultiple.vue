<template>
  <Combobox
    unset-search
    :placeholder="placeholder"
    :items="items"
    :variant="variant"
    :border="border"
    :value="selectedItem"
    @selected="select"
  >
    <template #selected>
      <ComboboxMultipleItem
        v-for="item in value"
        :key="item.value"
        :variant="variant"
        :border="border"
        :item="item"
        @removed="remove"
      />
    </template>
  </Combobox>
</template>

<script>
import { variant } from '../../mixins'
import Combobox from './Combobox.vue'
import ComboboxMultipleItem from './ComboboxMultipleItem'

export default {
  name: 'ComboboxMultiple',
  components: { Combobox, ComboboxMultipleItem },
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
    value: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedItem: {},
    }
  },
  methods: {
    select(item) {
      if (item.text && !this.value.includes(item)) {
        const data = this.value
        data.push(item)
        this.emit(data)
      }
    },
    remove(item) {
      const data = this.value.filter((selectedItem) => selectedItem.value !== item.value)
      this.emit(data)
    },
    emit(data) {
      this.$emit('selected', data)
    },
  },
}
</script>
