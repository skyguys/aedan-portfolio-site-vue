<script setup>
import Navbar from '~/components/Navbar.vue';
import Header from '~/components/Header.vue';
import ProjectHeader from '~/components/ProjectHeader.vue';
import PhotographyPill from '~/components/PhotographyPill.vue';
import ProjectPill from '~/components/ProjectPill.vue';

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
    </div>
</template>

<style scoped>

</style>