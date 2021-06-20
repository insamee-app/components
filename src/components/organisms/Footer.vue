<template>
  <footer class="p-4 text-center grey-dark bg-grey-secondary-light">
    <slot></slot>
    <slot name="by">
      <div :class="$slots.default ? 'mt-6' : undefined">
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
