<script setup>

const route = useRoute()
const { data: project } = await useAsyncData(route.path, () => {
  return queryCollection('projects').path(route.path).first()
})
const navbarHeaderHue = Math.floor(Math.random() * (361));

</script>

<template>
  <Navbar 
    :navbar_hue="navbarHeaderHue">
  </Navbar>
  <Header 
    :header='header'
    :description='description'
    :image='image'
    :header_color="navbarHeaderHue">
  </Header>
  <div v-if="project">
    <h1>{{ project.title }}</h1>
    <p>{{ project.description }}</p>
    <!-- <img :src="project.images[0]"> -->
  </div>
</template>