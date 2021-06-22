import { action } from '@storybook/addon-actions'
import AppCard from '../components/molecules/AppCard'
import AppCardHeader from '../components/molecules/AppCardHeader'
import AppCardTitle from '../components/molecules/AppCardTitle'
import AppCardContent from '../components/molecules/AppCardContent'
import AppButton from '../components/atoms/AppButton'

export default {
  component: AppCard,
  title: 'Molecules/AppCard',
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
  components: { AppCard, AppButton, AppCardTitle, AppCardHeader, AppCardContent },
  props: Object.keys(argTypes),
  methods: {
    action: action('close'),
  },
  template: `<AppCard> ${args.header} ${args.default} ${args.actions} </AppCard>`,
})

export const Empty = Template.bind({})
Empty.args = {}

export const Closable = Template.bind({})
Closable.args = {
  header:
    '<template #header> <AppCardHeader @close="action" closable> <AppCardTitle> This is the title </AppCardTitle> </AppCardHeader> </template>',
}

export const Text = Template.bind({})
Text.args = {
  default:
    '<template> <AppCardContent> This is the text from the card ! </AppCardContent> </template>',
}

export const Actions = Template.bind({})
Actions.args = {
  actions:
    '<template #actions> <div class="flex justify-end"> <AppButton> Actions </AppButton> </div> </template>',
}

export const Full = Template.bind({})
Full.args = {
  header: Closable.args.header,
  default: Text.args.default,
  actions: Actions.args.actions,
}
