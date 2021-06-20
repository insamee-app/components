import HeaderNav from '../components/organisms/HeaderNav'
import AppList from '../components/molecules/AppList'
import { Default as ListDefault } from './List.stories'

export default {
  component: HeaderNav,
  title: 'Organisms/HeaderNav',
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: { HeaderNav, AppList },
  props: Object.keys(argTypes),
  data() {
    return {
      list: ListDefault.args.list,
    }
  },
  template: `<HeaderNav> ${args.default} </HeaderNav>`,
})

export const Default = Template.bind({})
Default.args = { default: 'a list of items can be placed here' }

export const Nav = Template.bind({})
Nav.args = { default: '<AppList :list="list" row/>' }
