import GraphicLeaves from '../components/atoms/graphics/GraphicLeaves'

export default {
  component: GraphicLeaves,
  title: 'Atoms/Graphics/GraphicLeaves',
}

const Template = (args, { argTypes }) => ({
  components: { GraphicLeaves },
  props: Object.keys(argTypes),
  template: '<GraphicLeaves />',
})

export const Default = Template.bind({})
