<template>
  <ul>
    <AppListItem v-for="item in list" :key="item.path"
      ><component
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
  },
}
</script>
