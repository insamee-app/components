import AppHr from '../components/atoms/AppHr'

export default {
  component: AppHr,
  title: 'Atoms/AppHr',
}

const Template = (args, { argTypes }) => ({
  components: { AppHr },
  props: Object.keys(argTypes),
  template: '<AppHr />',
})

export const Default = Template.bind({})
