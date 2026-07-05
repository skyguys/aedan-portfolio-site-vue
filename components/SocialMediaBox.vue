
<script setup>

const props = defineProps({
  image: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true,
  }
})

</script>

<template>
  <NuxtLink
    :to="link"
    target="_blank"
  >
  <div class="row social-media-container">
    <div class="col-2 social-media-icon">
      <img
        :src="image"
      >
    </div>
    <div class="col-10 social-media-text">
      <span>{{ text }}</span>
    </div>
  </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>

.social-media-container{

  padding: 2%;
  transition: 0.25s ease;
  box-shadow: 0 0 0 0 black;

  &:hover{
    background-color: rgba(0, 0, 0, 0.25);
    transform: translate(3px, 0px);
    box-shadow: -3px 0 0 0 black;
  }
}

a {
  color: black;
}

.social-media-icon{
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    height: auto;   
    width: 3vw;
  }
}

.social-media-text{
  display: flex;
  align-items: center;
}

@media (max-width: 768px){
.social-media-icon{

  > img {
    width: 5vw;
  }
}
}

</style>