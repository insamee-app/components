import AppContact from '../components/molecules/AppContact'

export default {
  component: AppContact,
  title: 'Molecules/AppContact',
}

const Template = (args, { argTypes }) => ({
  components: { AppContact },
  props: Object.keys(argTypes),
  template: `<AppContact :links="links" :variant="variant"/>`,
})

export const Primary = Template.bind({})
Primary.args = { links: { facebook: undefined, instagram: 'https://instagram.com' } }

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  ...Primary.args,
}
