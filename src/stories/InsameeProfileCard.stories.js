import MeeProfileCard from '../components/organisms/MeeProfileCard'

export default {
  component: MeeProfileCard,
  title: 'Organisms/MeeProfileCard',
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
    MeeProfileCard,
  },
  props: Object.keys(argTypes),
  template: `<MeeProfileCard :lastName="lastName" :firstName="firstName" :userId="userId" :text="text" :skills="skills" :current-role="currentRole" :associations="associations" :link="link" :type="type"> </MeeProfileCard>`,
})

export const Primary = Template.bind({})
Primary.args = {
  lastName: 'Lorem',
  firstName: 'Ipsum',
  currentRole: 'étudiant',
  userId: 1,
  link: 'https://images.unsplash.com/photo-1621871908119-295c8ce5cee4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
}

export const PrimaryText = Template.bind({})
PrimaryText.args = { ...Primary.args, text: 'This is the text' }

export const PrimaryLongText = Template.bind({})
PrimaryLongText.args = {
  ...Primary.args,
  text: 'This is a very long text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam magna ultricies, sagittis velit eu...',
}

export const PrimarySkills = Template.bind({})
PrimarySkills.args = {
  ...Primary.args,
  skills: ['text 1', 'text 2', 'text 3', 'text 4'],
}

export const PrimaryAssociations = Template.bind({})
PrimaryAssociations.args = {
  ...Primary.args,
  associations: [
    { name: 'lorem', image_id: Primary.args.link },
    { name: 'ipsum', image_id: Primary.args.link },
    { name: 'dolor', image_id: Primary.args.link },
    { name: 'item', image_id: Primary.args.link },
  ],
}

export const PrimaryFull = Template.bind({})
PrimaryFull.args = {
  ...PrimaryLongText.args,
  ...PrimarySkills.args,
  ...PrimaryAssociations.args,
}

export const PrimarySmallFull = Template.bind({})
PrimarySmallFull.args = {
  ...PrimaryFull.args,
  type: 'small',
}
