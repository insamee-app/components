import IconCheck from '../components/atoms/icons/IconCheck'

export default {
  component: IconCheck,
  title: 'Atoms/Icons/IconCheck',
}

const Template = (args, { argTypes }) => ({
  components: { IconCheck },
  props: Object.keys(argTypes),
  template: '<IconCheck />',
})

export const Default = Template.bind({})
