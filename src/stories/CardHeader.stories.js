import { action } from '@storybook/addon-actions'
import AppCardHeader from '../components/molecules/AppCardHeader'

export default {
  component: AppCardHeader,
  title: 'Molecules/AppCardHeader',
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: { AppCardHeader },
  props: Object.keys(argTypes),
  methods: {
    action: action('close'),
  },
  template: `<AppCardHeader @close="action" :closable="closable"> ${args.default} </AppCardHeader>`,
})

export const Default = Template.bind({})
Default.args = { default: 'From the header' }

export const Closable = Template.bind({})
Closable.args = { default: 'From the header', closable: true }
