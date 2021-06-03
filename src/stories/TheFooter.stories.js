import TheFooter from '../components/organisms/TheFooter'

export default {
  component: TheFooter,
  title: 'Organisms/TheFooter',
}

const Template = (args, { argTypes }) => ({
  components: { TheFooter },
  props: Object.keys(argTypes),
  template: '<TheFooter />',
})

export const Default = Template.bind({})
