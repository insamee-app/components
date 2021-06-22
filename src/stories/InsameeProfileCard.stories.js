import InsameeProfileCard from '../components/organisms/InsameeProfileCard'

export default {
  component: InsameeProfileCard,
  title: 'Organisms/InsameeProfileCard',
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
    InsameeProfileCard,
  },
  props: Object.keys(argTypes),
  template: `<InsameeProfileCard :lastName="lastName" :firstName="firstName" :userId="userId" :text="text" :skills="skills" :associations="associations" :link="link"> </InsameeProfileCard>`,
})

export const Primary = Template.bind({})
Primary.args = {
  lastName: 'Lorem',
  firstName: 'Ipsum',
  userId: 1,
  link: 'https://images.unsplash.com/photo-1621871908119-295c8ce5cee4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
}

export const PrimaryText = Template.bind({})
PrimaryText.args = { ...Primary.args, text: 'This is the text' }

export const PrimaryLongText = Template.bind({})
PrimaryLongText.args = {
  ...Primary.args,
  text: 'This is a very long text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam magna ultricies, sagittis velit eu, porta nulla. Nulla vestibulum placerat purus non blandit. Mauris vestibulum lacinia libero, non consectetur lacus rhoncus in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
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
