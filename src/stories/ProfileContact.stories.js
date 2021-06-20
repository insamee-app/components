import ProfileContact from '../components/organisms/ProfileContact'
import { Primary as AppContactPrimary } from './AppContact.stories'

export default {
  component: ProfileContact,
  title: 'Organisms/ProfileContact',
}

const Template = (args, { argTypes }) => ({
  components: { ProfileContact },
  props: Object.keys(argTypes),
  template: `<ProfileContact :links="links" :variant="variant"/>`,
})

export const Primary = Template.bind({})
Primary.args = { links: AppContactPrimary.args.links }

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  links: AppContactPrimary.args.links,
}
