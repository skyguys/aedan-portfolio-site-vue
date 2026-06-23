
<script setup>

const props = defineProps({
  flipped: {
    type: Boolean,
    required: true
  },
  description: {
    type: Array,
    required: true,
  },
  heading: {
    type: String,
    required: true
  }
})

const colOrderClass = computed(() => {
  return {
    'col-lg': true,
    'order-md-2': props.flipped,
  }
})

</script>

<template>
  <div class="row">
    <div
      class="col-lg"
      :class="flipped ? 'order-1 order-lg-2' : ''"
    >
      <h1>
        {{ heading }}
        <slot></slot>
      </h1>
    </div>
    <div
      class="col-lg"
      :class="flipped ? 'order-2 order-lg-1' : ''"
    >
      <p v-for="desc in description" :key="desc">
        {{ desc }}
      </p>
    </div>
  </div>
</template>

<style>

</style>