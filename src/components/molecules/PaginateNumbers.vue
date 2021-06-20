<template>
  <div class="flex flex-grow justify-around mx-4">
    <AppPaginateNumber
      v-for="value in pages"
      :key="value"
      :small="small"
      :value="page(value)"
      :actif="isActif(value)"
      @click="$emit('pagination', page(value))"
    />
  </div>
</template>

<script>
import AppPaginateNumber from '../atoms/AppPaginateNumber'

export default {
  name: 'AppPaginateNumbers',
  components: { AppPaginateNumber },
  props: {
    small: {
      type: Boolean,
      default: false,
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
  computed: {
    pages() {
      return this.lastPage > 5 ? 5 : this.lastPage
    },
  },
  methods: {
    // Use like an offset to center the selected page
    firstPageToShow() {
      const middle = Math.trunc(this.pages / 2)

      if (this.currentPage - middle < this.firstPage) return 0

      if (this.currentPage + middle > this.lastPage) return this.lastPage - this.pages

      return this.currentPage - (middle + 1)
    },
    page(value) {
      return value + this.firstPageToShow()
    },
    isActif(value) {
      return this.currentPage === this.page(value)
    },
  },
}
</script>
