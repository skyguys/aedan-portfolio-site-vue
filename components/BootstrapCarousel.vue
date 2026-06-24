
<script setup>

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => []
  },
  image_path: {
    type: String,
    required: true
  },
  modal_id: {
    type: String,
    required: false // Some carousels might not need an image modal.
  },
  carousel_id: {
    type: String,
    required: true
  }
})

const emit = defineEmits(
  [
    'current-image'
  ]
)

const imagePaths = []
for (var i = 0; i < props.images.length; i++){
  imagePaths[i] = props.image_path + props.images[i];
}

const modalId = ref('#' + props.modal_id);
const carouselId = ref('#' + props.carousel_id);

let currentImageShown = imagePaths[0];
let copyOfCurrentImageSentToModal = imagePaths[0];

function updateCurrentImage(){
  copyOfCurrentImageSentToModal = currentImageShown; 
  emit('current-image', copyOfCurrentImageSentToModal);

}

onMounted(() => {
  // Emit on first run.
  // emit('current-image', currentImageShown);

  const myCarousel = document.getElementById(props.carousel_id);
  myCarousel.addEventListener('slide.bs.carousel', event => {
    const activeIndex = event.to;   
    currentImageShown = imagePaths[activeIndex];
  
    // emit('current-image', currentImageShown);
  });
})

</script>

<template>
  <div :id="props.carousel_id" class="carousel slide" data-bs-ride="carousel">
    <!-- Ratio here is to prevent content resizing. -->
    <div v-if="props.images.length > 0" class="carousel-inner ratio ratio-4x3">
      <div class="carousel-item active">
        <button 
          type="button"
          class="btn"
          data-bs-toggle="modal"
          :data-bs-target="modalId"
          @click="updateCurrentImage"
        >
          <NuxtImg 
            :src="imagePaths[0]"
            class="d-block w-100">
          </NuxtImg>
        </button>

      </div>
      <div v-for="image in imagePaths.slice(1)" class="carousel-item">
        <button 
          type="button" 
          class="btn" 
          data-bs-toggle="modal" 
          :data-bs-target="modalId"
          @click="updateCurrentImage"
        >
          <NuxtImg 
            :src="image"
            class="d-block w-100"
          >
          </NuxtImg>
        </button>
      </div>

    </div>
    <div v-else>
      <div class="carousel-item active">
        <NuxtImg 
          :src="'/images/general/placeholder.png'"
          class="d-block w-100"
        >
        </NuxtImg>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" :data-bs-target="carouselId" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" :data-bs-target="carouselId" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  
</template>

<style scoped>

.carousel-item {
  align-content: center;
}

</style>