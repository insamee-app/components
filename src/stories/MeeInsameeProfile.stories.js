import MeeInsameeProfile from '../components/templates/MeeInsameeProfile'

export default {
  component: MeeInsameeProfile,
  title: 'Templates/MeeInsameeProfile',
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: { MeeInsameeProfile },
  props: Object.keys(argTypes),
  template: `<MeeInsameeProfile   :last-name="lastName"   :first-name="firstName"   :current-role="currentRole"   :graduation-year="graduationYear"   :email="email"   :school-name="schoolName"   :text="text"   :skills="skills"   :focus-interests="focusInterests" :associations="associations"   :socials="socials"   :avatar-url="avatarUrl"> ${args.report} </MeeInsameeProfile>`,
})

export const Default = Template.bind({})
Default.args = {
  report: '<template #report><div> Report a mee </div></template>',
  lastName: 'a last name',
  firstName: 'a first name',
  currentRole: 'student',
  graduationYear: 2023,
  email: 'this is a super email',
  schoolName: ' this is a school name',
  socials: {
    facebook: 'facebook',
    instagram: undefined,
  },
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac purus erat. Mauris in fringilla orci. Duis maximus dictum urna sed interdum. Pellentesque faucibus tellus risus, in tempus nunc rhoncus a. Mauris non metus feugiat, mattis mauris et, dictum orci. Vivamus vitae porta metus. Nulla ut fringilla justo. Aliquam lobortis gravida ligula, et pretium ex euismod id. Nam ut consectetur mauris, id vestibulum elit. Aenean non libero sed diam facilisis lacinia. Curabitur nec turpis consectetur est condimentum convallis sit amet vitae lacus. Maecenas mattis porta tortor eu elementum. Nulla rhoncus turpis felis, imperdiet convallis magna viverra pretium. Quisque ac mauris semper, tempus est vel, tincidunt risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum at libero eu sem rhoncus gravida ut lacinia leo.',
  focusInterests: ['lorem', 'upsum', 'dolor', 'sit amet'],
  skills: ['lorem', 'upsum', 'dolor', 'sit amet'],
  associations: [
    {
      name: 'lorem',
      id: 1,
      image_url: null,
    },
    {
      name: 'lorem',
      id: 2,
      image_url: null,
    },
  ],
  avatarUrl: undefined,
}
