import FullContainer from '../components/organisms/FullContainer'
import FullContainerTitle from '../components/organisms/FullContainerTitle'
import FullContainerText from '../components/organisms/FullContainerText'

export default {
  component: FullContainer,
  title: 'Organisms/FullContainer',
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: { FullContainer, FullContainerTitle, FullContainerText },
  props: Object.keys(argTypes),
  data() {
    return {
      args,
    }
  },
  template: `<FullContainer> ${args.default} </FullContainer>`,
})

export const Default = Template.bind({})
Default.args = { default: 'Hello from the inside' }

export const Title = Template.bind({})
Title.args = { default: '<FullContainerTitle> Hello, this is the title </FullContainerTitle>' }

export const Text = Template.bind({})
Text.args = { default: '<FullContainerText> Hello, this is the text </FullContainerText>' }

export const TitleText = Template.bind({})
TitleText.args = { default: Title.args.default + Text.args.default }
