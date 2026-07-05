<script setup>
import ProjectHeader from '~/components/ProjectHeader.vue';
import Footer from '~/components/Footer.vue';
import { runFadeInSingleElement } from '#imports';

const route = useRoute();
console.log(route.path);
const { data: photography } = await useAsyncData(route.path, () => {
  return queryCollection('photography').path(route.path).first()
})

console.log(photography.value);
console.log(photography.value.path);

const { data: photographyMetaData } = await useAsyncData(`photographyMetadata:${photography.value.stem}`, () => {
  return  queryCollection('photographyMetadata')
    .where('stem', '=', photography.value.stem)
    .first()})
console.log(photographyMetaData.value);

const navbarHeaderHue = Math.floor(Math.random() * (361));
const modalId = ref("projectsImageModal");
const carouselId = ref("projectsImageCarousel")

function setActiveCarouselImage(id){
  console.log(id)
}


function imageLoaded(id){
  console.log(id + " loaded!")
  const elements = document.getElementsByClassName("single-image")
  // const imageLoaded = elements[id].querySelector('.fade-in'); 
  // const placeholderImage = elements[id].querySelector('.fade-out'); 

  // console.log(specialChild);
  // runFadeOutSingleElement(placeholderImage);
  runFadeInSingleElement(elements[id].firstChild);
  elements[id].classList.remove('placeholder-glow')
  elements[id].firstChild.classList.remove('placeholder')
  // elements[id].removeAttribute("placeholder")
}

function imageError(id){
  console.log(id + " had an error.");
  testKey++;
}

onMounted(() => {
  console.log("Finished!")
});
</script>

<template>
  <div>
    <Navbar 
      :navbar_hue="navbarHeaderHue">
    </Navbar>
    <ProjectHeader 
      v-if="photography"
      :project_title='photography.title'
      :description='photography.description'
      :header_color="navbarHeaderHue">
    </ProjectHeader>
    <div class="main-content" v-if="photography">
      <div class="image-container">    
        <div 
          v-for="(image, index) in photographyMetaData.data"
          class="single-image placeholder-glow"
            @click="setActiveCarouselImage(index)"
        >
          <NuxtImg 
            :src="image.src"
                        loading="lazy"
            @load="imageLoaded(index)"
            @error="imageError(index)" 
                          :style="{
              aspectRatio: image.ratio,
            }"
            class="placeholder col-12 fade-in"
          >
          </NuxtImg>      
        <!-- <div 
          v-for="(image, index) in photographyMetaData.data"
          class="single-image placeholder-glow"
            @click="setActiveCarouselImage(index)"
        >
          <NuxtImg 
            :src="image.src"
            :custom="true"
            v-slot="{ src, isLoaded, imgAttrs }"
          >
            <img
              v-if="isLoaded"
              v-bind="imgAttrs"
              :src="src"
            loading="lazy"
            @load="imageLoaded(index)"
            @error="imageError(index)" 
                          :style="{
              aspectRatio: image.ratio
            }"
            class="fade-in"
            >

            <img
              v-else
              class="placeholder col-12"
                          :style="{
              aspectRatio: image.ratio
            }"
            ></img>

          </NuxtImg> -->
        </div>
      </div>
    </div>
    <Footer :footer_color="navbarHeaderHue" />
  </div>

</template>

<style lang="scss" scoped>

.main-content{
  // margin: 3% 15%;
}

.image-container{
  display: flex;
  flex-wrap: wrap;
}

.single-image{
  height: 20rem;
  margin: 0.5rem;
  flex: 1 0 fit-content;

  
}

.single-image img {


  height: 100%;
  width: 100%;
  object-fit: cover;
  vertical-align: middle;
}

</style>