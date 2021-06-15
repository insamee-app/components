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
  template: '<AppListItem :row="row"> {{ args.default }} </AppListItem>',
})

export const Default = Template.bind({})
Default.args = { default: 'a list item' }

export const Row = Template.bind({})
Row.args = { ...Default.args, row: true }
