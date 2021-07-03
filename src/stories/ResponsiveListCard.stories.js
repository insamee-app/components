import ResponsiveListCards from '../components/templates/ResponsiveListCards'
import ResponsiveListPagination from '../components/templates/ResponsiveListPagination'

export default {
  component: ResponsiveListCards,
  title: 'Templates/ResponsiveListCards',
  argTypes: {
    skeletons: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
    cards: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
    pagination: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: {
    ResponsiveListCards,
    ResponsiveListPagination,
  },
  props: Object.keys(argTypes),
  template: `<ResponsiveListCards> ${args.default} ${args.pagination} </ResponsiveListCards>`,
})

export const Default = Template.bind({})
Default.args = {
  default:
    '<template> <div v-for="value in 10" :key="value"> This is like a card </div> </template>',
  pagination:
    '<template #pagination> <ResponsiveListPagination> This is the pagination </ResponsiveListPagination> </template>',
}
