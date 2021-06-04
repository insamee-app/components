import AppError from '../components/atoms/AppError'

export default {
  component: AppError,
  title: 'Atoms/AppError',
}

const Template = (args, { argTypes }) => ({
  components: { AppError },
  props: Object.keys(argTypes),
  template: '<AppError :error-message="errorMessage" />',
})

export const Default = Template.bind({})
Default.args = { errorMessage: 'This is an error' }
