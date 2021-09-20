import TutoratProfile from '../components/organisms/TutoratProfile'

export default {
  component: TutoratProfile,
  title: 'Organisms/TutoratProfile',
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: { TutoratProfile },
  props: Object.keys(argTypes),
  template:
    '<TutoratProfile   :last-name="lastName"   :first-name="firstName"   :current-role="currentRole"   :graduation-year="graduationYear"   :email="email"   :school-name="schoolName"   :text="text"   :preferred-subjects="preferredSubjects"   :difficulties-subjects="difficultiesSubjects" :avatar-url="avatarUrl"  />',
})

export const Default = Template.bind({})
Default.args = {
  lastName: 'a last name',
  firstName: 'a first name',
  currentRole: 'student',
  graduationYear: 2023,
  email: 'this is a super email',
  schoolName: ' this is a school name',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac purus erat. Mauris in fringilla orci. Duis maximus dictum urna sed interdum. Pellentesque faucibus tellus risus, in tempus nunc rhoncus a. Mauris non metus feugiat, mattis mauris et, dictum orci. Vivamus vitae porta metus. Nulla ut fringilla justo. Aliquam lobortis gravida ligula, et pretium ex euismod id. Nam ut consectetur mauris, id vestibulum elit. Aenean non libero sed diam facilisis lacinia. Curabitur nec turpis consectetur est condimentum convallis sit amet vitae lacus. Maecenas mattis porta tortor eu elementum. Nulla rhoncus turpis felis, imperdiet convallis magna viverra pretium. Quisque ac mauris semper, tempus est vel, tincidunt risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum at libero eu sem rhoncus gravida ut lacinia leo.',
  preferredSubjects: ['lorem', 'upsum', 'dolor', 'sit amet'],
  difficultiesSubjects: ['lorem', 'upsum', 'dolor', 'sit amet'],
  avatarUrl: undefined,
}
