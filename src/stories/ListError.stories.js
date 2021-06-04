import AppListError from '../components/molecules/AppListError'

export default {
  component: AppListError,
  title: 'Molecules/AppListError',
}

const Template = (args, { argTypes }) => ({
  components: { AppListError },
  props: Object.keys(argTypes),
  template: '<AppListError :full="full" :errors="errors" />',
})

export const Default = Template.bind({})
Default.args = {
  errors: [{ message: 'This is error 1' }, { message: 'This is error 2' }],
}
