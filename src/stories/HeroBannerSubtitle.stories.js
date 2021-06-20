import HeroBannerSubtitle from '../components/organisms/HeroBannerSubtitle'

export default {
  component: HeroBannerSubtitle,
  title: 'Organisms/HeroBannerSubtitle',
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: { HeroBannerSubtitle },
  props: Object.keys(argTypes),
  data() {
    return {
      args,
    }
  },
  template: '<HeroBannerSubtitle> {{ args.default }} </HeroBannerSubtitle>',
})

export const Default = Template.bind({})
Default.args = { default: 'Hello from the subtitle' }
