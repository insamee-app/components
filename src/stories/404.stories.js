import Error from '../components/templates/404'

export default {
  component: Error,
  title: 'Templates/404',
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
    Error,
  },
  props: Object.keys(argTypes),
  template: `<Error :to='to'> ${args.default} </Error>`,
})

export const Primary = Template.bind({})
Primary.args = { default: 'Click to return to home', to: { name: 'hello' } }
