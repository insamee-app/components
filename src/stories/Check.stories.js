import { action } from '@storybook/addon-actions'
import AppCheck from '../components/atoms/AppCheck'

export default {
  component: AppCheck,
  title: 'Atoms/AppCheck',
  argTypes: {
    input: { action: 'input', table: { type: { summary: 'boolean' } } },
  },
}

const Template = (args, { argTypes }) => ({
  components: { AppCheck },
  props: Object.keys(argTypes),
  methods: {
    action(value) {
      this.value = value
      action('input')(value)
    },
  },
  template: "<AppCheck :value='value' :name='name' @input='action' />",
})

export const Unchecked = Template.bind({})
Unchecked.args = { name: 'name', value: false }

export const Checked = Template.bind({})
Checked.args = { name: 'name', value: true }
