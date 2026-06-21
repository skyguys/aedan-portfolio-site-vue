<script setup lang="ts">
import Navbar from '~/components/Navbar.vue';
import Header from '~/components/Header.vue';
import InfoCard from '~/components/InfoCard.vue';

const header = ref('Hi, I\'m Aedan!');
const description = ref(
  `I'm a computer science graduate from UC Irvine. 
  Right now, I'm looking for opportunities to apply 
  my skillset to the workforce in a SWE or IT environment.`);
const image = ref("/images/main/aedan.jpg")
const navbarHeaderHue = ref(180) 

</script>

<template>
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
        description="
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni 
          assumenda cupiditate, fugit nemo quos suscipit expedita ipsa delectus 
          optio, atque, nisi molestias nam doloribus enim dicta tenetur 
          reiciendis est esse?  ">
            <img src="/images/main/aedan.jpg" style="width: 100%"></img>
      </InfoCard>
      <InfoCard 
        :flipped="true" 
        heading="ABOUT ME"
        description="
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni 
          assumenda cupiditate, fugit nemo quos suscipit expedita ipsa delectus 
          optio, atque, nisi molestias nam doloribus enim dicta tenetur 
          reiciendis est esse?  ">
            <h1>Hello world!</h1>
      </InfoCard>
    </div>
</template>