<template>
  <div>
    <LabeledItem :variant="variant" label="Me Contacter">
      <AppContact :links="links" :variant="variant" />
    </LabeledItem>
  </div>
</template>

<script>
import variant from '../../mixins/variant'
import AppContact from '../molecules/AppContact'
import LabeledItem from '../molecules/LabeledItem'

export default {
  name: 'ProfileContact',
  components: { AppContact, LabeledItem },
  mixins: [variant],
  props: {
    links: {
      type: Object,
      required: true,
    },
  },
}
</script>
