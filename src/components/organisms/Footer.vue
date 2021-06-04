<template>
  <footer class="p-4 text-center text-grey-dark bg-grey-light">
    <slot></slot>
    <slot name="by">
      <div :class="$slots.default ? 'mt-6' : undefined">
        Réalisé avec
        <IconHeart class="w-6 h-6 text-primary-dark fill-current inline" />
        par des étudiants pour les étudiants
      </div>
    </slot>
  </footer>
</template>

<script>
import IconHeart from '../atoms/icons/IconHeart'

export default {
  components: { IconHeart },
  name: 'TheFooter',
}
</script>
