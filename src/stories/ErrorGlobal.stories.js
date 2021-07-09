import ErrorGlobal from '../components/templates/ErrorGlobal'

export default {
  component: ErrorGlobal,
  title: 'Templates/ErrorGlobal',
  decorators: [
    () => ({
      template: '<div class="relative w-full h-screen overflow-hidden"><story/></div>',
    }),
  ],
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
