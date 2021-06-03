import IconInsamee from '../components/atoms/icons/IconInsamee'

export default {
  component: IconInsamee,
  title: 'Atoms/Icons/IconInsamee',
}

const Template = (args, { argTypes }) => ({
  components: { IconInsamee },
  props: Object.keys(argTypes),
  template: '<IconInsamee />',
})

export const Default = Template.bind({})
