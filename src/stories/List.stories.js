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
    { name: ListItemStories.Default.args.default, path: 'home' },
    { name: ListItemStories.Default.args.default },
    { name: ListItemStories.Default.args.default, path: 'me' },
    { name: ListItemStories.Default.args.default, path: 'contact' },
  ],
}

export const Row = Template.bind({})
Row.args = { ...Default.args, row: true }
