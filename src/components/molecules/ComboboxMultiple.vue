<template>
  <Combobox
    :placeholder="placeholder"
    :items="items"
    :variant="variant"
    :border="border"
    @selected="select"
  >
    <template #selected>
      <ComboboxMultipleItem
        v-for="item in selectedItems"
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
  },
  data() {
    return {
      selectedItems: [],
    }
  },
  methods: {
    select(item) {
      if (item && !this.selectedItems.includes(item)) {
        this.selectedItems.push(item)
        this.emit()
      }
    },
    remove(item) {
      this.selectedItems = this.selectedItems.filter(
        (selectedItem) => selectedItem.value !== item.value
      )
      this.emit()
    },
    emit() {
      this.$emit('selected', this.selectedItems)
    },
  },
}
</script>
