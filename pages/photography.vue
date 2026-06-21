<script setup lang="ts">
import Navbar from '~/components/navbar.vue';
import Header from '~/components/header.vue';

const header = ref('Photography');
const description = ref(
  `Everyone has hobbies. One of my hobbies is analog
  photography. Every photo here was taken on a film camera
  since I started college.`);

</script>

<template>
    <Navbar></Navbar>
    <Header :header='header' :description='description'></Header>
</template>