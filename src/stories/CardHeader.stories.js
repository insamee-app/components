import { action } from '@storybook/addon-actions'
import CardHeader from '../components/organisms/CardHeader'

export default {
  component: CardHeader,
  title: 'Organisms/CardHeader',
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: { CardHeader },
  props: Object.keys(argTypes),
  methods: {
    action: action('close'),
  },
  template: `<CardHeader @close="action" :closable="closable"> ${args.default} </CardHeader>`,
})

export const Default = Template.bind({})
Default.args = { default: 'From the header' }

export const Closable = Template.bind({})
Closable.args = { default: 'From the header', closable: true }
