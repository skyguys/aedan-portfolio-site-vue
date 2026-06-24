
<script setup>

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  bulletpoints: {
    type: Array,
    required: true,
  },
  primary_info: {
    type: String,
    required: true,
  },
  secondary_info: {
    type: String,
    required: true
  },
  tertiary_info: {
    type: String,
    required: false
  }
})

</script>

<template>
  <div class="row">
    <div class="col-12 col-md-8">
      <h3>{{ title }}</h3>
      <ul>
        <li v-for="bulletpoint in bulletpoints">
          {{ bulletpoint }}
        </li>
      </ul>
    </div>
    <div class="col-12 col-md-4">
      <h5>{{ primary_info }}</h5>
      <p>{{ secondary_info }}</p>
      <p v-if="tertiary_info">{{ tertiary_info }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>