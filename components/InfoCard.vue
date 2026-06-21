
<script setup>
  const props = defineProps({
    flipped: {
      type: Boolean,
      required: true
    },
    description: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <div class="row">
    <div class="col">
      <p v-if="flipped">
        {{ description }}
      </p>
      <h1 v-else>
        {{ heading }}
        <slot></slot>
      </h1>
    </div>
    <div class="col">
      <h1 v-if="flipped">
        {{ heading }}
        <slot></slot>
      </h1>
      <p v-else>
        {{ description }}
      </p>
    </div>
  </div>
</template>

<style>

h1 {
  font-family: 'Helvetica';
  font-weight: bold;
  font-size: 5rem;
  letter-spacing: -0.25rem;
}

</style>