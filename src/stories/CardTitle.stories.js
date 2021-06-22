import AppCardTitle from '../components/molecules/AppCardTitle'

export default {
  component: AppCardTitle,
  title: 'Molecules/AppCardTitle',
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: { AppCardTitle },
  props: Object.keys(argTypes),
  template: `<AppCardTitle> ${args.default} </AppCardTitle>`,
})

export const Default = Template.bind({})
Default.args = { default: 'This is the title' }
