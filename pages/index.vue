<script setup lang="ts">
import Navbar from '~/components/Navbar.vue';
import Header from '~/components/Header.vue';
import InfoCard from '~/components/InfoCard.vue';
import BootstrapCarousel from '~/components/BootstrapCarousel.vue';
import Footer from '~/components/Footer.vue';

const header = ref('Hi, I\'m Aedan!');
const description = ref(
  `I'm a computer science graduate from UC Irvine. 
  Right now, I'm looking for opportunities to apply 
  my skillset to the workforce in a SWE or IT environment.`);
const image = ref("/images/main/aedan.jpg")
const navbarHeaderHue = ref(180) 

const aboutMeDescription = ref([
  `I currently reside in the greader Los Angeles area and am looking for
  SWE and IT-related roles. I recently graduated from UC Irvine in 
  June! I've been spending my free time learning new technologies,
  such as Vue and Nuxt, which this site is built on.`,

  `My projects can be found in the 'Portfolio' tab above. These range
  from class projects, hobby projects, and hackathon projects.
  In addition, my photography can be found under the 'Photography' tab.`,

  `If you would like to contact me for any reason, you can click the 
  'Contact' tab above to send me a message!`,

  `In my free time, when I'm not programming or learning new technologies,
  I enjoy traveling, photography, bowling, and car modification.`
])

const missionStatementDescription = ref([
  `I take pride in my code being used to hopefully progress the world and to 
  help others. Every piece of software I create is hopefully a positive 
  solution to an existing problem, hopefully making someone's life just a 
  little bit easier.`,

  `Whether that's a website to help market a business, a game to teach kids
  digital literacy, or a desktop program to reduce the barrier of access to 
  paid software, my goal is to create software to progress the world.`,

  `If this missions statement aligns with yours, we may be a good match!`
])



const route = useRoute()
const { data: index } = await useAsyncData(route.path, () => {
  return queryCollection('index').path(route.path).first()
})

</script>

<template>
  <div>
    <Navbar 
      :navbar_hue="navbarHeaderHue">
    </Navbar>
    <Header 
      :header='header'
      :description='description'
      :image='image'
      :header_color="navbarHeaderHue">
    </Header>

    <div class="main-content">
      <InfoCard 
        :flipped="false" 
        heading="ABOUT ME"
        :description="aboutMeDescription"
      >
        <!-- Only render if we can find the index content.-->
        <BootstrapCarousel 
          v-if="index"
          :images="index.images"
          :image_path="index.image_path"
          carousel_id="imageCarousel"
        >
        </BootstrapCarousel>
      </InfoCard>
      <InfoCard 
        :flipped="true" 
        heading="Mission Statement"
        :description="missionStatementDescription"
      >
      </InfoCard>
    </div>
    <Footer :footer_color="navbarHeaderHue"></Footer>
  </div>
</template>

<style scoped>

.carousel{
  margin:2.5%;
}

.carousel img {
  min-width: 100%;
  height: 25vw;
  object-fit: contain;
}

@media (max-width: 768px){
  .carousel img{
    height: 50vw;
  }
}

</style>