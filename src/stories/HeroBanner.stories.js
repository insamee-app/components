import HeroBanner from '../components/organisms/HeroBanner'
import HeroBannerTitle from '../components/organisms/HeroBannerTitle'
import HeroBannerSubtitle from '../components/organisms/HeroBannerSubtitle'

export default {
  component: HeroBanner,
  title: 'Organisms/HeroBanner',
  argTypes: {
    title: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
    subtitle: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
    graphic: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: { HeroBanner, HeroBannerTitle, HeroBannerSubtitle },
  props: Object.keys(argTypes),
  data() {
    return {
      args,
    }
  },
  template: `<HeroBanner> ${args.title} ${args.graphic} ${args.subtitle} </HeroBanner>`,
})

export const Default = Template.bind({})
Default.args = {
  title: '<template #title> <HeroBannerTitle> this is the title </HeroBannerTitle> </template>',
  graphic: '<template #graphic> this is for the graphic </template>',
  subtitle:
    '<template #subtitle> <HeroBannerSubtitle> this is the subtitle of this super hero banner </HeroBannerSubtitle> </template>',
}
