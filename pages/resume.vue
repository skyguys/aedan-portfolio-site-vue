<script setup lang="ts">
import Navbar from '~/components/Navbar.vue';
import Header from '~/components/Header.vue';

const header = ref('Resume');
const description = ref(
  `Listed below is my work experience, projects, as well as a PDF copy of 
  my resume.`);
const navbarHeaderHue = ref(90);

const route = useRoute()
const { data: project } = await useAsyncData(route.path, () => {
  return queryCollection('projects').path(route.path).all()
})

</script>

<template>
    <Navbar 
      :navbar_hue="navbarHeaderHue">
    </Navbar>
    <Header 
      :header='header' 
      :description='description'
      :header_color="navbarHeaderHue">
    </Header>
</template>