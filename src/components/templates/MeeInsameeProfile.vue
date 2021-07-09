<template>
  <AppContainer class="max-w-4xl mx-auto">
    <InsameeProfile
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
      <div class="flex flex-row justify-center sticky bottom-4">
        <AppButton shadow large @click="dialog = true">
          <span class="text-white-base">
            {{ contact }}
          </span>
        </AppButton>
      </div>
    </InsameeProfile>
    <AppModal :value="dialog" @outside="dialog = false">
      <AppCard>
        <AppCardHeader closable @close="dialog = false">
          <AppCardTitle> Contacter </AppCardTitle>
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
import InsameeProfile from '../organisms/InsameeProfile'
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
    InsameeProfile,
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
  computed: {
    contact() {
      return this.firstName ? `Contacter ${this.firstName}` : 'Contacter'
    },
  },
}
</script>
