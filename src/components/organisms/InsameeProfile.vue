<template>
  <ProfileBasic
    :last-name="lastName"
    :first-name="firstName"
    :current-role="currentRole"
    :graduation-year="graduationYear"
    :email="email"
    :school-name="schoolName"
    :avatar-url="avatarUrl"
  >
    <LabeledItem v-if="focusInterests.length" label="Centre d'intérêt">
      <AppChips :texts="focusInterests" />
    </LabeledItem>
    <LabeledItem v-if="skills.length" label="Compétences">
      <AppChips :texts="skills" />
    </LabeledItem>
    <LabeledItem v-if="associations.length" label="Associations" class-name="space-y-2">
      <AppAssociation
        v-for="association in associations"
        :key="association.id"
        :link="association.url_picture"
        :name="association.name"
      >
        <span class="uppercase">
          {{ association.name }}
        </span>
      </AppAssociation>
    </LabeledItem>
    <LabeledItem class="text-justify" label="Description">
      {{ text | handleUndefined }}
    </LabeledItem>
    <slot></slot>
  </ProfileBasic>
</template>

<script>
import AppChips from '../molecules/AppChips'
import LabeledItem from '../molecules/LabeledItem'
import ProfileBasic from '../organisms/ProfileBasic'
import AppAssociation from '../molecules/AppAssociation'

export default {
  name: 'InsameeProfile',
  components: {
    AppChips,
    LabeledItem,
    ProfileBasic,
    AppAssociation,
  },
  filters: {
    handleUndefined(value) {
      return value || 'Non renseigné'
    },
  },
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
    text: {
      type: String,
      default: undefined,
    },
    avatarUrl: {
      type: String,
      default: undefined,
    },
    skills: {
      type: Array,
      default: () => [],
    },
    focusInterests: {
      type: Array,
      default: () => [],
    },
    associations: {
      type: Array,
      default: () => [],
    },
    socials: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      dialog: false,
    }
  },
}
</script>
