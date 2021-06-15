<template>
  <ul :class="classNames">
    <AppListItem v-for="item in list" :key="item.path" :row="row"
      ><component
        :class="itemClassNames(item)"
        :is="item.path ? 'NuxtLink' : 'span'"
        :to="item.path ? { name: item.path } : undefined"
        >{{ item.name }}</component
      ></AppListItem
    >
  </ul>
</template>

<script>
import AppListItem from './AppListItem'

export default {
  components: { AppListItem },
  name: 'AppList',
  props: {
    list: {
      type: Array,
      required: true,
    },
    row: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classNames() {
      const classNames = []

      if (this.row) classNames.push('flex flex-row space-x-4')
      else classNames.push('')

      return classNames.join(' ')
    },
  },
  methods: {
    itemClassNames(item) {
      const classNames = []

      if (item.path) classNames.push('hover:text-primary-dark')

      return classNames.join(' ')
    },
  },
}
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply font-bold text-primary-dark;
}
</style>
