<template>
  <div class="flex flex-row items-center">
    <AppButton :disabled="!previousPage" @click="$emit('pagination', previousPage)">
      Précédent
    </AppButton>
    <PaginateNumbers
      :last-page="lastPage"
      :first-page="firstPage"
      :current-page="currentPage"
      :small="small"
      @pagination="$emit('pagination', $event)"
    />
    <AppButton :disabled="!nextPage" @click="$emit('pagination', nextPage)">Suivant</AppButton>
  </div>
</template>

<script>
import PaginateNumbers from '../molecules/PaginateNumbers'
import AppButton from '../atoms/AppButton'

export default {
  name: 'Pagination',
  components: { PaginateNumbers, AppButton },
  props: {
    small: {
      type: Boolean,
      default: false,
    },
    previousPage: {
      type: Number,
      default: undefined,
    },
    nextPage: {
      type: Number,
      default: undefined,
    },
    firstPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    lastPage: {
      type: Number,
      required: true,
    },
  },
}
</script>
