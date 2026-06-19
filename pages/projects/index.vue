<script setup>
const { data: projects } = await useAsyncData('projects', () =>
  queryCollection('projects').all()
)
</script>

<template>
  <div>
    <h1>Projects</h1>
    <ul>
      <li v-for="project in projects" :key="project.path">
        <NuxtLink :to="project.path">
          {{ project.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>