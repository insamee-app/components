import Input from "../components/AppInput";

export default {
  component: Input,
  title: "Atoms/Input",
};

const Template = (args, { argTypes }) => ({
  components: { Input },
  props: Object.keys(argTypes),
  template: '<Input v-model="value" />',
});

export const Primary = Template.bind({});
Primary.args = { value: "Try it!" };
