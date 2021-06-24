<template>
  <div>
    <AppLabel :class="classLabeledItem" :label="label" />
    <div class="text-xl" :class="className">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import AppLabel from '../atoms/AppLabel'
import variant from '../../mixins/variant'

export default {
  name: 'LabeledItem',
  components: { AppLabel },
  mixins: [variant],
  props: {
    label: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    classLabeledItem() {
      const classNames = []

      if (this.isPrimary) classNames.push('text-grey-base')
      else if (this.isSecondary) classNames.push('text-grey-secondary-base')

      return classNames.join(' ')
    },
  },
}
</script>
