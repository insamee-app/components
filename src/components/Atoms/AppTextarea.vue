<template>
  <textarea
    :id="name"
    class="w-full border border-primary-dark rounded p-2"
    :value="value"
    name="text"
    cols="30"
    rows="10"
    @input="$emit('input', $event.target.value)"
  ></textarea>
</template>

<script>
export default {
  name: 'AppTextarea',
  props: {
    value: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
}
</script>
