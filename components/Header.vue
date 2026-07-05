
<script setup>

import { runFadeIn } from '#imports';

const props = defineProps({
  header: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
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
    <div class="header-content fade-in row">
      <div 
        v-if="props.image" 
        class="col-md-6 d-none d-sm-flex header-image">
          <NuxtImg :src='props.image'></NuxtImg>
      </div>
      <div 
        :class="[
          props.image ? 'col-md-6' : 'col-12'
        ]"   
      >
        <h2>{{ header }}</h2>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.header-container{

  display: flex;
  align-items: center;

  height: 50vh;
  padding: 0% 20%;


  color: white;

  --base-color: v-bind('props.header_color');
  background: linear-gradient(hsla(var(--base-color), 10%, 40%, 0.9), 
                              hsla(var(--base-color), 10%, 20%, 0.9))
}

.header-content {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

}

.header-image{
  align-items: center;
  justify-content: center;

  > img{
    max-width: 70%;
    max-height: 45vh;
    width: auto;
    height: auto;
    border-radius: 50%;
    transition: 0.25s;
    border-radius: 50%;
  }

  img:hover{
    border-radius: 25%;
    transform: scale(1.05);
  }
}
  

.row {
  > div {
    padding: 2% 0%;
  }
}

@media (max-width: 768px){
  .header-container{
    height: 65vh;
  }

  .header-image {
    > img{
      max-width: 60%;
    }
  }
}

@media (max-width: 576px){
  .header-container{
    padding: 0% 10%;
    height: 50vh;
  }
}

</style>