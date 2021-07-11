<template>
  <div>
    <GraphicBlob
      class="
        text-primary-base
        opacity-10
        fill-current
        absolute
        right-1/2
        -bottom-32
        transform
        translate-x-1/2
        rotate-[153deg]
        md:w-[120%] md:h-[120%] md:-bottom-96
        pointer-events-none
      "
    />
    <slot
      name="fixing-bug"
      class-names="absolute
          bottom-4
          left-1/2
          transform
          -translate-x-1/2
          md:w-full md:h-1/2
          z-0"
    ></slot>
    <div class="text-center relative max-w-xs sm:max-w-sm lg:max-w-md mx-auto z-10">
      <h1 class="md:text-lg lg:text-2xl">Désolé... Il semble qu'une erreur soit survenue !</h1>
      <div class="flex flex-col mt-8 space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
        <AppButton class="w-full" :to="to"><slot></slot></AppButton>
        <AppButton border class="w-full" @click="show = !show">En savoir plus</AppButton>
      </div>
      <pre v-if="show" class="mt-8 overflow-x-auto text-left">{{ error }}</pre>
    </div>
  </div>
</template>

<script>
import AppButton from '../atoms/AppButton'
import GraphicBlob from '../atoms/graphics/GraphicBlob'

export default {
  name: 'ErrorGlobal',
  components: { AppButton, GraphicBlob },
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
