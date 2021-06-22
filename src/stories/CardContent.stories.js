import AppCard from '../components/molecules/AppCard'

export default {
  component: AppCard,
  title: 'Molecules/AppCard',
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: { AppCard },
  props: Object.keys(argTypes),
  template: `<AppCard :justify="justify"> ${args.default} </AppCard>`,
})

export const Default = Template.bind({})
Default.args = { default: 'This is the content' }

export const Justify = Template.bind({})
Justify.args = {
  justify: true,
  default: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam magna ultricies, sagittis velit eu, porta nulla. Nulla vestibulum placerat purus non blandit. Mauris vestibulum lacinia libero, non consectetur lacus rhoncus in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse tempus, justo vestibulum viverra mollis, neque est dignissim libero, nec placerat diam justo quis est. Suspendisse lorem lacus, molestie quis tincidunt a, varius vel magna. Vivamus at hendrerit libero. Ut mattis congue ligula sed pulvinar. Donec gravida ligula ac ante dapibus efficitur. Aliquam erat volutpat. Nam erat nisi, suscipit eu augue eu, porttitor finibus nibh. Vestibulum faucibus pretium massa. Vestibulum vel odio ut urna pulvinar vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit gravida ipsum id tincidunt. Nulla facilisi.`,
}
