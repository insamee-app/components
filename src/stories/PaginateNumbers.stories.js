import { action } from '@storybook/addon-actions'
import PaginateNumbers from '../components/molecules/PaginateNumbers'

export default {
  component: PaginateNumbers,
  title: 'Molecules/PaginateNumbers',
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: { PaginateNumbers },
  props: Object.keys(argTypes),
  methods: {
    action: action('pagination'),
  },
  template: `<PaginateNumbers :small="small" :last-page="lastPage" :first-page="firstPage" :current-page="currentPage" @pagination="action"/>`,
})

export const Default = Template.bind({})
Default.args = { lastPage: 15, firstPage: 1, currentPage: 10 }

export const Small = Template.bind({})
Small.args = { ...Default.args, small: true }
