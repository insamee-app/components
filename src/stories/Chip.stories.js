import AppChip from '../components/atoms/AppChip'

export default {
  component: AppChip,
  title: 'Atoms/AppChip',
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
    component: {
      control: { type: 'select', options: ['span', 'li'] },
    },
  },
}

const slotValue = 'lorem ipsum'

const Template = (args, { argTypes }) => ({
  components: { AppChip },
  props: Object.keys(argTypes),
  data() {
    return {
      args,
    }
  },
  template:
    "<AppChip :component='component' :small='small' :variant='variant'> {{ args.default }} </AppChip>",
})

export const Primary = Template.bind({})
Primary.args = { default: slotValue }

export const PrimarySmall = Template.bind({})
PrimarySmall.args = { default: slotValue, small: true }

export const Secondary = Template.bind({})
Secondary.args = { default: slotValue, variant: 'secondary' }

export const SecondarySmall = Template.bind({})
SecondarySmall.args = { default: slotValue, small: true, variant: 'secondary' }
