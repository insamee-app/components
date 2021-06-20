import { action } from '@storybook/addon-actions'
import Header from '../components/organisms/Header'
import AppButton from '../components/atoms/AppButton'
import AppList from '../components/molecules/AppList'
import HeaderNav from '../components/organisms/HeaderNav'
import { Default as ListDefault } from './List.stories'

export default {
  component: Header,
  title: 'Organisms/Header',
  argTypes: {
    actions: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
    icon: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
    nav: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
    open: { action: 'open', table: { type: { summary: 'boolean' } } },
  },
}

const Template = (args, { argTypes }) => ({
  components: { Header, AppButton, AppList, HeaderNav },
  props: Object.keys(argTypes),
  data() {
    return {
      list: ListDefault.args.list,
    }
  },
  methods: {
    action: action('close'),
  },
  template: `<Header @open="action" :icon-link='iconLink' :icon-nav="iconNav"> ${args.nav} ${args.actions} </Header>`,
})

export const Primary = Template.bind({})
Primary.args = { iconLink: { name: 'Home' } }

export const PrimaryMobile = Template.bind({})
PrimaryMobile.args = { ...Primary.args, iconNav: true }

export const PrimaryActions = Template.bind({})
PrimaryActions.args = {
  ...Primary.args,
  actions: '<template #actions> <AppButton> An action </AppButton> </template>',
}

export const PrimaryActionsMobile = Template.bind({})
PrimaryActionsMobile.args = {
  ...PrimaryMobile.args,
  ...PrimaryActions.args,
}

export const PrimaryNav = Template.bind({})
PrimaryNav.args = {
  nav: '<template #nav> <HeaderNav> <AppList :list="list" row/> </HeaderNav> </template>',
}

export const PrimaryNavAction = Template.bind({})
PrimaryNavAction.args = { ...PrimaryActions.args, ...PrimaryNav.args }
