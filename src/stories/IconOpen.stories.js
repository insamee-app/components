import IconOpen from '../components/atoms/icons/IconOpen'

export default {
  component: IconOpen,
  title: 'Atoms/Icons/IconOpen',
}

const Template = (args, { argTypes }) => ({
  components: { IconOpen },
  props: Object.keys(argTypes),
  template: '<IconOpen />',
})

export const Default = Template.bind({})
