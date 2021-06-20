import HeroBannerTitle from '../components/organisms/HeroBannerTitle'

export default {
  component: HeroBannerTitle,
  title: 'Organisms/HeroBannerTitle',
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: { HeroBannerTitle },
  props: Object.keys(argTypes),
  data() {
    return {
      args,
    }
  },
  template: '<HeroBannerTitle> {{ args.default }} </HeroBannerTitle>',
})

export const Default = Template.bind({})
Default.args = { default: 'Hello from the title hero banner' }
