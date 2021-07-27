<template>
  <AppCard>
    <AppCardHeader closable @close="$emit('close', true)">
      <AppCardTitle>Signalement</AppCardTitle>
    </AppCardHeader>
    <AppCardContent class="space-y-4">
      <LabeledItem variant="secondary" label="Motif" class-name="text-base">
        <AppRadio
          :items="items"
          :selected="$v.form.report.$model"
          variant="secondary"
          :error-message="reportMessage"
          @select="$v.form.report.$model = $event"
        />
      </LabeledItem>
      <LabeledInput
        v-model="$v.form.details.$model"
        variant="secondary"
        label="Détails"
        name="details"
        placeholder="Détails sur le signalement"
        :error-message="detailsMessage"
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
import { required, maxLength } from 'vuelidate/lib/validators'
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
  validations: {
    form: {
      details: {
        maxLength: maxLength(256),
      },
      report: {
        required,
      },
    },
  },
  data() {
    return {
      form: {
        report: {},
        details: '',
      },
    }
  },
  computed: {
    reportMessage() {
      if (!this.$v.form.report.$dirty) return ''

      if (!this.$v.form.report.required) return 'Il faut choisir un motif'

      return ''
    },
    detailsMessage() {
      if (!this.$v.form.details.$dirty) return ''

      if (!this.$v.form.details.maxLength) return 'Le message est trop long'

      return ''
    },
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
