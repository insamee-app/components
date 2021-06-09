import { action } from '@storybook/addon-actions'
import AppCard from '../components/organisms/AppCard'
import AppButton from '../components/atoms/AppButton'

export default {
  component: AppCard,
  title: 'Organisms/AppCard',
  argTypes: {
    header: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
    actions: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
    close: { action: 'close', table: { type: { summary: 'boolean' } } },
  },
}

const Template = (args, { argTypes }) => ({
  components: { AppCard, AppButton },
  props: Object.keys(argTypes),
  data() {
    return {
      args,
    }
  },
  methods: {
    action: action('close'),
  },
  template: `<AppCard :closable="closable" @close="action"> ${args.header} ${args.default} ${args.actions} </AppCard>`,
})

export const Empty = Template.bind({})
Empty.args = {}

export const Closable = Template.bind({})
Closable.args = { closable: true }

export const Header = Template.bind({})
Header.args = { header: '<template #header> This is the title </template>' }

export const Text = Template.bind({})
Text.args = { default: 'This is the text from the card !' }

export const Actions = Template.bind({})
Actions.args = {
  actions:
    '<template #actions> <div class="flex justify-end"> <AppButton>Actions</AppButton> </div> </template>',
}

export const Full = Template.bind({})
Full.args = {
  header: Header.args.header,
  default: Text.args.default,
  actions: Actions.args.actions,
}
