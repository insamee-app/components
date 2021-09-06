import AppFrame from '../components/atoms/AppFrame'

export default {
  component: AppFrame,
  title: 'Atoms/AppFrame',
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
  },
}

const slotValue = 'From the Frame'

const Template = (args, { argTypes }) => ({
  components: { AppFrame },
  props: Object.keys(argTypes),
  data() {
    return {
      args,
    }
  },
  template: '<AppFrame :variant="variant"> {{ args.default }} </AppFrame>',
})

export const Default = Template.bind({})
Default.args = { default: slotValue }

export const SecondaryDefault = Template.bind({})
SecondaryDefault.args = { default: slotValue, variant: 'secondary' }
