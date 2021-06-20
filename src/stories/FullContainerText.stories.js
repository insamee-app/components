import FullContainerText from '../components/organisms/FullContainerText'

export default {
  component: FullContainerText,
  title: 'Organisms/FullContainerText',
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: { FullContainerText },
  props: Object.keys(argTypes),
  data() {
    return {
      args,
    }
  },
  template: '<FullContainerText> {{ args.default }} </FullContainerText>',
})

export const Default = Template.bind({})
Default.args = { default: 'Hello from the text' }
