<template>
  <div class="flex flex-row space-x-2 items-center">
    <AppImg class="w-8 h-8" :link="link" :alt="name"></AppImg>
    <slot></slot>
  </div>
</template>

<script>
import AppImg from '../atoms/AppImg'

export default {
  name: 'AppAssociation',
  components: { AppImg },
  props: {
    link: {
      type: String,
      default: undefined,
    },
    name: {
      type: String,
      default: undefined,
    },
  },
}
</script>
