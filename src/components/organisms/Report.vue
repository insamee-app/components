<template>
  <AppCard>
    <AppCardHeader closable @close="$emit('close', true)">
      <AppCardTitle>Signalement</AppCardTitle>
    </AppCardHeader>
    <AppCardContent class="space-y-4">
      <LabeledItem variant="secondary" label="Motif" class-name="text-base">
        <AppRadio :items="items" :selected="report" variant="secondary" @select="report = $event" />
      </LabeledItem>
      <LabeledInput
        v-model="details"
        variant="secondary"
        label="Détails"
        name="details"
        placeholder="Détails sur le signalement"
        :error-message="errorMessageDetails"
      ></LabeledInput>
    </AppCardContent>
    <div class="flex justify-between">
      <AppButton border shadow variant="secondary" @click="$emit('close', true)">
        Annuler
      </AppButton>
      <AppButton
        shadow
        variant="secondary"
        :loading="loading"
        :disabled="$v.$invalid"
        @click="send"
      >
        Envoyer
      </AppButton>
    </div>
  </AppCard>
</template>

<script>
import AppCard from '../molecules/AppCard'
import AppCardTitle from '../molecules/AppCardTitle'
import AppCardHeader from '../molecules/AppCardHeader'
import AppCardContent from '../molecules/AppCardContent'
import LabeledInput from '../molecules/LabeledInput'
import AppRadio from '../molecules/AppRadio'
import AppButton from '../atoms/AppButton'
import LabeledItem from '../molecules/LabeledItem.vue'

export default {
  name: 'Report',
  components: {
    AppCard,
    AppCardTitle,
    AppCardHeader,
    AppCardContent,
    AppRadio,
    LabeledInput,
    AppButton,
    LabeledItem,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      from: {
        report: {},
        details: '',
      },
      errorMessageDetails: '',
    }
  },
  methods: {
    send() {
      this.$emit('send', {
        report: this.form.report,
        details: this.form.details,
      })
    },
  },
}
</script>
