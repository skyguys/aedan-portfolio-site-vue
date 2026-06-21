<script setup lang="ts">
import Navbar from '~/components/navbar.vue';
import Header from '~/components/header.vue';

const header = ref('Hi, I\'m Aedan!');
const description = ref(
  `I'm a computer science graduate from UC Irvine. 
  Right now, I'm looking for opportunities to apply 
  my skillset to the workforce in a SWE or IT environment.`);
const image = ref("/images/main/aedan.jpg")

</script>

<template>
    <Navbar></Navbar>
    <Header :header='header' :description='description' :image='image'></Header>
</template>