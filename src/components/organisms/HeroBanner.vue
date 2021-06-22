<template>
  <FullContainer>
    <slot name="title"></slot>
    <div class="flex flex-col mt-4 md:flex-row md:mt-16">
      <slot name="subtitle"></slot>
      <slot name="graphic"></slot>
    </div>
    <div class="absolute bottom-8 w-full flex justify-center animate-bounce-slow">
      <IconArrow class="md:h-8 md:w-8 lg:h-12 lg:w-12 text-primary-base fill-current" />
    </div>
  </FullContainer>
</template>

<script>
import IconArrow from '../atoms/icons/IconArrow'
import FullContainer from './FullContainer'

export default {
  name: 'HeroBanner',
  components: { FullContainer, IconArrow },
}
</script>
