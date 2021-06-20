import { action } from '@storybook/addon-actions'
import AppPaginateNumber from '../components/atoms/AppPaginateNumber'

export default {
  component: AppPaginateNumber,
  title: 'Atoms/AppPaginateNumber',
  argTypes: {
    click: { action: 'click', table: { type: { summary: 'number' } } },
  },
}

const Template = (args, { argTypes }) => ({
  components: { AppPaginateNumber },
  props: Object.keys(argTypes),
  methods: {
    action: action('click'),
  },
  template: `<AppPaginateNumber :value="value" :actif="actif" :small="small" @click="action"></AppPaginateNumber>`,
})

export const Primary = Template.bind({})
Primary.args = { value: 1 }

export const PrimaryActif = Template.bind({})
PrimaryActif.args = { value: 1, actif: true }

export const PrimarySmall = Template.bind({})
PrimarySmall.args = { value: 1, small: true }

export const PrimarySmallActif = Template.bind({})
PrimarySmallActif.args = { value: 1, actif: true, small: true }
