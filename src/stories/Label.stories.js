import Label from "../components/AppLabel";

export default {
  component: Label,
  title: "Atoms/Label",
};

const Template = (args, { argTypes }) => ({
  components: { Label },
  props: Object.keys(argTypes),
  template: "<Label :name='name' :label='label' />",
});

export const Primary = Template.bind({});
Primary.args = { name: "name", label: "your name" };
