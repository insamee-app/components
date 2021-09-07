export const variant = {
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'secondary', 'grey-secondary', 'negative'].includes(value)
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
    isGreySecondary() {
      return this.variant === 'grey-secondary'
    },
    isNegative() {
      return this.variant === 'negative'
    },
  },
}
