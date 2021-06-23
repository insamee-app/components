<template>
  <div>
    <AppContainer class="space-y-4">
      <ProfileBasic
        :last-name="lastName"
        :first-name="firstName"
        :current-role="currentRole"
        :graduation-year="graduationYear"
        :email="email"
        :school-name="schoolName"
        :avatar-url="avatarUrl"
      />
      <LabeledItem label="Matières préférées">
        <AppChips :texts="preferredSubjects" />
      </LabeledItem>
      <LabeledItem label="Matières en difficultés">
        <AppChips :texts="difficultiesSubjects" />
      </LabeledItem>
      <LabeledItem label="Description" class="text-justify">
        {{ text }}
      </LabeledItem>
      <div class="flex flex-row justify-end sticky bottom-4" @click="dialog = true">
        <AppButton large> Contacter </AppButton>
      </div>
    </AppContainer>
    <AppModal :value="dialog" @outside="dialog = false">
      <AppCard>
        <AppCardHeader closable @close="dialog = false">
          <AppCardTitle> Contacter </AppCardTitle>
        </AppCardHeader>
        <AppContact :links="socials" />
      </AppCard>
    </AppModal>
  </div>
</template>

<script>
import AppModal from '../atoms/AppModal'
import AppChips from '../molecules/AppChips'
import AppCard from '../molecules/AppCard'
import AppCardHeader from '../molecules/AppCardHeader'
import AppCardTitle from '../molecules/AppCardTitle'
import AppButton from '../atoms/AppButton'
import LabeledItem from '../molecules/LabeledItem'
import ProfileBasic from '../organisms/ProfileBasic'
import AppContainer from '../organisms/AppContainer'
import AppContact from '../molecules/AppContact'

export default {
  name: 'InsameeProfile',
  components: {
    AppContact,
    AppChips,
    AppContainer,
    AppModal,
    AppCard,
    AppCardHeader,
    AppCardTitle,
    AppButton,
    LabeledItem,
    ProfileBasic,
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
}
</script>
