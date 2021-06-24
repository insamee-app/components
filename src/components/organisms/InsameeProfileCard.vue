<template>
  <AppInsameeProfileCard class="w-full" :to="{ name: 'mee-id', params: { id: userId } }">
    <template #avatar>
      <AppProfileAvatar :link="link" :label="currentRole" class="flex-shrink-0" />
    </template>
    <template #title>
      <AppCardTitle :link="link" :alt="alt">
        <span>{{ firstName }}</span>
        <span>{{ lastName }}</span>
      </AppCardTitle>
    </template>
    <template v-if="associations" #associations>
      <div class="overflow-x-auto text-right">
        <div class="inline-flex space-x-2">
          <AppImg
            v-for="association in associations"
            :key="association.name"
            class="w-8 h-8"
            :link="association.image_id"
            :alt="association.name"
          />
        </div>
      </div>
    </template>
    <template v-if="skills" #chips>
      <AppChips :texts="skills" />
    </template>
    <template #text>
      <div>
        {{ text | cutText }}
      </div>
    </template>
  </AppInsameeProfileCard>
</template>

<script>
import AppInsameeProfileCard from '../molecules/AppInsameeProfileCard'
import AppChips from '../molecules/AppChips'
import AppImg from '../atoms/AppImg'
import AppCardTitle from '../molecules/AppCardTitle'
import AppProfileAvatar from '../molecules/AppProfileAvatar'

export default {
  name: 'InsameeProfileCard',
  components: { AppInsameeProfileCard, AppChips, AppCardTitle, AppProfileAvatar, AppImg },
  filters: {
    cutText(value) {
      if (!value) return
      const length = 120
      const text = value.slice(0, length)
      return text.length === length ? text + '...' : text
    },
  },
  props: {
    userId: {
      type: Number,
      required: true,
    },
    lastName: {
      type: String,
      default: undefined,
    },
    firstName: {
      type: String,
      default: undefined,
    },
    currentRole: {
      type: String,
      default: undefined,
    },
    skills: {
      type: Array,
      default: undefined,
    },
    associations: {
      type: Array,
      default: undefined,
    },
    text: {
      type: String,
      default: undefined,
    },
    link: {
      type: String,
      default: undefined,
    },
  },
  computed: {
    alt() {
      return `Image de ${this.firstName} ${this.lastName}`
    },
    username() {
      const name = `${this.profile.first_name ?? ''} ${this.profile.last_name}`
      return name
    },
  },
}
</script>
