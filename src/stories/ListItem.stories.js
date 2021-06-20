import AppListItem from '../components/molecules/AppListItem'

export default {
  component: AppListItem,
  decorators: [() => ({ template: '<ul><story/></ul>' })],
  title: 'Molecules/AppListItem',
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: { AppListItem },
  props: Object.keys(argTypes),
  data() {
    return { args }
  },
  template: '<AppListItem :row="row" :to="to"> {{ args.default }} </AppListItem>',
})

export const Primary = Template.bind({})
Primary.args = { default: 'a list item' }

export const PrimaryTo = Template.bind({})
PrimaryTo.args = { default: 'a list item', to: { name: 'index' } }

export const PrimaryRow = Template.bind({})
PrimaryRow.args = { default: 'a list item', row: true }

export const PrimaryRowTo = Template.bind({})
PrimaryRowTo.args = { default: 'a list item', row: true, to: { name: 'index' } }
