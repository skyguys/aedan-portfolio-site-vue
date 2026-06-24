<script setup lang="ts">
import Navbar from '~/components/Navbar.vue';
import Header from '~/components/Header.vue';
import ProjectHeader from '~/components/ProjectHeader.vue';

const header = ref('Contact Information');
const description = ref(
  `Need to reach me about something? You can contact me
  on any of my social media or the contact form below.`);
const navbarHeaderHue = ref(40);

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