import { action } from '@storybook/addon-actions'
import AppTextarea from '../components/atoms/AppTextarea'

export default {
  component: AppTextarea,
  title: 'Atoms/AppTextarea',
  argTypes: {
    input: { action: 'input', table: { type: { summary: 'string' } } },
  },
}

const Template = (args, { argTypes }) => ({
  components: { AppTextarea },
  props: Object.keys(argTypes),
  methods: {
    action: action('input'),
  },
  template: `<AppTextarea :value="value" :name='name' :placeholder="placeholder" @input='action' :variant="variant" />`,
})

export const Default = Template.bind({})
Default.args = { value: 'This is the text !', name: 'text' }

export const Placeholder = Template.bind({})
Placeholder.args = { value: '', name: 'Text', placeholder: 'this is the placeholder' }

export const SecondaryDefault = Template.bind({})
SecondaryDefault.args = { value: 'This is the text !', name: 'text', variant: 'secondary' }

export const SecondaryPlaceholder = Template.bind({})
SecondaryPlaceholder.args = {
  value: '',
  name: 'Text',
  placeholder: 'this is the placeholder',
  variant: 'secondary',
}
