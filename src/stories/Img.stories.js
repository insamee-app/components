import AppImg from '../components/atoms/AppImg'

export default {
  component: AppImg,
  decorators: [() => ({ template: '<div style="width: 300px;height: 100px"><story/></div>' })],
  title: 'Atoms/AppImg',
}

const Template = (args, { argTypes }) => ({
  components: { AppImg },
  props: Object.keys(argTypes),
  template: "<AppImg :link='link' :alt='alt' :variant='variant' />",
})

export const Primary = Template.bind({})
Primary.args = { variant: 'primary' }

export const Secondary = Template.bind({})
Secondary.args = { variant: 'secondary' }

export const Img = Template.bind({})
Img.args = {
  link: 'https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_960_720.jpg',
  alt: 'Beautiful image',
}
