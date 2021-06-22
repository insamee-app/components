<template>
  <div class="text-center">
    <h1>Il semble qu'une erreur soit survenue !</h1>
    <AppButton large class="w-full mt-8" :to="to"><slot></slot></AppButton>
    <AppButton border class="w-full mt-8" @click="show = !show">En savoir plus</AppButton>
    <pre v-if="show" class="mt-8 overflow-x-auto text-left">{{ error }}</pre>
  </div>
</template>

<script>
import AppButton from '../atoms/AppButton'

export default {
  name: 'ErrorGlobal',
  components: { AppButton },
  props: {
    error: {
      type: Object,
      required: true,
    },
    to: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      show: false,
    }
  },
}
</script>
