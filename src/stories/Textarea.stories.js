import { action } from "@storybook/addon-actions";
import AppTextarea from "../components/Atoms/AppTextarea";

export default {
  component: AppTextarea,
  title: "Atoms/AppTextarea",
  argTypes: { input: { action: "input" } },
};

const Template = (args, { argTypes }) => ({
  components: { AppTextarea },
  props: Object.keys(argTypes),
  methods: {
    action: action("input"),
  },
  template: `<AppTextarea :value="value" :name='name' @input='action' />`,
});

export const Primary = Template.bind({});
Primary.args = { value: "This is the text !", name: "text" };
