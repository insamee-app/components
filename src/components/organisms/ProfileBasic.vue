<template>
  <div class="space-y-4">
    <div class="flex flex-row">
      <!-- TODO: il faut créer l'avatar url dans le schema -->
      <AppProfileAvatar
        :variant="variant"
        :label="profile.current_role"
        :link="profile.avatar_url"
      />
      <div class="flex flex-col justify-between">
        <LabeledItem label="NOM" :variant="variant">
          {{ profile.last_name | handleUndefined }}
        </LabeledItem>
        <LabeledItem label="Prénom" :variant="variant">
          {{ profile.first_name | handleUndefined }}
        </LabeledItem>
      </div>
    </div>
    <LabeledItem label="Adresse électronique" :variant="variant">
      {{ getEmail | handleUndefined }}
    </LabeledItem>
    <div class="flex flex-row space">
      <LabeledItem class="flex-1" label="Ecole" :variant="variant">
        {{ getSchoolName | handleUndefined }}
      </LabeledItem>
      <LabeledItem class="flex-1" label="Année de diplomation" :variant="variant">
        {{ profile.graduation_year | handleUndefined }}
      </LabeledItem>
    </div>
  </div>
</template>

<script>
import variant from '../../mixins/variant'
import LabeledItem from '../molecules/LabeledItem'
import AppProfileAvatar from '../molecules/AppProfileAvatar'

export default {
  name: 'ProfileBasic',
  components: { LabeledItem, AppProfileAvatar },
  filters: {
    handleUndefined(value) {
      return value || 'Non renseigné'
    },
  },
  mixins: [variant],
  props: {
    profile: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    getSchoolName() {
      return this.profile.school?.name
    },
    getEmail() {
      return this.profile.user?.email
    },
  },
}
</script>
