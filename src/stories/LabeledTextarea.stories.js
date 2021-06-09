import { action } from '@storybook/addon-actions'
import LabeledTextarea from '../components/molecules/LabeledTextarea'

export default {
  component: LabeledTextarea,
  title: 'Molecules/LabeledTextarea',
  argTypes: {
    addon: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: { LabeledTextarea },
  props: Object.keys(argTypes),
  data() {
    return {
      args,
    }
  },
  methods: {
    action: action('input'),
  },
  template: `<LabeledTextarea :value="value" @input="action" :label="label" :name="name" :placeholder="placeholder" :error-message="errorMessage" />`,
})

export const Default = Template.bind({})
Default.args = {
  value: 'This is the text from the textarea',
  label: 'Label from a textarea',
  name: 'textarea',
}

export const Placeholder = Template.bind({})
Placeholder.args = { ...Default.args, value: '', placeholder: 'This is the placeholder' }

export const Error = Template.bind({})
Error.args = { ...Default.args, errorMessage: 'this is an error' }
