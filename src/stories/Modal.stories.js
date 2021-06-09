import { action } from '@storybook/addon-actions'
import AppModal from '../components/atoms/AppModal'

export default {
  component: AppModal,
  title: 'Atoms/AppModal',
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
    outside: { action: 'outside', table: { type: { summary: 'boolean' } } },
  },
}

const slotValue = 'inside a modal'

const Template = (args, { argTypes }) => ({
  components: { AppModal },
  props: Object.keys(argTypes),
  data() {
    return {
      args,
    }
  },
  methods: {
    action: action('outside'),
  },
  template: '<AppModal @outside="action" :value="value"> {{ args.default }} </AppModal>',
})

export const Default = Template.bind({})
Default.args = { value: true, default: slotValue }
