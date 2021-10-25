<template>
  <div class="bg-white-base absolute right-0 top-0 left-0 z-10 shadow-md">
    <header class="mx-auto w-full max-w-7xl flex flex-row justify-between p-4 xl:px-0">
      <div class="flex flex-row">
        <AppButton empty :to="nameLink" class="flex items-center text-primary-base">
          <slot name="name"> Mee </slot>
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
  </div>
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
