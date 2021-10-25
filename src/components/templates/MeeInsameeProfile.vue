<template>
  <AppContainer class="mx-auto space-y-8" small>
    <MeeProfile
      :last-name="lastName"
      :first-name="firstName"
      :current-role="currentRole"
      :graduation-year="graduationYear"
      :email="email"
      :school-name="schoolName"
      :avatar-url="avatarUrl"
      :skills="skills"
      :text="text"
      :focus-interests="focusInterests"
      :associations="associations"
    >
    </MeeProfile>
    <div class="flex flex-row justify-center sticky bottom-4">
      <AppButton shadow large @click="dialog = true">
        <span class="text-white-base">
          {{ contact }}
        </span>
      </AppButton>
    </div>
    <slot name="report"></slot>
    <AppModal :value="dialog" @outside="dialog = false">
      <AppCard>
        <AppCardHeader closable @close="dialog = false">
          <AppCardTitle> {{ contact }} </AppCardTitle>
        </AppCardHeader>
        <AppContact :links="socials" />
      </AppCard>
    </AppModal>
  </AppContainer>
</template>

<script>
import AppModal from '../atoms/AppModal'
import AppCard from '../molecules/AppCard'
import AppCardHeader from '../molecules/AppCardHeader'
import AppCardTitle from '../molecules/AppCardTitle'
import AppButton from '../atoms/AppButton'
import MeeProfile from '../organisms/MeeProfile'
import AppContainer from '../organisms/AppContainer'
import AppContact from '../molecules/AppContact'

export default {
  name: 'MeeInsameeProfile',
  components: {
    AppContact,
    AppContainer,
    AppModal,
    AppCard,
    AppCardHeader,
    AppCardTitle,
    AppButton,
    MeeProfile,
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
  computed: {
    contact() {
      return this.firstName ? `Contacter ${this.firstName}` : 'Contacter'
    },
  },
}
</script>
