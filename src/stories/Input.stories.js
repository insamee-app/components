import { action } from "@storybook/addon-actions";
import AppInput from "../components/atoms/AppInput";

export default {
  component: AppInput,
  title: "Atoms/AppInput",
  argTypes: {
    input: { action: "input", table: { type: { summary: "string" } } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { AppInput },
  props: Object.keys(argTypes),
  methods: {
    action: action("input"),
  },
  template: '<AppInput :value="value" @input="action" />',
});

export const Default = Template.bind({});
Default.args = { value: "Try it!" };
