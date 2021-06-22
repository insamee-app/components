import Footer from '../components/organisms/Footer'

export default {
  component: Footer,
  title: 'Organisms/Footer',
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
    by: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: { Footer },
  props: Object.keys(argTypes),
  data() {
    return {
      args,
    }
  },
  template: `<Footer> ${args.default} <template #by> ${args.by} </template> </Footer>`,
})

export const Default = Template.bind({})

export const Item = Template.bind({})
Item.args = { default: '<div> a list of items </div' }
