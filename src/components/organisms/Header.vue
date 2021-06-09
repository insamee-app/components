<template>
  <header class="flex flex-row justify-between p-4 absolute w-full z-10">
    <div class="flex flex-row">
      <slot name="icon">
        <AppButton empty :to="iconLink" class="flex items-center">
          <IconInsamee class="h-8 w-8 mr-2" />
          INSAMEE
        </AppButton>
      </slot>
    </div>
    <div class="flex items-center flex-row space-x-4">
      <slot name="actions"></slot>
      <AppButton empty @click="$emit('open', true)">
        <IconLineHorizontal class="w-8 h-8 text-primary-base fill-current cursor-pointer" />
      </AppButton>
    </div>
  </header>
</template>

<script>
import AppButton from '../atoms/AppButton'
import IconLineHorizontal from '../atoms/icons/IconLineHorizontal'
import IconInsamee from '../atoms/icons/IconInsamee'

export default {
  components: { AppButton, IconLineHorizontal, IconInsamee },
  name: 'Header',
  props: {
    iconLink: {
      type: Object,
      required: true,
    },
  },
}
</script>
