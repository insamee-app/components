import { action } from '@storybook/addon-actions'
import AppTextarea from '../components/atoms/AppTextarea'

export default {
  component: AppTextarea,
  title: 'Atoms/AppTextarea',
  argTypes: {
    input: { action: 'input', table: { type: { summary: 'string' } } },
  },
}

const Template = (args, { argTypes }) => ({
  components: { AppTextarea },
  props: Object.keys(argTypes),
  methods: {
    action: action('input'),
  },
  template: `<AppTextarea :value="value" :name='name' @input='action' />`,
})

export const Default = Template.bind({})
Default.args = { value: 'This is the text !', name: 'text' }
