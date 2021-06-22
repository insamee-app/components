import Contact from '../components/template/Contact'

export default {
  component: Contact,
  title: 'Template/Contact',
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
    Contact,
  },
  props: Object.keys(argTypes),
  template: `<Contact :mail="mail"> ${args.default} </Contact>`,
})

export const Primary = Template.bind({})
Primary.args = {
  mail: 'mailto:exemple@exemple.com',
  default: 'For the graphic',
}
