import { action } from '@storybook/addon-actions'
import AppInput from '../components/atoms/AppInput'

export default {
  component: AppInput,
  title: 'Atoms/AppInput',
  argTypes: {
    prepend: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
    input: { action: 'input', table: { type: { summary: 'string' } } },
  },
}

const Template = (args, { argTypes }) => ({
  components: { AppInput },
  props: Object.keys(argTypes),
  methods: {
    action: action('input'),
  },
  template:
    '<AppInput :value="value" @input="action" :type="type" :placeholder="placeholder" :variant="variant" :border="border" />',
})

export const Primary = Template.bind({})
Primary.args = { value: 'Try it!' }

export const PrimaryBorder = Template.bind({})
PrimaryBorder.args = { ...Primary.args, border: true }

export const Secondary = Template.bind({})
Secondary.args = { ...Primary.args, variant: 'secondary' }

export const SecondaryBorder = Template.bind({})
SecondaryBorder.args = { ...PrimaryBorder.args, variant: 'secondary' }

export const PrimaryPlaceholder = Template.bind({})
PrimaryPlaceholder.args = { placeholder: 'this is the placeholder' }

export const PrimaryBorderPlaceholder = Template.bind({})
PrimaryBorderPlaceholder.args = { ...PrimaryPlaceholder.args, border: true }

export const SecondaryPlaceholder = Template.bind({})
SecondaryPlaceholder.args = { ...PrimaryPlaceholder.args, variant: 'secondary' }

export const SecondaryBorderPlaceholder = Template.bind({})
SecondaryBorderPlaceholder.args = { ...PrimaryBorderPlaceholder.args, variant: 'secondary' }

export const Number = Template.bind({})
Number.args = { value: '', type: 'Number' }
