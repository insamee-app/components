<template>
  <div class="flex flex-row space-x-1">
    <AppButton empty :to="to(linkTutorat)" :href="href(linkTutorat)">
      <slot name="tutorat" :classIcon="classIcon" />
    </AppButton>
    <AppButton empty :to="to(linkEvenements)" :href="href(linkEvenements)">
      <slot name="evenements" :classIcon="classIcon" />
    </AppButton>
    <AppButton empty :to="to(linkAssociations)" :href="href(linkAssociations)">
      <slot name="associations" :classIcon="classIcon" />
    </AppButton>
    <AppButton empty :to="to(linkMee)" :href="href(linkMee)">
      <slot name="mee" :classIcon="classIcon" />
    </AppButton>
  </div>
</template>

<script>
import AppButton from './AppButton'

export default {
  name: 'AppTeam',
  components: { AppButton },
  props: {
    linkTutorat: {
      type: [String, Object],
      default: undefined,
    },
    linkEvenements: {
      type: [String, Object],
      default: undefined,
    },
    linkAssociations: {
      type: [String, Object],
      default: undefined,
    },
    linkMee: {
      type: [String, Object],
      default: undefined,
    },
  },
  computed: {
    classIcon() {
      return 'w-6 h-6'
    },
  },
  methods: {
    href(link) {
      return typeof link === 'string' ? link : undefined
    },
    to(link) {
      return typeof link === 'object' ? link : undefined
    },
  },
}
</script>
