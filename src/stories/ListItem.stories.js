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
  template:
    '<AppListItem :row="row" :active="active" :link="true"> {{ args.default }} </AppListItem>',
})

export const Primary = Template.bind({})
Primary.args = { default: 'a list item' }

export const PrimaryLink = Template.bind({})
PrimaryLink.args = { default: 'a list item', link: true }

export const PrimaryLinkActive = Template.bind({})
PrimaryLinkActive.args = { default: 'a list item', active: true, link: true }

export const PrimaryRow = Template.bind({})
PrimaryRow.args = { default: 'a list item', row: true }

export const PrimaryRowLink = Template.bind({})
PrimaryRowLink.args = { default: 'a list item', row: true, link: true }

export const PrimaryRowLinkActive = Template.bind({})
PrimaryRowLinkActive.args = { default: 'a list item', row: true, active: true, link: true }
