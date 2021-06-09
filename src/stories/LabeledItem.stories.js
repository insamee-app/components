import LabeledItem from '../components/molecules/LabeledItem'

export default {
  component: LabeledItem,
  title: 'Molecules/LabeledItem',
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: { LabeledItem },
  props: Object.keys(argTypes),
  data() {
    return {
      args,
    }
  },
  template: `<LabeledItem :label="label"> {{ args.default }} </LabeledItem>`,
})

export const Default = Template.bind({})
Default.args = { label: 'this is a label', default: 'this is the content' }
