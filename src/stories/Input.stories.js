import { action } from "@storybook/addon-actions";
import AppInput from "../components/Atoms/AppInput";

export default {
  component: AppInput,
  title: "Atoms/AppInput",
};

const Template = (args, { argTypes }) => ({
  components: { AppInput },
  props: Object.keys(argTypes),
  methods: {
    action: action("input"),
  },
  template: '<AppInput :value="value" @input="action" />',
});

export const Primary = Template.bind({});
Primary.args = { value: "Try it!" };
