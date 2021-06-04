import AppImg from '../components/atoms/AppImg'

export default {
  component: AppImg,
  decorators: [() => ({ template: '<div style="width: 300px;height: 100px"><story/></div>' })],
  title: 'Atoms/AppImg',
}

const Template = (args, { argTypes }) => ({
  components: { AppImg },
  props: Object.keys(argTypes),
  template: "<AppImg :baseUrl='baseUrl' :name='name' :alt='alt' />",
})

export const Empty = Template.bind({})

export const Img = Template.bind({})
Img.args = {
  baseUrl: 'https://cdn.pixabay.com/photo/2017/05/09/03/46/',
  name: 'alberta-2297204_960_720.jpg',
  alt: 'Beautiful image',
}
