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
    <LabeledItem v-if="preferredSubjects.length" label="Matières préférées">
      <AppChips :texts="preferredSubjects" />
    </LabeledItem>
    <LabeledItem v-if="difficultiesSubjects.length" label="Matières en difficultés">
      <AppChips :texts="difficultiesSubjects" />
    </LabeledItem>
    <LabeledItem label="Description">
      <span class="text-xl text-justify">
        {{ text | handleUndefined }}
      </span>
    </LabeledItem>
    <slot></slot>
  </ProfileBasic>
</template>

<script>
import AppChips from '../molecules/AppChips'
import LabeledItem from '../molecules/LabeledItem'
import ProfileBasic from '../organisms/ProfileBasic'

export default {
  name: 'TutoratProfile',
  components: {
    AppChips,
    LabeledItem,
    ProfileBasic,
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
    preferredSubjects: {
      type: Array,
      default: undefined,
    },
    difficultiesSubjects: {
      type: Array,
      default: undefined,
    },
  },
  data() {
    return {
      dialog: false,
    }
  },
}
</script>
