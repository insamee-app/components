<template>
  <input
    :id="name"
    :value="value"
    :type="type"
    :placeholder="placeholder"
    class="
      border border-primary-dark
      rounded
      py-1
      px-2
      w-full
      placeholder-grey-base
      focus:
      outline-none
    "
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    value: {
      type: [String, Number],
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
