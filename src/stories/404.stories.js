import Error404 from '../components/templates/Error404'

export default {
  component: Error404,
  title: 'Templates/Error404',
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
    Error404,
  },
  props: Object.keys(argTypes),
  template: `<Error404 :to='to'> ${args.default} </Error404>`,
})

export const Primary = Template.bind({})
Primary.args = { default: 'Click to return to home', to: { name: 'hello' } }
