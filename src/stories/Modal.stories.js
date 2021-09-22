import { action } from '@storybook/addon-actions'
import AppModal from '../components/atoms/AppModal'
import AppCard from '../components/molecules/AppCard'

export default {
  component: AppModal,
  title: 'Atoms/AppModal',
  decorators: [
    () => ({
      template: "<div style='height: 200vh;'>Hello, I'm the text under the modal<story/></div>",
    }),
  ],

  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: '',
    },
    outside: { action: 'outside', table: { type: { summary: 'boolean' } } },
  },
}

const slotValue = 'inside a modal'

const Template = (args, { argTypes }) => ({
  components: { AppModal, AppCard },
  props: Object.keys(argTypes),
  data() {
    return {
      args,
    }
  },
  methods: {
    action(value) {
      this.value = value
      action('outside')(value)
    },
  },
  template: `<AppModal @outside="action" :value="value" v-slot="{ size }" :overflow="overflow"> ${args.default} </AppModal>`,
})

export const Default = Template.bind({})
Default.args = { value: false, default: slotValue }

export const Large = Template.bind({})
Large.args = {
  value: false,
  overflow: true,
  default: `<AppCard style="height: 200vh;" :class="size"> Hello from the large modal </AppCard>`,
}
