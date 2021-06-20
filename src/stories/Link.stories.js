import AppLink from '../components/atoms/AppLink'

export default {
  component: AppLink,
  title: 'Atoms/AppLink',
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: 'this is a link',
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: { AppLink },
  props: Object.keys(argTypes),
  data() {
    return {
      args,
    }
  },
  template: "<AppLink :link='link' :variant='variant'> {{ args.default }} </AppLink>",
})

export const Primary = Template.bind({})
Primary.args = { link: 'https://exemple.com' }

export const Secondary = Template.bind({})
Secondary.args = { link: 'https://exemple.com', variant: 'secondary' }
