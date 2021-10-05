import ResponsiveList from '../components/templates/ResponsiveList'

export default {
  component: ResponsiveList,
  title: 'Templates/ResponsiveList',
  // argTypes: {
  //   cards: {
  //     control: 'text',
  //     description: 'Slot content',
  //     defaultValue: '',
  //   },
  //   filter: {
  //     control: 'text',
  //     description: 'Slot content',
  //     defaultValue: '',
  //   },
  //   modal: {
  //     control: 'text',
  //     description: 'Slot content',
  //     defaultValue: '',
  //   },
  // },
}

const Template = (args, { argTypes }) => ({
  components: {
    ResponsiveList,
  },
  props: Object.keys(argTypes),
  template: `<ResponsiveList :full-filters="fillFilters" :loading="loading" :total-pagination="totalPagination" :action-filters="actionsFilters"> ${args.title} ${args.cards} ${args.filtersFull} ${args.filtersAction} ${args.modal} </ResponsiveList>`,
})

export const Default = Template.bind({})
Default.args = {
  fillFilters: false,
  loading: false,
  totalPagination: 0,
  actionsFilters: false,
  title: '<template #title> <h1>For the title</h1> </template>',
  cards: '<template #cards> For the cards </template>',
  filtersFull: '<template #filters-full> For filters full </template>',
  filtersAction: '<template #filters-action> For filters action </template>',
  modal: '<template #modal> For the modal </template>',
}
