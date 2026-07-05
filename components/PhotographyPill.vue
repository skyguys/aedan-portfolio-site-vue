
<script setup>

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true
  },
  revealed_text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true
  }
})

let titleTruncated = props.title.length > 30 ? props.title.slice(0, 27) + "..." : props.title;
let textTruncated = props.revealed_text;
if (props.revealed_text.length > 70){
  textTruncated = props.revealed_text.slice(0, 67) + '...';
}

const bgImage = computed(() => `url(${props.image})`);

</script>

<template>
  <NuxtLink
    class="pill"
    :to="props.link"
  >
    <div class="photography-container">
      <div class="photography-title">
        <h4>{{ titleTruncated }}</h4>
      </div>
      <div class="d-none d-lg-block photography-description">
        <span>{{ textTruncated }}</span>
      </div>
    </div>
    

  </NuxtLink>
</template>

<style lang="scss" scoped>

a {
  color: white;
  text-decoration: none;
}

a > * {
  text-align: center;
}

// .col {
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

.photography-title, .photography-description{
  width: 50%;
  padding: 5%;
}

.photography-container{
  display: flex; 
  justify-content: center;
  align-items: center;
  padding: 5%;
  height: 40vh;
}

.pill{

  // box-shadow: inset 0 0 0 0.5rem rgba(0, 0, 0, 0);

  /* background-image: v-bind("`url(${props.image})`"); */
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), v-bind(bgImage);
  background-repeat: no-repeat; 
  background-position: center; 
  background-size: 150%;

  transition: 0.25s ease;

  outline: 0.5rem solid transparent;


  &:hover{

    // box-shadow: inset 0 0 0 0.5rem rgba(255, 255, 255, 1);
    outline-offset: -1rem;
    outline: 0.5rem solid white;
    background-size: 180%;
    transform: scale(1.05);
    z-index: 1000;
  }
}

</style>