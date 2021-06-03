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

const Template = (args, { argTypes }) => ({
  components: { AppChip },
  props: Object.keys(argTypes),
  data() {
    return {
      args,
    }
  },
  template: "<AppChip :component='component'> {{ args.default }} </AppChip>",
})

export const Default = Template.bind({})
Default.args = { default: 'football' }
