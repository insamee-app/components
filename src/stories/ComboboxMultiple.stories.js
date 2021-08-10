import { action } from '@storybook/addon-actions'
import ComboboxMultiple from '../components/molecules/ComboboxMultiple'
import { Primary as SelectPrimary } from './Select.stories'

export default {
  component: ComboboxMultiple,
  title: 'Molecules/ComboboxMultiple',
}

const Template = (args, { argTypes }) => ({
  components: { ComboboxMultiple },
  props: Object.keys(argTypes),
  data() {
    return {
      args,
      selectedItems: [],
    }
  },
  methods: {
    action(value) {
      this.selectedItems = value
      action('selected')(value)
    },
  },
  template: `<ComboboxMultiple :placeholder="placeholder" :items="items" :variant="variant" :border="border" @selected="action" :value="selectedItems"> ${args.item} ${args.selectItem} </ComboboxMultiple>`,
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

export const CustomSelected = Template.bind({})
CustomSelected.args = {
  ...Primary.args,
  item: '<template #item="{ item }">Custom selected {{ item }}</template>',
}

export const CustomSelectItem = Template.bind({})
CustomSelectItem.args = {
  ...Primary.args,
  selectItem: '<template #selectItem="{ item }">Custom select item {{ item }}</template>',
}
