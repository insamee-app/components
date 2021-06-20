import CardTitle from '../components/organisms/CardTitle'

export default {
  component: CardTitle,
  title: 'Organisms/CardTitle',
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: { CardTitle },
  props: Object.keys(argTypes),
  template: `<CardTitle> ${args.default} </CardTitle>`,
})

export const Default = Template.bind({})
Default.args = { default: 'This is the title' }
