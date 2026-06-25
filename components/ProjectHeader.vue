
<script setup>

import { runFadeIn } from '#imports';

const props = defineProps({
  project_title: {
    type: String,
    required: true,
  },
  project_title_additional_info: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false,
  },
  images: {
    type: Array,
    required: false,
    default: () => []
  },
  image_path: {
    type: String,
    required: false
  },
  header_color: {
    type: Number,
    required: true,    
  }
})

onMounted(() => {
  runFadeIn();
})

</script>

<template>
  <div class="header-container">
    <div class="header-content fade-in">
      <h1>
        {{ project_title }}
      </h1>
      <h2>
        {{ project_title_additional_info }}
      </h2>
      <p>
        {{ description }}
      </p>
    </div>
  </div>
</template>

<style>

.header-container{
  height: max(30vh, 300px);
  padding: 0% 15%;

  display: flex;
  align-items: center;

  color: white;
  background: linear-gradient(hsla(v-bind('header_color'), 10%, 40%, 0.9), 
                              hsla(v-bind('header_color'), 10%, 20%, 0.9) )
}

.header-content{
  text-align: left;
}

@media (max-width: 768px){
  .header-container{
    height: max(40vh, 300px);
  }
}

</style>