import IconHeart from '../components/atoms/icons/IconHeart'

export default {
  component: IconHeart,
  title: 'Atoms/Icons/IconHeart',
}

const Template = (args, { argTypes }) => ({
  components: { IconHeart },
  props: Object.keys(argTypes),
  template: '<IconHeart />',
})

export const Default = Template.bind({})
