<template>
  <div class="col-span-2">
    <section class="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
      <template v-if="loading">
        <slot name="skeletons"></slot>
      </template>
      <template v-else-if="paginationTotal">
        <template v-if="itemsTotal">
          <slot name="cards"></slot>
        </template>
        <template v-else>
          <div class="text-center text-lg col-span-2">
            Il semble que vous ne soyez pas sur la bonne page
          </div>
        </template>
      </template>
      <template v-else>
        <div class="text-center text-lg col-span-2">
          Il n'existe pas de tutorats pour votre recherche !
        </div>
      </template>
    </section>
    <div v-if="actionFilters" class="flex justify-center sticky bottom-10">
      <slot name="filters-action"></slot>
    </div>
    <template v-if="paginationTotal && itemsTotal && !loading">
      <slot name="pagination"></slot>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ResponsiveListCards',
  props: {
    actionFilters: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    pagination: {
      type: Object,
      default: () => undefined,
    },
    paginationTotal: {
      type: Number,
      default: 0,
    },
    itemsTotal: {
      type: Number,
      default: 0,
    },
  },
}
</script>
