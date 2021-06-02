import AppInput from "../components/Atoms/AppInput";

export default {
  component: AppInput,
  title: "Atoms/AppInput",
};

const Template = (args, { argTypes }) => ({
  components: { AppInput },
  props: Object.keys(argTypes),
  template: '<AppInput v-model="value" />',
});

export const Primary = Template.bind({});
Primary.args = { value: "Try it!" };
