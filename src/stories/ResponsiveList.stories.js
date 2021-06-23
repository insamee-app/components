import ResponsiveList from '../components/templates/ResponsiveList'

export default {
  component: ResponsiveList,
  title: 'Templates/ResponsiveList',
  argTypes: {
    cards: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
    filter: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
    modal: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: {
    ResponsiveList,
  },
  props: Object.keys(argTypes),
  template: `<ResponsiveList> ${args.cards} ${args.filter} ${args.modal} </ResponsiveList>`,
})

export const Default = Template.bind({})
Default.args = {
  cards: '<template #cards> For the cards </template>',
  filter: '<template #filter> For the filter </template>',
  modal: '<template #modal> For the modal </template>',
}
