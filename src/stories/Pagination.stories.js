import { action } from '@storybook/addon-actions'
import Pagination from '../components/organisms/Pagination'

export default {
  component: Pagination,
  title: 'Organisms/Pagination',
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: { Pagination },
  props: Object.keys(argTypes),
  methods: {
    action: action('pagination'),
  },
  template: `<Pagination :small="small" :last-page="lastPage" :first-page="firstPage" :current-page="currentPage" :previous-page="previousPage" :next-page="nextPage" @pagination="action"/>`,
})

export const Default = Template.bind({})
Default.args = { lastPage: 115, firstPage: 1, currentPage: 110, nextPage: 111, previousPage: 19 }

export const Small = Template.bind({})
Small.args = { ...Default.args, small: true }

export const NoNext = Template.bind({})
NoNext.args = { lastPage: 10, firstPage: 1, currentPage: 10, previousPage: 9 }

export const NoPrevious = Template.bind({})
NoPrevious.args = { lastPage: 10, firstPage: 1, currentPage: 1, nextPage: 2 }
