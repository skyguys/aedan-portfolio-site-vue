
<script setup>

import SocialMediaBox from './SocialMediaBox.vue'

const props = defineProps({
  footer_color: {
    type: Number,
    required: true,    
  }
})

const { data: projects } = await useAsyncData('projects', () =>
  queryCollection('projects').all()
)

const { data: photography } = await useAsyncData('photography', () =>
  queryCollection('photography').all()
)

const { data: contact } = await useAsyncData(`contact`, () =>
  queryCollection('contact').all()
)

const currentDate = new Date(); // Current date and time
const currentYear = currentDate.getFullYear();

</script>

<template>
  <div class="footer-container">
    <div class="row">
      <div class="col-12 col-md-6 col-xl-3">
        <!-- <hr> -->
        <p>
          This site was made with Vue, Nuxt, and Bootstrap. 
        </p>
        <p>
          © {{ currentYear }} Aedan Magsombol.
        </p>
      </div>
      <div class="col-12 col-md-6 col-xl-3">
        <!-- <hr> -->
        <NuxtLink
          to="/"
        >
          <h5>Home</h5>
        </NuxtLink>
        <NuxtLink
          to="contact"
        >
          <h5>Contact</h5>
        </NuxtLink>
          <ul class="d-none d-md-block">
            <li
              v-for="social in contact"
            >
              <NuxtLink
                :to="social.link"
                target="_blank"
              >
                {{ social.title }}
              </NuxtLink>
            </li>
          </ul>
      </div>
      <div class="col-12 col-md-6 col-xl-3">
        <!-- <hr> -->
        <NuxtLink
          to="/projects"
        >
          <h5>Resume</h5>
        </NuxtLink>
        <hr class="d-none d-md-block">
        <NuxtLink
          v-for="project in projects"
          :to="project.path"
          class="d-none d-md-block"
        >
          <p>{{ project.title }}</p>
        </NuxtLink>
      </div>
      <div class="col-12 col-md-6 col-xl-3">
        <!-- <hr> -->
        <NuxtLink
          to="/photography"
        >
          <h5>Photography</h5>
        </NuxtLink>
        <hr class="d-none d-md-block">
        <NuxtLink
          v-for="photo in photography"
          :to="photo.path"
          class="d-none d-md-block"
        >
          <p>{{ photo.title }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

.footer-container{
  /* height: 10vh; */
  padding: 2%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  /* text-align: center; */
  --base-color: v-bind('props.footer_color');
  background: linear-gradient(hsla(var(--base-color), 10%, 40%, 0.9), 
                              hsla(var(--base-color), 10%, 20%, 0.9) );
  
  @media (max-width: 768px){
    text-align: center;
  }
}

a {
  color: white;
}


</style>