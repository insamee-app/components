import AppContainer from '../components/organisms/AppContainer'

export default {
  component: AppContainer,
  title: 'Organisms/AppContainer',
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: { AppContainer },
  props: Object.keys(argTypes),
  template: `<AppContainer> ${args.default} </AppContainer>`,
})

export const Default = Template.bind({})

export const Content = Template.bind({})
Content.args = { default: '<div> a list of items </div>' }
