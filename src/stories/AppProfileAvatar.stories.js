import AppProfileAvatar from '../components/molecules/AppProfileAvatar'

export default {
  component: AppProfileAvatar,
  title: 'Molecules/AppProfileAvatar',
}

const Template = (args, { argTypes }) => ({
  components: { AppProfileAvatar },
  props: Object.keys(argTypes),
  template: `<AppProfileAvatar :label="label" :link="link" :alt="alt" :size="size" :variant="variant" />`,
})

export const Primary = Template.bind({})

export const PrimaryLabel = Template.bind({})
PrimaryLabel.args = { label: 'a label' }

export const PrimarySmall = Template.bind({})
PrimarySmall.args = { size: 'small' }

export const PrimaryLabelSmall = Template.bind({})
PrimaryLabelSmall.args = { label: 'a label', size: 'small' }

export const Secondary = Template.bind({})
Secondary.args = { variant: 'secondary' }

export const SecondaryLabel = Template.bind({})
SecondaryLabel.args = { label: 'a label', variant: 'secondary' }

export const SecondarySmall = Template.bind({})
SecondarySmall.args = { size: 'small', variant: 'secondary' }

export const SecondaryLabelSmall = Template.bind({})
SecondaryLabelSmall.args = { label: 'a label', size: 'small', variant: 'secondary' }
