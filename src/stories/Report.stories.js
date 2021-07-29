import { action } from '@storybook/addon-actions'
import Report from '../components/organisms/Report'
import { Primary as RadioDefault } from './AppRadio.stories'

export default {
  component: Report,
  title: 'Organisms/Report',
}

const Template = (args, { argTypes }) => ({
  components: { Report },
  props: Object.keys(argTypes),
  methods: {
    closeAction: action('close'),
    sendAction: action('send'),
  },
  template: `<Report @close="closeAction" @send="sendAction" :items="items" :loading="loading" :error-message="errorMessage" />`,
})

export const Default = Template.bind({})
Default.args = { ...RadioDefault.args, loading: false }

export const Error = Template.bind({})
Error.args = { ...Default.args, errorMessage: 'There is an error' }
