import AppLabel from "../components/AppLabel";

export default {
  component: AppLabel,
  title: "Atoms/AppLabel",
};

const Template = (args, { argTypes }) => ({
  components: { AppLabel },
  props: Object.keys(argTypes),
  template: "<AppLabel :name='name' :label='label' />",
});

export const Primary = Template.bind({});
Primary.args = { name: "name", label: "your name" };
