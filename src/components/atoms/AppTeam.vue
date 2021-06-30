<template>
  <div class="flex flex-row space-x-1">
    <AppButton empty :to="to(linkTutorat)" :href="href(linkTutorat)" no-external>
      <IconTutorat :class="classIcon" />
    </AppButton>
    <AppButton empty :to="to(linkEvenements)" :href="href(linkEvenements)" no-external>
      <IconEvenements :class="classIcon" />
    </AppButton>
    <AppButton empty :to="to(linkAssociations)" :href="href(linkAssociations)" no-external>
      <IconAssociations :class="classIcon" />
    </AppButton>
    <AppButton empty :to="to(linkInsamee)" :href="href(linkInsamee)" no-external>
      <IconInsamee :class="classIcon" />
    </AppButton>
  </div>
</template>

<script>
import IconTutorat from './icons/IconTutorat.vue'
import IconEvenements from './icons/IconEvenements.vue'
import IconAssociations from './icons/IconAssociations.vue'
import IconInsamee from './icons/IconInsamee.vue'
import AppButton from './AppButton'

export default {
  name: 'AppTeam',
  components: { IconTutorat, IconEvenements, IconAssociations, IconInsamee, AppButton },
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
    linkInsamee: {
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
