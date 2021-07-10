<template>
  <AppInsameeProfileCard
    class="w-full"
    :to="{ name: 'mee-id', params: { id: userId } }"
    :type="type"
  >
    <template #avatar>
      <AppProfileAvatar
        :link="link"
        :alt="alt"
        :label="currentRole"
        class="flex-shrink-0"
        :size="isSmall ? 'small' : 'large'"
      />
    </template>
    <template #title>
      <AppCardTitle :row="isSmall" class="self-start">
        <span>{{ firstName }}</span>
        <span>{{ lastName }}</span>
      </AppCardTitle>
    </template>
    <template v-if="associations" #associations>
      <ul class="flex flex-row overflow-x-auto space-x-2">
        <li v-for="association in associations" :key="association.name" class="flex-shrink-0">
          <AppImg
            class="h-8"
            :class="classAssociation(association)"
            :link="association.image_url"
            :alt="association.name"
          />
        </li>
      </ul>
    </template>
    <template v-if="skills" #chips>
      <AppChips :texts="skills" />
    </template>
    <template #text>
      <div>
        {{ text }}
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
  components: {
    AppInsameeProfileCard,
    AppChips,
    AppCardTitle,
    AppProfileAvatar,
    AppImg,
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
    type: {
      type: String,
      default: 'medium',
      validator(value) {
        return ['small', 'medium'].includes(value)
      },
    },
  },
  computed: {
    isSmall() {
      return this.type === 'small'
    },
    alt() {
      return `Image de ${this.firstName} ${this.lastName}`
    },
    username() {
      const name = `${this.profile.first_name ?? ''} ${this.profile.last_name}`
      return name
    },
  },
  methods: {
    classAssociation(association) {
      if (!association.image_url) return 'w-8'

      return ''
    },
  },
}
</script>
