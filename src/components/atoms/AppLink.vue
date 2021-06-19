<template>
  <a :href="link" target="_blank" rel="noreferrer noopener" :class="classLink"><slot></slot></a>
</template>

<script>
export default {
  name: 'AppLink',
  props: {
    link: {
      type: String,
      required: true,
    },
  },
  computed: {
    classLink() {
      const classNames = []

      classNames.push('text-primary-base')

      return classNames.join(' ')
    },
  },
}
</script>
