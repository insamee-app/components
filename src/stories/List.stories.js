import AppList from '../components/molecules/AppList'

import * as ListItemStories from './ListItem.stories'

export default {
  component: AppList,
  title: 'Molecules/AppList',
}

const Template = (args, { argTypes }) => ({
  components: { AppList },
  props: Object.keys(argTypes),
  template: '<AppList :list="list" :row="row"/>',
})

export const Default = Template.bind({})
Default.args = {
  list: [
    { name: ListItemStories.Primary.args.default, path: { name: 'index' } },
    { name: ListItemStories.Primary.args.default },
    { name: ListItemStories.Primary.args.default, path: { name: 'me' } },
    { name: ListItemStories.Primary.args.default, path: { name: 'contact' } },
  ],
}

export const Row = Template.bind({})
Row.args = { ...Default.args, row: true }
