<template>
  <div class="text-center">
    <h1 class="text-primary-dark font-bold text-4xl">404</h1>
    <div class="mt-8">Désolé ! Mais il semble que ce chemin ne mène nul part !</div>
    <AppButton empty :to="to" class="mt-4 block"> <slot></slot> </AppButton>
  </div>
</template>

<script>
import AppButton from '../atoms/AppButton'

export default {
  name: '404',
  components: { AppButton },
  props: {
    to: {
      type: Object,
      required: true,
    },
  },
}
</script>
