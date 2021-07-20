<template>
  <AppContainer class="space-y-4 mx-auto" small>
    <TutoratProfile
      :last-name="lastName"
      :first-name="firstName"
      :current-role="currentRole"
      :graduation-year="graduationYear"
      :email="email"
      :school-name="schoolName"
      :avatar-url="avatarUrl"
      :preferred-subjects="preferredSubjects"
      :difficulties-subjects="difficultiesSubjects"
      :text="text"
    >
      <div class="flex flex-row justify-center sticky bottom-4">
        <AppButton shadow large @click="dialog = true">
          <span class="text-white-base">
            {{ contact }}
          </span>
        </AppButton>
      </div>
    </TutoratProfile>
    <Portal>
      <AppModal :value="dialog" @outside="dialog = false">
        <AppCard>
          <AppCardHeader closable @close="dialog = false">
            <AppCardTitle> Contacter </AppCardTitle>
          </AppCardHeader>
          <AppContact :links="socials" />
        </AppCard>
      </AppModal>
    </Portal>
  </AppContainer>
</template>

<script>
import { Portal } from '@linusborg/vue-simple-portal'
import AppModal from '../atoms/AppModal'
import AppCard from '../molecules/AppCard'
import AppCardHeader from '../molecules/AppCardHeader'
import AppCardTitle from '../molecules/AppCardTitle'
import AppButton from '../atoms/AppButton'
import AppContainer from '../organisms/AppContainer'
import AppContact from '../molecules/AppContact'
import TutoratProfile from '../organisms/TutoratProfile'

export default {
  name: 'MeeTutoratProfile',
  components: {
    TutoratProfile,
    AppContact,
    AppContainer,
    AppModal,
    AppCard,
    AppCardHeader,
    AppCardTitle,
    AppButton,
    Portal,
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
