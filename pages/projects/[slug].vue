<script setup>

const route = useRoute()
const { data: project } = await useAsyncData(route.path, () => {
  return queryCollection('projects').path(route.path).first()
})

</script>

<template>
  <div v-if="project">
    <h1>{{ project.title }}</h1>
    <p>{{ project.description }}</p>
    <!-- <img :src="project.images[0]"> -->
  </div>
</template>