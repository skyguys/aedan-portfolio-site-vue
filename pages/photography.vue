<script setup lang="ts">
import Navbar from '~/components/Navbar.vue';
import Header from '~/components/Header.vue';
import ProjectHeader from '~/components/ProjectHeader.vue';

const header = ref('Photography');
const description = ref(
  `Everyone has hobbies. One of my hobbies is analog
  photography. Every photo here was taken on a film camera
  since I started college.`);
const navbarHeaderHue = ref(0);

</script>

<template>
    <Navbar 
      :navbar_hue="navbarHeaderHue">
    </Navbar>
    <ProjectHeader 
      :project_title='header' 
      :project_title_additional_info='description'
      :header_color="navbarHeaderHue">
    </ProjectHeader>
</template>