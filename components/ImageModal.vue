
<script setup>

const props = defineProps({
  image_path: {
    type: String,
    required: true
  },
  modal_id: {
    type: String,
    required: true
  }
})

</script>

<template>
  <div class="modal fade" :id="modal_id" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <!-- bg-transparent and border-0 here to nicely display images-->
      <div class="modal-content border-0">
        <NuxtImg
          :src="image_path"
          class="rounded shadow-lg img-fluid"
        >  
        </NuxtImg>
      </div>
    </div>
  </div>
</template>

<style>

/* Fixes issue with vertical images and makes entire image fit */
/* Modal border and padding background are fixed through bootstrap classes */
img {
    max-height: 90vh;  
    width: auto;       
    height: auto;      
    margin: auto;
}

/* Put in place because some devices have it off-center */
.modal-content{
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 2%;
}

</style>