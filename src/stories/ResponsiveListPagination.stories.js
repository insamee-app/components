import { action } from '@storybook/addon-actions'
import ResponsiveListPagination from '../components/templates/ResponsiveListPagination'
import Pagination from '../components/organisms/Pagination'
import { Default as DefaultPagination } from './Pagination.stories'

export default {
  component: ResponsiveListPagination,
  title: 'Templates/ResponsiveListPagination',
  argTypes: {
    default: {
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
    ResponsiveListPagination,
    Pagination,
  },
  data() {
    return {
      ...DefaultPagination.args,
    }
  },
  methods: {
    action: action('pagination'),
  },
  props: Object.keys(argTypes),
  template: `<ResponsiveListPagination> ${args.default} </ResponsiveListPagination>`,
})

export const Default = Template.bind({})
Default.args = {
  default: 'This is the pagination',
}

export const WithPagination = Template.bind({})
WithPagination.args = {
  default:
    '<Pagination :small="true" :last-page="lastPage" :first-page="firstPage" :current-page="currentPage" :previous-page="previousPage" :next-page="nextPage" @pagination="action"/>',
}
