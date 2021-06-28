<template>
  <li
    class="
      focus:outline-none
      hover:bg-grey-light hover:text-primary-dark
      focus:bg-grey-light focus:text-primary-dark
      py-1
      px-2
      rounded
      cursor-pointer
    "
    @click="selected"
  >
    <slot :item="item">{{ item.text }}</slot>
  </li>
</template>

<script>
export default {
  name: 'SelectItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    selected() {
      this.$emit('selected', this.item)
    },
  },
}
</script>
