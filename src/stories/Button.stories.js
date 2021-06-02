import { action } from "@storybook/addon-actions";
import AppButton from "../components/atoms/AppButton";

export default {
  component: AppButton,
  title: "Atoms/AppButton",
  argTypes: {
    default: {
      control: "text",
      description: "Slot content",
      defaultValue: "button",
    },
    click: { action: "click", table: { type: { summary: "string" } } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { AppButton },
  props: Object.keys(argTypes),
  data() {
    return {
      args,
    };
  },
  methods: {
    action: action("click"),
  },
  template:
    "<AppButton :large='large' :border='border' :to='to' :href='href' :disabled='disabled' :loading='loading' @click='action'> {{ args.default }} </AppButton>",
});

export const Default = Template.bind({});

export const Large = Template.bind({});
Large.args = { large: true };

export const Border = Template.bind({});
Border.args = { border: true };

export const Loading = Template.bind({});
Loading.args = { loading: true };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
