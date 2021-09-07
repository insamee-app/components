import { action } from '@storybook/addon-actions'
import AppButton from '../components/atoms/AppButton'

export default {
  component: AppButton,
  title: 'Atoms/AppButton',
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
    click: { action: 'click', table: { type: { summary: 'string' } } },
  },
}

const slotValue = 'lorem ipsum'

const Template = (args, { argTypes }) => ({
  components: { AppButton },
  props: Object.keys(argTypes),
  data() {
    return {
      args,
    }
  },
  methods: {
    action: action('click'),
  },
  template:
    "<AppButton :large='large' :border='border' :to='to' :href='href' :disabled='disabled' :loading='loading' :empty='empty' @click='action' :variant='variant' :inline='inline' :shadow='shadow'> {{ args.default }} </AppButton>",
})

export const PrimaryEmpty = Template.bind({})
PrimaryEmpty.args = { empty: true, default: slotValue }

export const PrimaryEmptyExternal = Template.bind({})
PrimaryEmptyExternal.args = { empty: true, default: slotValue, href: 'http://example.com' }

export const PrimaryBorder = Template.bind({})
PrimaryBorder.args = { border: true, default: slotValue }

export const PrimaryBorderLarge = Template.bind({})
PrimaryBorderLarge.args = { border: true, default: slotValue, large: true }

export const Primary = Template.bind({})
Primary.args = { default: slotValue }

export const PrimaryLarge = Template.bind({})
PrimaryLarge.args = { default: slotValue, large: true }

export const PrimaryShadow = Template.bind({})
PrimaryShadow.args = { default: slotValue, shadow: true }

export const PrimaryDisabled = Template.bind({})
PrimaryDisabled.args = { default: slotValue, disabled: true }

export const PrimaryDisabledLarge = Template.bind({})
PrimaryDisabledLarge.args = { default: slotValue, large: true, disabled: true }

export const PrimaryLoading = Template.bind({})
PrimaryLoading.args = { default: slotValue, loading: true }

export const PrimaryLoadingLarge = Template.bind({})
PrimaryLoadingLarge.args = { default: slotValue, large: true, loading: true }

export const SecondaryEmpty = Template.bind({})
SecondaryEmpty.args = { empty: true, default: slotValue, variant: 'secondary' }

export const SecondaryBorder = Template.bind({})
SecondaryBorder.args = { border: true, default: slotValue, variant: 'secondary' }

export const SecondaryBorderLarge = Template.bind({})
SecondaryBorderLarge.args = { border: true, default: slotValue, large: true, variant: 'secondary' }

export const Secondary = Template.bind({})
Secondary.args = { default: slotValue, variant: 'secondary' }

export const SecondaryLarge = Template.bind({})
SecondaryLarge.args = { default: slotValue, large: true, variant: 'secondary' }

export const SecondaryShadow = Template.bind({})
SecondaryShadow.args = { default: slotValue, shadow: true, variant: 'secondary' }

export const SecondaryDisabled = Template.bind({})
SecondaryDisabled.args = { default: slotValue, disabled: true, variant: 'secondary' }

export const SecondaryDisabledLarge = Template.bind({})
SecondaryDisabledLarge.args = {
  default: slotValue,
  large: true,
  disabled: true,
  variant: 'secondary',
}

export const SecondaryLoading = Template.bind({})
SecondaryLoading.args = { default: slotValue, loading: true, variant: 'secondary' }

export const SecondaryLoadingLarge = Template.bind({})
SecondaryLoadingLarge.args = {
  default: slotValue,
  large: true,
  loading: true,
  variant: 'secondary',
}

export const GreySecondaryEmpty = Template.bind({})
GreySecondaryEmpty.args = { empty: true, default: slotValue, variant: 'grey-secondary' }
