<template>
  <div class="mt-8">
    <GraphicBlob
      class="
        text-primary-base
        opacity-10
        fill-current
        absolute
        right-1/4
        md:w-[120%]
        -bottom-32
        md:h-[120%]
        transform
        md:right-1/2
        rotate-[153deg]
        md:translate-x-1/2
        pointer-events-none
        md:-bottom-96
      "
    />
    <GraphicWind class="absolute top-1/4 right-4 md:h-40 md:w-40" />
    <GraphicPlants class="absolute bottom-0 left-0 w-full md:h-20 px-4" />
    <div class="text-center relative max-w-xs sm:max-w-sm lg:max-w-md mx-auto z-10">
      <h1 class="text-primary-dark font-bold text-4xl md:text-7xl lg:text-9xl">404</h1>
      <div class="mt-4 md:text-lg lg:text-2xl">Désolé, il n'y a rien ici !</div>
      <AppButton empty :to="to" class="mt-2 block md:text-lg lg:text-2xl">
        <slot></slot>
      </AppButton>
    </div>
    <GraphicLeaves class="w-full mt-2 md:h-60 md:mt-8 lg:h-80" />
  </div>
</template>

<script>
import AppButton from '../atoms/AppButton'
import GraphicBlob from '../atoms/graphics/GraphicBlob'
import GraphicPlants from '../atoms/graphics/GraphicPlants'
import GraphicWind from '../atoms/graphics/GraphicWind'
import GraphicLeaves from '../atoms/graphics/GraphicLeaves'

export default {
  name: 'Error404',
  components: { AppButton, GraphicBlob, GraphicWind, GraphicPlants, GraphicLeaves },
  props: {
    to: {
      type: Object,
      required: true,
    },
  },
}
</script>
