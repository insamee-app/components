import AppChips from "../components/Molecules/AppChips";

export default {
  component: AppChips,
  title: "Molecules/AppChips",
};

const Template = (args, { argTypes }) => ({
  components: { AppChips },
  props: Object.keys(argTypes),
  template: "<AppChips :texts='texts' />",
});

export const Primary = Template.bind({});
Primary.args = {
  texts: ["football", "swimming", "climbing", "cricket", "running"],
};
