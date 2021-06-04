<template>
  <input
    :value="value"
    :id="name"
    :type="type"
    :placeholder="placeholder"
    @input="$emit('input', $event.target.value)"
    class="border border-primary-dark rounded py-1 px-2 w-full placeholder-grey-base focus: outline-none"
  />
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    value: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
}
</script>
