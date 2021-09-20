<template>
  <div class="space-y-4">
    <div class="flex flex-row">
      <AppProfileAvatar variant="secondary" :label="currentRole" :link="avatarUrl" />
      <div class="flex flex-col justify-between ml-8">
        <LabeledItem label="NOM" :variant="variant">
          <span class="text-xl">
            {{ lastName | handleUndefined }}
          </span>
        </LabeledItem>
        <LabeledItem label="Prénom" :variant="variant">
          <span class="text-xl">
            {{ firstName | handleUndefined }}
          </span>
        </LabeledItem>
      </div>
    </div>
    <LabeledItem label="Adresse électronique" :variant="variant">
      <span class="text-xl">
        {{ email | handleUndefined }}
      </span>
    </LabeledItem>
    <div class="flex flex-row space">
      <LabeledItem class="flex-1" label="Ecole" :variant="variant">
        <span class="text-xl">
          {{ schoolName | handleUndefined }}
        </span>
      </LabeledItem>
      <LabeledItem class="flex-1" label="Année de diplomation" :variant="variant">
        <span class="text-xl">
          {{ graduationYear | handleUndefined }}
        </span>
      </LabeledItem>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { variant } from '../../mixins'
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
    lastName: {
      type: String,
      default: undefined,
    },
    firstName: {
      type: String,
      default: undefined,
    },
    email: {
      type: String,
      default: undefined,
    },
    schoolName: {
      type: String,
      default: undefined,
    },
    graduationYear: {
      type: Number,
      default: undefined,
    },
    currentRole: {
      type: String,
      default: undefined,
    },
    avatarUrl: {
      type: String,
      default: undefined,
    },
  },
}
</script>
