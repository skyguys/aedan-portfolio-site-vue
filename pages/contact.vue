<script setup lang="ts">
import Navbar from '~/components/Navbar.vue';
import ProjectHeader from '~/components/ProjectHeader.vue';
import SocialMediaBox from '~/components/SocialMediaBox.vue';

const header = ref('Contact Information');
const description = ref(
  `Need to reach me about something? You can contact me
  on any of my social media or the contact form below.`);
const navbarHeaderHue = ref(40);

const { data: contact } = await useAsyncData(`contact`, () =>
  queryCollection('contact').all()
)

onMounted(() => {
  const web3FormsScript = document.createElement('script');
  web3FormsScript.src = 'https://web3forms.com/client/script.js';
  web3FormsScript.async = true;
  web3FormsScript.defer = true;
  document.body.appendChild(web3FormsScript);
})

</script>

<template>
  <div>
    <Navbar 
      :navbar_hue="navbarHeaderHue">
    </Navbar>
    <ProjectHeader 
      :project_title='header'
      :description='description'
      :header_color="navbarHeaderHue">
    </ProjectHeader>    
    <div class="main-content">
      <h2>Social Media Contact</h2>
      <div class="row">
        <div 
          v-if="contact"
          v-for="social in contact"
          class="col-12 col-md-6"
        >
          <SocialMediaBox
            :image="social.icon"
            :text="social.title"
            :link="social.link"
          ></SocialMediaBox>
        </div>  

        <!-- <div class="col-12 col-md-6">
          <SocialMediaBox
            image="/svg/linkedin.svg"
            text="Linkedin"
            link="https://www.linkedin.com/in/aedan-magsombol-a75a5433a/"
          ></SocialMediaBox>
        </div>
        <div class="col-12 col-md-6">
          <SocialMediaBox
            image="/svg/github.svg"
            text="GitHub"
            link="https://github.com/skyguys"
          ></SocialMediaBox>
        </div> -->
      </div>
      <hr>
      <h3>You can also send me a form, which goes directly to my email.</h3>
      <form class="form-content" action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="17859a2c-f534-417f-b0ab-00b553e1205f">
        <div class="row">
          <div class="col-12 col-md-6">
            <label for="nameInput">Name</label>
            <input id="nameInput" class="form-input" type="text" name="name" required>
          </div>
          <div class="col-12 col-md-6">
            <label for="emailInput">Email</label>
            <input id="emailInput" class="form-input" type="email" name="email" required>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="messageInput">Message</label>
            <textarea id="messageInput" class="form-input" name="message" required></textarea>
          </div>
        </div>
        <hr>
        <div class="h-captcha" data-captcha="true"></div>
        <button type="submit">Submit</button>
      </form>
    </div>
    <Footer
      :footer_color="navbarHeaderHue"
    ></Footer>
  </div>
</template>

<style scoped>

.main-content{
  margin: 3% 20%;
}

#nameInput, #emailInput, #messageInput{
  width: 100%;
}

</style>