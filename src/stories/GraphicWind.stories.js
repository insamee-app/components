import GraphicWind from '../components/atoms/graphics/GraphicWind'

export default {
  component: GraphicWind,
  title: 'Atoms/Graphics/GraphicWind',
}

const Template = (args, { argTypes }) => ({
  components: { GraphicWind },
  props: Object.keys(argTypes),
  template: '<GraphicWind />',
})

export const Default = Template.bind({})
