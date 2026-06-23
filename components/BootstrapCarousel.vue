
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
  }
})

console.log(props.images);

const imagePaths = []
for (var i = 0; i < props.images.length; i++){
  imagePaths[i] = props.image_path + props.images[i];
}

console.log(imagePaths)

</script>

<template>
  <div id="carouselExampleRide" class="carousel slide" data-bs-ride="carousel">
    <div v-if="props.images.length > 0" class="carousel-inner">
      <div class="carousel-item active">
        <NuxtImg 
          :src="imagePaths[0]"
          class="d-block w-100">
        </NuxtImg>
      </div>
      <div v-for="image in imagePaths.slice(1)" class="carousel-item">
        <NuxtImg 
          :src="image"
          class="d-block w-100">
        </NuxtImg>
      </div>

    </div>
    <div v-else>
      <div class="carousel-item active">
        <NuxtImg 
          :src="'/images/general/placeholder.png'"
          class="d-block w-100">
        </NuxtImg>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
</div>
</template>

<style scoped>

</style>