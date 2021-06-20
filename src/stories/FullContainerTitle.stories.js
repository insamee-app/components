import FullContainerTitle from '../components/organisms/FullContainerTitle'

export default {
  component: FullContainerTitle,
  title: 'Organisms/FullContainerTitle',
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: { FullContainerTitle },
  props: Object.keys(argTypes),
  data() {
    return {
      args,
    }
  },
  template: '<FullContainerTitle> {{ args.default }} </FullContainerTitle>',
})

export const Default = Template.bind({})
Default.args = { default: 'Hello from the title' }
