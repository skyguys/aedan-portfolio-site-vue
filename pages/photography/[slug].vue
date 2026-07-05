<script setup>
import ProjectHeader from '~/components/ProjectHeader.vue';
import Footer from '~/components/Footer.vue';
import { runFadeInSingleElement } from '#imports';

const navbarHeaderHue = Math.floor(Math.random() * (361));

const route = useRoute();
const { data: photography } = await useAsyncData(route.path, () => {
  return queryCollection('photography').path(route.path).first()
})

const { data: photographyMetaData } = await useAsyncData(`photographyMetadata:${photography.value.stem}`, () => {
  return  queryCollection('photographyMetadata')
    .where('stem', '=', photography.value.stem)
    .first()})

let carouselImages = [];
let imageModal = null;

onMounted(() => {

  carouselImages = document.getElementsByClassName("carousel-item");
  imageModal = document.getElementById("imagePopupModal");
  addKeyboardControlsToBootStrapCarousel();

})

function addKeyboardControlsToBootStrapCarousel(){

  // By default, bootstrap doesn't allow you to listen for arrow keys until
  // you click left/right. This is my workaround.

  document.addEventListener('keydown', function(event) {
    const modalFocused =  imageModal.classList.contains("show");
    if (event.key === 'ArrowRight' && modalFocused) {
        const nextButton = imageModal.querySelector(".carousel-control-next");
        nextButton.focus();
        nextButton.click();
    } else if (event.key === 'ArrowLeft' && modalFocused) {
        const prevButton = imageModal.querySelector(".carousel-control-prev");
        prevButton.focus();
        prevButton.click();
    }
  });
}

function removeActiveCarouselImage(){

  // Removes all active tags to reset carousel
  for (let i = 0; i < carouselImages.length; i++){
    carouselImages[i].classList.remove("active");
  }
}

function setActiveCarouselImage(id){

  // Adds active class for carousel display
  removeActiveCarouselImage();
  carouselImages[id].classList.add("active");
}

function imageLoaded(id){
  const elements = document.getElementsByClassName("single-image")

  // Potentially buggy behavior.
  runFadeInSingleElement(elements[id].firstChild);
  elements[id].classList.remove('placeholder-glow')
  elements[id].firstChild.classList.remove('placeholder')
}

function imageError(id){
  console.log(id + " had an error when loading.");
}

</script>

<template>
  <div>
    <!-- Image modal -->
    <div class="modal fade" id="imagePopupModal" tabindex="-1" aria-labelledby="imagePopupModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title" id="imagePopupModalLabel">{{ photography.title }}</h3>
            <button data-bs-theme="dark" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div id="imageCarousel" class="carousel slide">
              <div class="carousel-inner ratio ratio-4x3">
                <div 
                  v-for="image in photographyMetaData.data"
                  class="carousel-item"
                >
                  <div class="slide-content">
                    <img
                      :src="image.src"
                      :style="{
                        aspectRatio: image.ratio,
                      }"
                    >
                    <p> 
                      {{ image.src.split('/').at(-1) }} |
                      {{ image.width }}px x {{ image.height }}px</p>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

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
          data-bs-toggle="modal"
          data-bs-target="#imagePopupModal"
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
        </div>
      </div>
    </div>
    <Footer :footer_color="navbarHeaderHue" />
  </div>

</template>

<style lang="scss" scoped>

.modal-content{
  background-color: rgba(25, 25, 25, 0.8);
  color: white;
}

.slide-content {
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
}

.carousel-inner{
  height: 85vh;
}

.image-container{
  display: flex;
  flex-wrap: wrap;
}

.single-image{
  height: 20rem;
  margin: 0.5rem;
  flex: 1 0 fit-content;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    vertical-align: middle;
    
    transition: 0.25s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
  
}

</style>