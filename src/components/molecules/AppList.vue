<template>
  <ul :class="classNames">
    <AppListItem v-for="(item, index) in list" :key="index" :row="row" :to="item.path">
      {{ item.name }}
    </AppListItem>
  </ul>
</template>

<script>
import AppListItem from './AppListItem'

export default {
  name: 'AppList',
  components: { AppListItem },
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

      if (this.row) classNames.push('flex flex-row')
      else classNames.push('')

      return classNames.join(' ')
    },
  },
}
</script>
