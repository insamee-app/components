import { action } from '@storybook/addon-actions'
import Header from '../components/organisms/Header'
import AppButton from '../components/atoms/AppButton'

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
    open: { action: 'open', table: { type: { summary: 'boolean' } } },
  },
}

const Template = (args, { argTypes }) => ({
  components: { Header, AppButton },
  props: Object.keys(argTypes),
  methods: {
    action: action('close'),
  },
  template: `<Header @open="action" :iconLink='iconLink'> ${args.actions} </Header>`,
})

export const Default = Template.bind({})
Default.args = { iconLink: { name: 'Home' } }

export const Actions = Template.bind({})
Actions.args = {
  ...Default.args,
  actions: '<template #actions> <AppButton> An action </AppButton> </template>',
}
