<template>
  <div class="flex flex-col space-y-1">
    <div v-for="item in items" :key="item.value" class="flex">
      <AppCheck :name="item.value" :value="isSelected(item)" @change="selection" />
      <div class="ml-2">
        <slot :item="item">{{ item.text }}</slot>
      </div>
    </div>
  </div>
</template>

<script>
import AppCheck from '../atoms/AppCheck'

export default {
  name: 'AppRadio',
  components: { AppCheck },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    selected: {
      type: Object,
      required: true,
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
