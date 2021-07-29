<template>
  <div class="relative flex flex-row items-center">
    <input
      :id="name"
      type="checkbox"
      :name="name"
      class="w-4 h-4 absolute opacity-0"
      @change="$emit('change', $event.target.checked, name)"
    />
    <div
      class="w-4 h-4 rounded border flex flex-col justify-center items-center"
      :class="classCheckBox"
    >
      <IconCheck v-if="value" class="w-3 h-3 text-grey-light fill-current" />
    </div>
  </div>
</template>

<script>
import IconCheck from '../atoms/icons/IconCheck'
import { variant } from '../../mixins'

export default {
  name: 'AppCheck',
  components: { IconCheck },
  mixins: [variant],

  props: {
    value: {
      type: Boolean,
      required: true,
    },
    name: {
      type: [String, Number],
      required: true,
    },
  },
  computed: {
    classCheckBox() {
      const classNames = []

      if (this.isPrimary) {
        classNames.push('border-primary-dark')
      } else if (this.isSecondary) {
        classNames.push('border-secondary-dark')
      }

      if (this.value && this.isPrimary) classNames.push('bg-primary-dark')
      else if (this.value && this.isSecondary) classNames.push('bg-secondary-dark')
      else classNames.push('bg-grey-light')

      return classNames.join(' ')
    },
  },
}
</script>
