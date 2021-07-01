<template>
  <header
    class="
      absolute
      left-1/2
      transform
      -translate-x-1/2
      w-full
      max-w-7xl
      flex flex-row
      justify-between
      p-4
      z-10
    "
  >
    <div class="flex flex-row">
      <AppButton empty :to="nameLink" class="flex items-center text-primary-base">
        <slot name="name"> Insamee </slot>
      </AppButton>
      <slot name="nav"></slot>
    </div>
    <div class="flex items-center flex-row space-x-6">
      <slot name="actions"></slot>
      <client-only>
        <AppButton v-if="iconNav" empty @click="$emit('open', true)">
          <IconLineHorizontal class="w-8 h-8 text-primary-base fill-current cursor-pointer" />
        </AppButton>
      </client-only>
    </div>
  </header>
</template>

<script>
import AppButton from '../atoms/AppButton'
import IconLineHorizontal from '../atoms/icons/IconLineHorizontal'

export default {
  name: 'Header',
  components: { AppButton, IconLineHorizontal },
  props: {
    nameLink: {
      type: Object,
      required: true,
    },
    iconNav: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
