import { action } from '@storybook/addon-actions'
import Combobox from '../components/molecules/Combobox'
import { Primary as SelectPrimary } from './Select.stories'

export default {
  component: Combobox,
  title: 'Molecules/Combobox',
}

const Template = (args, { argTypes }) => ({
  components: { Combobox },
  props: Object.keys(argTypes),
  data() {
    return {
      args,
    }
  },
  methods: {
    action: action('selected'),
  },
  template: `<Combobox :placeholder="placeholder" :items="items" :variant="variant" :border="border" @selected="action" />`,
})

export const Primary = Template.bind({})
Primary.args = {
  ...SelectPrimary.args,
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
