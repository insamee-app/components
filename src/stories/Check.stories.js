import { action } from '@storybook/addon-actions'
import AppCheck from '../components/atoms/AppCheck'

export default {
  component: AppCheck,
  title: 'Atoms/AppCheck',
  argTypes: {
    input: { action: 'change', table: { type: { summary: 'boolean' } } },
  },
}

const Template = (args, { argTypes }) => ({
  components: { AppCheck },
  props: Object.keys(argTypes),
  methods: {
    action: action('change'),
  },
  template: "<AppCheck :value='value' :name='name' @change='action' :variant='variant' />",
})

export const Unchecked = Template.bind({})
Unchecked.args = { name: 'name', value: false }

export const Checked = Template.bind({})
Checked.args = { name: 'name', value: true }

export const Primary = Template.bind({})
Primary.args = { name: 'name', value: true, variant: 'primary' }

export const Secondary = Template.bind({})
Secondary.args = { name: 'name', value: true, variant: 'secondary' }
