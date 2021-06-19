<template>
  <div class="relative flex flex-row items-center">
    <input
      :id="name"
      type="checkbox"
      :name="name"
      class="w-4 h-4 absolute opacity-0"
      @change="$emit('change', $event.target.checked)"
    />
    <div
      class="w-4 h-4 rounded border border-primary-dark flex flex-col justify-center items-center"
      :class="classCheckBox"
    >
      <IconCheck v-if="value" class="w-3 h-3 text-grey-light fill-current" />
    </div>
  </div>
</template>

<script>
import IconCheck from '../atoms/icons/IconCheck'

export default {
  name: 'AppCheck',
  components: { IconCheck },
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    classCheckBox() {
      const classNames = []

      if (this.value) classNames.push('bg-primary-dark')
      else classNames.push('bg-grey-light')

      return classNames.join(' ')
    },
  },
}
</script>
