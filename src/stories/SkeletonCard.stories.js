import SkeletonCard from '../components/organisms/SkeletonCard'

export default {
  component: SkeletonCard,
  title: 'Organisms/SkeletonCard',
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: { SkeletonCard },
  props: Object.keys(argTypes),
  template: '<SkeletonCard  :variant="variant"/>',
})

export const Default = Template.bind({})

export const Association = Template.bind({})
Association.args = { variant: 'association' }

export const Tutorat = Template.bind({})
Tutorat.args = { variant: 'tutorat' }
