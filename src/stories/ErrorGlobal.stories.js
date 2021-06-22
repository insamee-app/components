import ErrorGlobal from '../components/template/ErrorGlobal'

export default {
  component: ErrorGlobal,
  title: 'Template/ErrorGlobal',
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: {
    ErrorGlobal,
  },
  props: Object.keys(argTypes),
  template: `<ErrorGlobal :to='to' :error='error'> ${args.default} </ErrorGlobal>`,
})

export const Primary = Template.bind({})
Primary.args = {
  default: 'Click to return to home',
  to: { name: 'hello' },
  error: { message: 'This is an issue' },
}
