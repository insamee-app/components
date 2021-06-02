import AppLink from "../components/atoms/AppLink";

export default {
  component: AppLink,
  title: "Atoms/AppLink",
  argTypes: {
    default: {
      control: "text",
      description: "Slot content",
      defaultValue: "this is a link",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { AppLink },
  props: Object.keys(argTypes),
  data() {
    return {
      args,
    };
  },
  template: "<AppLink :link='link'> {{ args.default }} </AppLink>",
});

export const NuxtLink = Template.bind({});
NuxtLink.args = { link: { name: "home" } };

export const Anchor = Template.bind({});
Anchor.args = { link: "https://exemple.com" };
