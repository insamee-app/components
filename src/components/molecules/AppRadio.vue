<template>
  <div class="flex flex-col space-y-1">
    <div v-for="item in items" :key="item.value" class="flex">
      <AppCheck
        :name="item.value"
        :value="isSelected(item)"
        :variant="variant"
        @change="selection"
      />
      <label class="ml-2" :for="item.value">
        <slot :item="item">{{ item.text }}</slot>
      </label>
    </div>
    <AppError :error-message="errorMessage" />
  </div>
</template>

<script>
import AppCheck from '../atoms/AppCheck'
import AppError from '../atoms/AppError'
import { variant } from '../../mixins'

export default {
  name: 'AppRadio',
  components: { AppCheck, AppError },
  mixins: [variant],
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    selected: {
      type: Object,
      required: true,
    },
    errorMessage: {
      type: String,
      default: '',
    },
  },
  methods: {
    isSelected(item) {
      return this.selected ? this.selected.value === item.value : false
    },
    selection(bool, name) {
      if (name !== this.selected.value) {
        this.$emit(
          'select',
          this.items.find((i) => i.value === name)
        )
      } else {
        this.$emit('select', {})
      }
    },
  },
}
</script>
