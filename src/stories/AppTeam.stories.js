import AppTeam from '../components/atoms/AppTeam'

export default {
  component: AppTeam,
  title: 'atoms/AppTeam',
}

const Template = (args, { argTypes }) => ({
  components: { AppTeam },
  props: Object.keys(argTypes),
  template: `<AppTeam :linkTutorat="linkTutorat" :linkEvenements="linkEvenements" :linkAssociations="linkAssociations" :linkMee="linkMee" />`,
})

export const Default = Template.bind({})
Default.args = {
  linkTutorat: 'https://example.com',
  linkEvenements: { name: 'index' },
  linkAssociations: { name: 'index' },
  linkMee: { name: 'index' },
}
