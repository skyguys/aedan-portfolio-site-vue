
<script setup>

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
const fadeInElements = document.getElementsByClassName("fade-in")
// const footerYear = document.getElementById("year");

function fadeIn(fadeIn){

    for (let i = 0; i < fadeIn.length; i++){
        fadeIn[i].style.opacity = 1;
        fadeIn[i].style.filter = "blur(0)";
    }
}

function reset(fadeIn){
    for (let i = 0; i < fadeIn.length; i++){
        fadeIn[i].style.opacity = 0;
        fadeIn[i].style.filter = "blur(0.5rem)";
    }
}

// function updateFooter(){
//     const currentDate = new Date(); // Current date and time
//     const currentYear = currentDate.getFullYear(); 

//     footerYear.textContent = currentYear;
// }


fadeIn(fadeInElements);
console.log("loaded!");
})



</script>

<template>
  <div class="header-container">
    <div class="fade-in row align-items-center">
      <div 
        v-if="props.image" 
        class="col-md-6 header-image">
          <NuxtImg :src='props.image'></NuxtImg>
      </div>
      <div 
        :class="[
          props.image ? 'col-md-6' : 'col-12',
          'header-content'
        ]"   
      >
        <h2>{{ header }}</h2>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<style>

.header-container{
  height: 60vh;
  padding: 0% 20%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  background: linear-gradient( hsla(v-bind('header_color'), 10%, 40%, 0.9), hsla(v-bind('header_color'), 10%, 20%, 0.9) )
}

.header-image{
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-image > img{
  max-width: 80%;
  max-height: 45vh;
  width: auto;
  height: auto;
  border-radius: 50%;
  transition: 0.25s;
  border-radius: 50%;
}

.header-image img:hover{
  border-radius: 25%;
  transform: scale(1.05);
}
  
.header-content{
  text-align:center;
}

</style>