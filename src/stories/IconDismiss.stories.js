import IconDismiss from '../components/atoms/icons/IconDismiss'

export default {
  component: IconDismiss,
  title: 'Atoms/Icons/IconDismiss',
}

const Template = (args, { argTypes }) => ({
  components: { IconDismiss },
  props: Object.keys(argTypes),
  template: '<IconDismiss />',
})

export const Default = Template.bind({})
