import AppError from "../components/atoms/AppError";

export default {
  component: AppError,
  title: "Atoms/AppError",
};

const Template = (args, { argTypes }) => ({
  components: { AppError },
  props: Object.keys(argTypes),
  template: '<AppError :full="full" :errors="errors" />',
});

export const Default = Template.bind({});
Default.args = {
  errors: [{ message: "This is error 1" }, { message: "This is error 2" }],
};
