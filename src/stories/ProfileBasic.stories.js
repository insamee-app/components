import ProfileBasic from '../components/organisms/ProfileBasic'

export default {
  component: ProfileBasic,
  title: 'Organisms/ProfileBasic',
}

const profile = {
  lastName: 'a last name',
  firstName: 'a first name',
  currentRole: 'student',
  graduationYear: 2023,
  email: 'this is a super email',
  schoolName: ' this is a school name',
}

const Template = (args, { argTypes }) => ({
  components: { ProfileBasic },
  props: Object.keys(argTypes),
  template:
    '<ProfileBasic :variant="variant" :lastName="lastName" :firstName="firstName" :currentRole="currentRole" :graduationYear="graduationYear" :email="email" :schoolName="schoolName" />',
})

export const PrimaryEmpty = Template.bind({})
PrimaryEmpty.args = { variant: 'primary' }

export const Primary = Template.bind({})
Primary.args = { variant: 'primary', ...profile }

export const SecondaryEmpty = Template.bind({})
SecondaryEmpty.args = { variant: 'secondary' }

export const Secondary = Template.bind({})
Secondary.args = { variant: 'secondary', ...profile }
