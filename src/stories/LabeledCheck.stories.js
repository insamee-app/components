import LabeledCheck from '../components/molecules/LabeledCheck'
import { action } from '@storybook/addon-actions'

export default {
  component: LabeledCheck,
  title: 'Molecules/LabeledCheck',
  argTypes: {
    input: { action: 'change', table: { type: { summary: 'boolean' } } },
  },
}

const Template = (args, { argTypes }) => ({
  components: { LabeledCheck },
  props: Object.keys(argTypes),
  methods: {
    action: action('change'),
  },
  template: `<LabeledCheck @change="action" :value="value" :name="name" :label="label"/>`,
})

export const Checked = Template.bind({})
Checked.args = { value: true, name: 'name', label: 'a check box' }

export const Unchecked = Template.bind({})
Unchecked.args = { value: false, name: 'name', label: 'a check box' }
