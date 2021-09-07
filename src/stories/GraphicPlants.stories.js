import GraphicPlants from '../components/atoms/graphics/GraphicPlants'

export default {
  component: GraphicPlants,
  title: 'Atoms/Graphics/GraphicPlants',
}

const Template = (args, { argTypes }) => ({
  components: { GraphicPlants },
  props: Object.keys(argTypes),
  template: '<GraphicPlants />',
})

export const Default = Template.bind({})
