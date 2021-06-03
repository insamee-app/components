import IconSpinner from '../components/atoms/icons/IconSpinner'

export default {
  component: IconSpinner,
  title: 'Atoms/Icons/IconSpinner',
}

const Template = (args, { argTypes }) => ({
  components: { IconSpinner },
  props: Object.keys(argTypes),
  template: '<IconSpinner />',
})

export const Default = Template.bind({})
