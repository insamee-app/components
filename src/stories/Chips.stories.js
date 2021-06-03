import AppChips from '../components/molecules/AppChips'

export default {
  component: AppChips,
  title: 'Molecules/AppChips',
}

const Template = (args, { argTypes }) => ({
  components: { AppChips },
  props: Object.keys(argTypes),
  template: "<AppChips :texts='texts' />",
})

export const Default = Template.bind({})
Default.args = {
  texts: ['football', 'swimming', 'climbing', 'cricket', 'running'],
}
