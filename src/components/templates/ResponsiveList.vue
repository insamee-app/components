<template>
  <div>
    <client-only>
      <AppContainer class="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-8">
        <div class="lg:row-span-2">
          <div
            class="
              space-y-4
              flex flex-row
              items-center
              lg:items-start lg:flex-col lg:sticky lg:top-4
            "
          >
            <slot name="filter"></slot>
          </div>
        </div>
        <slot name="cards"></slot>
      </AppContainer>
      <slot name="modal"></slot>
    </client-only>
  </div>
</template>

<script>
import AppContainer from '../organisms/AppContainer'

export default {
  name: 'ResponsiveFilterList',
  components: { AppContainer },
}
</script>
