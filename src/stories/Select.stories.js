import { action } from '@storybook/addon-actions'
import Select from '../components/molecules/Select'

export default {
  component: Select,
  title: 'Molecules/Select',
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
    prepend: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: { Select },
  props: Object.keys(argTypes),
  data() {
    return {
      args,
      selectedItem: {},
      dismiss: undefined,
    }
  },
  methods: {
    action(value) {
      this.selectedItem = value
      this.dismiss = value.text
      action('selected')(value)
    },
  },
  template: `<Select :placeholder="placeholder" :items="items" :border="border" :variant="variant" @selected="action" :value="selectedItem" :dismiss-value="dismiss"/>`,
})

export const Primary = Template.bind({})
Primary.args = {
  border: false,
  placeholder: 'This is the placeholder',
  items: [
    { text: 'lorem 1', value: '1' },
    { text: 'ipsum 2', value: '2' },
    { text: 'dolor 3', value: '3' },
    { text: 'it 4', value: '4' },
    { text: 'are 5', value: '5' },
    { text: 'lorem 6', value: '6' },
    { text: 'ipsum 7', value: '7' },
    { text: 'dolor 8', value: '8' },
    { text: 'it 9', value: '9' },
    { text: 'are 10', value: '10' },
  ],
}

export const PrimaryBorder = Template.bind({})
PrimaryBorder.args = {
  ...Primary.args,
  border: true,
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...Primary.args,
  variant: 'secondary',
}

export const SecondaryBorder = Template.bind({})
SecondaryBorder.args = {
  ...Secondary.args,
  border: true,
}
