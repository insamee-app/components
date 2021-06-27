import { action } from '@storybook/addon-actions'
import NavMobile from '../components/organisms/NavMobile'
import AppButton from '../components/atoms/AppButton'

export default {
  component: NavMobile,
  title: 'Organisms/NavMobile',
  argTypes: {
    actions: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
    errors: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
    close: { action: 'close', table: { type: { summary: 'boolean' } } },
  },
}

const Template = (args, { argTypes }) => ({
  components: { NavMobile, AppButton },
  props: Object.keys(argTypes),
  data() {
    return {
      args,
    }
  },
  methods: {
    action: action('close'),
  },
  template: `<NavMobile @close="action" :value="value" :list="list"><template #actions> ${args.actions} </template></NavMobile>`,
})

export const Default = Template.bind({})
Default.args = {
  value: false,
  list: [
    { name: 'This is link 1', path: 'link 1' },
    { name: 'This is link 2', path: 'link 2' },
  ],
}

export const Actions = Template.bind({})
Actions.args = {
  value: false,
  actions: '<AppButton>A amazing button</AppButton>',
  list: [
    { name: 'This is link 1', path: 'link 1' },
    { name: 'This is link 2', path: 'link 2' },
  ],
}
