<template>
  <AppContainer class="space-y-8 relative">
    <slot name="title"></slot>
    <section class="grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-8">
      <client-only>
        <div v-if="fullFilters" class="lg:row-span-2">
          <div
            class="
              flex
              lg:items-start
              space-y-4
              lg:top-4
              items-center
              lg:flex-col
              flex-row
              lg:sticky
            "
          >
            <slot name="filters-full" class-names="w-full"></slot>
          </div>
        </div>
        <template v-if="loading || (!loading && totalPagination)">
          <slot name="cards" :loading="loading"></slot>
        </template>
        <template v-else>
          <div class="row-span-2 col-span-full lg:col-span-2">
            <GraphicPlants class="absolute left-0 bottom-0 w-full md:px-4 md:h-20" />
            <GraphicLeaves class="w-full md:h-40" />
            <GraphicWind class="absolute bottom-1/3 right-0 md:h-32 md:w-32" />
            <div class="text-center max-w-md mx-auto">
              <slot name="error"></slot>
            </div>
          </div>
        </template>
        <div
          v-if="actionFilters"
          class="sticky bottom-10 place-self-end justify-self-center col-span-2"
        >
          <slot name="filters-action"></slot>
        </div>
        <template v-if="totalPagination && !loading">
          <slot name="pagination" classNames="col-span-2"></slot>
        </template>
      </client-only>
    </section>
  </AppContainer>
</template>

<script>
import AppContainer from '../organisms/AppContainer'
import GraphicPlants from '../atoms/graphics/GraphicPlants'
import GraphicLeaves from '../atoms/graphics/GraphicLeaves'
import GraphicWind from '../atoms/graphics/GraphicWind'

export default {
  name: 'ResponsiveFilterList',
  components: { AppContainer, GraphicPlants, GraphicLeaves, GraphicWind },
  props: {
    fullFilters: {
      type: Boolean,
      default: false,
    },
    actionFilters: {
      type: Boolean,
      default: false,
    },
    totalPagination: {
      type: Number,
      default: 0,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
