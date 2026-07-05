
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

let titleTruncated = props.title.length > 13 ? props.title.slice(0, 10) + "..." : props.title;
let textTruncated = props.revealed_text;
if (props.revealed_text.length > 30){
  textTruncated = props.revealed_text.slice(0, 30) + '...';
}

const bgImage = computed(() => `url(${props.image})`);

</script>

<template>
  <NuxtLink
    class="pill"
    :to="props.link"
  >
    <div>
      <h4>{{ titleTruncated }}</h4>
      <span class="d-none d-lg-block">{{ textTruncated }}</span>
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

.pill{
  padding: 5%;

  display: flex; 
  justify-content: center;
  align-content: center;


  overflow: hidden;
  position: relative;

  /* background-image: v-bind("`url(${props.image})`"); */
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), v-bind(bgImage);
  background-repeat: no-repeat; 
  background-position: center; 
  background-size: 150%;

  transition: 0.25s ease;

  /* Modified from https://prismic.io/blog/css-hover-effects */
  // For "shine" transition

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      0deg, 
      transparent 0%, 
      rgba(255, 255, 255, 0.3)
    );
    transform: rotate(-45deg);
    transition: all 0.5s ease;
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
    transform: rotate(-45deg) translateY(100%);
  }

  &:hover{
    background-size: 180%;

    transform: scale(1.05);
    z-index: 1000;
  }
}

</style>