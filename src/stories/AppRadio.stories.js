import { action } from '@storybook/addon-actions'
import AppRadio from '../components/molecules/AppRadio'

export default {
  component: AppRadio,
  title: 'Molecules/AppRadio',
}

const Template = (args, { argTypes }) => ({
  components: { AppRadio },
  props: Object.keys(argTypes),
  data() {
    return {
      item: {},
    }
  },
  methods: {
    action(item) {
      action('select')(item)
      this.item = item
    },
  },
  template: `<AppRadio :selected="item" :items="items" @select="action" variant="variant"/>`,
})

export const Primary = Template.bind({})
Primary.args = {
  items: [
    {
      text: 'text 1',
      value: 'value 1',
    },
    {
      text: 'text 2',
      value: 'value 2',
    },
    {
      text: 'text 3',
      value: 'value 3',
    },
  ],
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...Primary.args,
  variant: 'secondary',
}
