import IconArrow from '../components/atoms/icons/IconArrow'

export default {
  component: IconArrow,
  title: 'Atoms/Icons/IconArrow',
}

const Template = (args, { argTypes }) => ({
  components: { IconArrow },
  props: Object.keys(argTypes),
  template: '<IconArrow />',
})

export const Default = Template.bind({})
