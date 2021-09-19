import LabeledItem from '../components/molecules/LabeledItem'
import Select from '../components/molecules/Select'

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
  components: { LabeledItem, Select },
  props: Object.keys(argTypes),
  data() {
    return {
      args,
    }
  },
  template: `<LabeledItem :label="label" :input="input" :name="name"> ${args.default} </LabeledItem>`,
})

export const Default = Template.bind({})
Default.args = { label: 'this is a label', default: 'this is the content' }

export const Input = Template.bind({})
Input.args = { ...Default.args, input: true }

export const SelectItem = Template.bind({})
SelectItem.args = {
  ...Default.args,
  name: 'select',
  default: '<Select name="select" :value="{}"/>',
}
