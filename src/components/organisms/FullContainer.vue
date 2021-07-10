<template>
  <section
    class="h-screen flex flex-col overflow-hidden xl:overflow-visible relative"
    :class="around ? 'justify-around' : 'justify-center'"
  >
    <GraphicBlob
      class="text-primary-base opacity-10 fill-current absolute h-screen w-[100vh]"
      :class="blobClass"
    />
    <slot :graphicStyle="graphicClass"></slot>
  </section>
</template>

<script>
import GraphicBlob from '../atoms/graphics/GraphicBlob'

export default {
  name: 'FullContainer',
  components: {
    GraphicBlob,
  },
  props: {
    around: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'none',
      validator(value) {
        return ['none', 'top-left', 'right', 'bottom-left'].includes(value)
      },
    },
  },
  computed: {
    graphicClass() {
      return 'h-auto w-full md:w-1/2 mx-auto relative'
    },
    blobClass() {
      if (this.type === 'none') return 'hidden'

      if (this.type === 'top-left') return 'left-[-70vh] -top-32'

      if (this.type === 'right') return 'right-[-65vh] -bottom-32'

      if (this.type === 'bottom-left') return 'transform rotate-[-102deg] left-[-60vh]'

      return ''
    },
  },
}
</script>
