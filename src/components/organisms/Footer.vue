<template>
  <footer class="p-4 text-center grey-dark bg-grey-secondary-light space-y-6">
    <slot></slot>
    <slot name="by">
      <div>
        Réalisé avec
        <IconHeart class="w-6 h-6 text-secondary-base fill-current inline" />
        par des étudiants pour les étudiants
      </div>
    </slot>
  </footer>
</template>

<script>
import IconHeart from '../atoms/icons/IconHeart'

export default {
  name: 'TheFooter',
  components: { IconHeart },
}
</script>
