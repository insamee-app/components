// import { action } from '@storybook/addon-actions'
// import Header from '../components/organisms/Header'
// import AppButton from '../components/atoms/AppButton'
// // import AppList from '../components/molecules/AppList'
// import { Default as ListDefault } from './List.stories'

// export default {
//   component: Header,
//   title: 'Organisms/Header',
//   argTypes: {
//     actions: {
//       control: 'text',
//       description: 'Slot content',
//       defaultValue: '',
//     },
//     icon: {
//       control: 'text',
//       description: 'Slot content',
//       defaultValue: '',
//     },
//     nav: {
//       control: 'text',
//       description: 'Slot content',
//       defaultValue: '',
//     },
//     open: { action: 'open', table: { type: { summary: 'boolean' } } },
//   },
// }

// const Template = (args, { argTypes }) => ({
//   components: { Header, AppButton },
//   props: Object.keys(argTypes),
//   data() {
//     return {
//       list: ListDefault.args.list,
//     }
//   },
//   methods: {
//     action: action('close'),
//   },
//   template: `<Header @open="action" :icon-link='iconLink' :icon-nav="iconNav"> ${args.nav} ${args.actions} </Header>`,
// })

// export const Default = Template.bind({})
// Default.args = { iconLink: { name: 'Home' } }

// export const Mobile = Template.bind({})
// Mobile.args = { ...Default.args, iconNav: true }

// export const Actions = Template.bind({})
// Actions.args = {
//   ...Default.args,
//   actions: '<template #actions> <AppButton> An action </AppButton> </template>',
// }

// // export const Nav = Template.bind({})
// // Nav.args = {
// //   ...Default.args,
// //   nav: '<template #nav> <AppList :list="list" row/> </template>',
// // }
