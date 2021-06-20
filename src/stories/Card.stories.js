import { action } from '@storybook/addon-actions'
import Card from '../components/organisms/Card'
import CardHeader from '../components/organisms/CardHeader'
import CardTitle from '../components/organisms/CardTitle'
import CardContent from '../components/organisms/CardContent'
import AppButton from '../components/atoms/AppButton'

export default {
  component: Card,
  title: 'Organisms/Card',
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
  components: { Card, AppButton, CardTitle, CardHeader, CardContent },
  props: Object.keys(argTypes),
  methods: {
    action: action('close'),
  },
  template: `<Card> ${args.header} ${args.default} ${args.actions} </Card>`,
})

export const Empty = Template.bind({})
Empty.args = {}

export const Closable = Template.bind({})
Closable.args = {
  header:
    '<template #header> <CardHeader @close="action" closable> <CardTitle> This is the title </CardTitle> </CardHeader> </template>',
}

export const Text = Template.bind({})
Text.args = {
  default: '<template> <CardContent> This is the text from the card ! </CardContent> </template>',
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
