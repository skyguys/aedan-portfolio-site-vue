<script setup lang="ts">
import Navbar from '~/components/Navbar.vue';
import Header from '~/components/Header.vue';

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
    <Header 
      :header='header'
      :description='description'
      :header_color="navbarHeaderHue">
    </Header>
</template>