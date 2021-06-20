import ProfileBasic from '../components/organisms/ProfileBasic'

export default {
  component: ProfileBasic,
  title: 'Organisms/ProfileBasic',
}

const profile = {
  last_name: 'a last name',
  first_name: 'a first name',
  current_role: 'student',
  graduation_year: 2023,
  user: {
    email: 'this is a super email',
  },
  school: {
    name: ' this is a school name',
  },
}

const Template = (args, { argTypes }) => ({
  components: { ProfileBasic },
  props: Object.keys(argTypes),
  template: '<ProfileBasic :variant="variant" :profile="profile" />',
})

export const PrimaryEmpty = Template.bind({})
PrimaryEmpty.args = { variant: 'primary' }

export const Primary = Template.bind({})
Primary.args = { variant: 'primary', profile }

export const SecondaryEmpty = Template.bind({})
SecondaryEmpty.args = { variant: 'secondary' }

export const Secondary = Template.bind({})
Secondary.args = { variant: 'secondary', profile }
