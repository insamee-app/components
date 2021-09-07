import { action } from '@storybook/addon-actions'
import LabeledInput from '../components/molecules/LabeledInput'

export default {
  component: LabeledInput,
  title: 'Molecules/LabeledInput',
  argTypes: {
    addon: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
    prepend: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
    input: { action: 'input', table: { type: { summary: 'string' } } },
  },
}

const Template = (args, { argTypes }) => ({
  components: { LabeledInput },
  props: Object.keys(argTypes),
  methods: {
    action: action('input'),
  },
  template: `<LabeledInput :value='value' :name='name' :label="label" :type="type" :border="border" :placeholder="placeholder" :error-message="errorMessage" @input="action"><template #addon> ${args.addon} </template></LabeledInput>`,
})

export const Default = Template.bind({})
Default.args = { name: 'name', value: '' }

export const Placeholder = Template.bind({})
Placeholder.args = { ...Default.args, placeholder: 'this is a placeholder' }

export const Labeled = Template.bind({})
Labeled.args = {
  ...Placeholder.args,
  label: 'A input component',
}

export const Addon = Template.bind({})
Addon.args = {
  ...Labeled.args,
  addon: 'An addon',
}

export const Error = Template.bind({})
Error.args = {
  ...Labeled.args,
  errorMessage: 'An error message',
}

export const BorderDefault = Template.bind({})
BorderDefault.args = { name: 'name', value: '', border: true }

export const BorderPlaceholder = Template.bind({})
BorderPlaceholder.args = { ...BorderDefault.args, placeholder: 'this is a placeholder' }

export const BorderLabeled = Template.bind({})
BorderLabeled.args = {
  ...BorderPlaceholder.args,
  label: 'A input component',
}

export const BorderAddon = Template.bind({})
BorderAddon.args = {
  ...BorderLabeled.args,
  addon: 'An addon',
}

export const BorderError = Template.bind({})
BorderError.args = {
  ...BorderLabeled.args,
  errorMessage: 'An error message',
}
