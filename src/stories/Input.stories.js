import { action } from '@storybook/addon-actions'
import AppInput from '../components/atoms/AppInput'

export default {
  component: AppInput,
  title: 'Atoms/AppInput',
  argTypes: {
    input: { action: 'input', table: { type: { summary: 'string' } } },
  },
}

const Template = (args, { argTypes }) => ({
  components: { AppInput },
  props: Object.keys(argTypes),
  methods: {
    action: action('input'),
  },
  template: '<AppInput :value="value" @input="action" :type="type" :placeholder="placeholder" />',
})

export const Default = Template.bind({})
Default.args = { value: 'Try it!' }

export const Number = Template.bind({})
Number.args = { value: '', type: 'Number' }

export const Placeholder = Template.bind({})
Placeholder.args = { value: '', placeholder: 'this is a placeholder' }
