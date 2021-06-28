import FilterSelect from '../components/molecules/FilterSelect'

export default {
  component: FilterSelect,
  title: 'Molecules/FilterSelect',
}

const Template = (args, { argTypes }) => ({
  components: { FilterSelect },
  props: Object.keys(argTypes),
  data() {
    return {
      args,
    }
  },
  template: `<FilterSelect :placeholder="placeholder" :items="items" />`,
})

export const Primary = Template.bind({})
Primary.args = {
  ariaLabelledBy: 'id1',
  placeholder: 'This is the placeholder',
  items: [
    { text: 'lorem 1', value: '1' },
    { text: 'ipsum 2', value: '2' },
    { text: 'dolor 3', value: '3' },
    { text: 'it 4', value: '4' },
    { text: 'are 5', value: '5' },
  ],
}
