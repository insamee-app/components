<template>
  <footer class="p-4 text-center text-grey-dark bg-grey-light">
    <div>
      <NuxtLink :to="{ name: 'legal-mentions' }">Mentions légales</NuxtLink>
    </div>
    <div class="mt-6">
      Réalisé avec
      <IconHeart class="w-6 h-6 text-primary-dark fill-current inline" />
      par des étudiants pour les étudiants
    </div>
  </footer>
</template>

<script>
import IconHeart from '../atoms/icons/IconHeart'

export default {
  components: { IconHeart },
  name: 'TheFooter',
}
</script>
