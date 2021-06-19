export default {
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'secondary'].includes(value)
      },
    },
  },
  computed: {
    isPrimary() {
      return this.variant === 'primary'
    },
    isSecondary() {
      return this.variant === 'secondary'
    },
  },
}
