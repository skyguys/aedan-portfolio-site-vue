<script setup>
import ProjectHeader from '~/components/ProjectHeader.vue';
import BootstrapCarousel from '~/components/BootstrapCarousel.vue';


const route = useRoute()
const { data: project } = await useAsyncData(route.path, () => {
  return queryCollection('projects').path(route.path).first()
})
const navbarHeaderHue = Math.floor(Math.random() * (361));

const testImages = ref(['grad.jpg', 'lahacks.jpg'])

</script>

<template>
  <div>
    <Navbar 
      :navbar_hue="navbarHeaderHue">
    </Navbar>
    <ProjectHeader 
      :project_title='project.title'
      :project_title_additional_info='project.title_additional_info'
      :description='project.description'
      :header_color="navbarHeaderHue">
    </ProjectHeader>
    <div class="main-content" v-if="project">
      <div class="row">
        <div class="col-12 col-lg-9">
          <h3>{{ project.tools }}</h3>
          <NuxtLink 
            v-if="project.github" 
            :to="project.github" 
            target="_blank"
            :style="{ color: `hsl(${navbarHeaderHue}, 30%, 25%)` }"
          >
            <h5>{{ project.github }}</h5>
          </NuxtLink>
        </div>
        <div class="col-12 col-lg-3">
          <p>{{ project.date_range }}</p>
        </div>
      </div>
      <p>{{ project.description_long }}</p>

      <div class="row">
        <div class="col-7">

      <!-- <img :src="project.images[0]"> -->
      <ul>
        <li v-for="bulletpoint in project.bulletpoints">
          <!-- {{ bulletpoint }} -->
          <div v-html="bulletpoint"></div>
        </li>
      </ul>
        </div>
        <div class="col-5">
      <BootstrapCarousel
        :images="testImages",
        image_path="/images/main/carousel/"
      >
      </BootstrapCarousel>
        </div>
      </div>



    </div>
  </div>

</template>

<style scoped>

.main-content{
  margin: 3% 15%;
}

.carousel{
  /* margin: 2.5% 20%; */
  /* background-color: hsl(v-bind(navbarHeaderHue), 30%, 80%); */
}

.carousel img {
  min-width: 100%;
  height: 25vw;
  object-fit: contain;
}



</style>