import AppLabel from '../components/atoms/AppLabel'

export default {
  component: AppLabel,
  title: 'Atoms/AppLabel',
}

const Template = (args, { argTypes }) => ({
  components: { AppLabel },
  props: Object.keys(argTypes),
  template: "<AppLabel :name='name' :label='label' />",
})

export const Default = Template.bind({})
Default.args = { name: 'name', label: 'your name' }

export const ForInput = Template.bind({})
ForInput.args = { ...Default.args, input: true }
