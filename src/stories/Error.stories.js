import AppError from "../components/Atoms/AppError";

export default {
  component: AppError,
  title: "Atoms/Error",
};

const Template = (args, { argTypes }) => ({
  components: { AppError },
  props: Object.keys(argTypes),
  template: '<AppError :full="full" :errors="errors" />',
});

export const Primary = Template.bind({});
Primary.args = {
  errors: [{ message: "This is error 1" }, { message: "This is error 2" }],
};
