<script setup>
import Navbar from '~/components/Navbar.vue';
import ProjectHeader from '~/components/ProjectHeader.vue';
import PhotographyPill from '~/components/PhotographyPill.vue';
import Footer from '~/components/Footer.vue';

const { data: photography } = await useAsyncData('photography', () =>
  queryCollection('photography').all()
)
console.log(photography.value);

const { data: photographyMetaData } = await useAsyncData(`photographyMetadata:${photography.value.stem}`, () =>
  queryCollection('photographyMetadata').all()
)

console.log(photographyMetaData.value);

const header = ref('Photography');
const description = ref(
  `Everyone has hobbies. One of my hobbies is analog
  photography. I take a lot of photos while traveling. Here's a few that I'm
  proud of!`);
const navbarHeaderHue = ref(0);

</script>

<template>
    <Navbar 
      :navbar_hue="navbarHeaderHue">
    </Navbar>
    <ProjectHeader 
      :project_title='header' 
      :description='description'
      :header_color="navbarHeaderHue">
    </ProjectHeader>
    <div class="main-content">
      <h2>Photo Gallery</h2>
      <p>Images here are categorized by format and/or location. 
        Click one that interests you!</p>
      <hr>
      <div class="row">
          <PhotographyPill 
                    v-if="photographyMetaData"
          v-for="(collection, index) in photography"
            :title="collection.title"
            :image='photographyMetaData[index]?.data[0]?.src'
            :revealed_text="collection.description"
            :link="collection.path"
            class="col-12 col-xl-6 photography-item"
          >
          </PhotographyPill>
      </div>
      <hr>
      <h2>Photography Gear</h2>
      <p>In case you're interested in my gear, here's what I have:</p>
      <div class="row">
        <div class="col-12 col-sm-6">
          <p>Film:</p>
          <ul>
            <li>Pentax 17</li>
            <li>Pentax Espio 80</li>
            <li>Canon A-1</li>
            <li>Minolta Maxxum/Alpha 7000</li>
            <li>Polaroid Sun 600</li>
            <li>Nimslo 3D</li>
            <li>Bronica ETRSi</li>
          </ul>
        </div>
        <div class="col-12 col-sm-6">
          <p>Digital:</p>
          <ul>
            <li>Fujifilm XT30-II</li>
            <li>Samsung Galaxy S23</li>
            <li>Sony DCR-TRV140 Digital 8 Camcorder</li>
          </ul>
        </div>
      </div>
    </div>
    <Footer
      :footer_color="navbarHeaderHue"
    ></Footer>
</template>

<style scoped>

</style>