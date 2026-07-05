<script setup lang="ts">
import Navbar from '~/components/Navbar.vue';
import ProjectPill from '~/components/ProjectPill.vue';
import ResumeCard from '~/components/ResumeCard.vue';
import ProjectHeader from '~/components/ProjectHeader.vue';
import TechnologyCard from '~/components/TechnologyCard.vue';
import Footer from '~/components/Footer.vue';

const header = ref('Resume');
const description = ref(
  `Listed below is my work experience, projects, as well as a PDF copy of 
  my resume.`);
const navbarHeaderHue = ref(90);

const { data: projects } = await useAsyncData('projects', () =>
  queryCollection('projects').all()
)

const { data: work } = await useAsyncData('work', () =>
  queryCollection('work').all()
)

const { data: technologies } = await useAsyncData('technologies', () =>
  queryCollection('technologies').all()
)

const workSliced = work.value?.slice(0, 2);
const educationSliced = work.value?.slice(2)


</script>

<template>
  <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
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
      <h2>Projects</h2>
      <p>Take a look at a few of my projects below!</p>
      <div class="row" style="margin: 2%">
        <ProjectPill
          v-for="project in projects"
          :title="project.title";
          :revealed_text="project.title_additional_info"
          :image="project.image_path + project.images[0]"
          :link="project.path"
          class="col-12 col-md-6 col-xxl-4"
        >
        </ProjectPill>
      </div>
      <hr />
      <h2>Work Experience</h2>
        <ResumeCard 
          v-for="w in workSliced"
          :title="w.title"
          :bulletpoints="w.bulletpoints"
          :primary_info="w.primary_info"
          :secondary_info="w.secondary_info"
          :tertiary_info="w.tertiary_info"
        >
        </ResumeCard>
      <hr />
      <h2>Education</h2>
        <ResumeCard 
          v-for="e in educationSliced"
          :title="e.title"
          :bulletpoints="e.bulletpoints"
          :primary_info="e.primary_info"
          :secondary_info="e.secondary_info"
          :tertiary_info="e.tertiary_info"
        >
        </ResumeCard>
      <hr />
      <h2>Tools</h2>
      <div class="row">
        <TechnologyCard
          v-for="technology in technologies"
          :class_name="technology.class_name"
          :title="technology.title"
          class="col-4 col-md-2"
        >
        </TechnologyCard>
      </div>
      <hr />
      <h2>PDF Copy of Resume</h2>
      <iframe src="https://drive.google.com/file/d/1oclOLG4M4khkQ_XZwZbMS0T_Gmjc6Dh3/preview"></iframe>
    </div>
    <Footer :footer_color="navbarHeaderHue"></Footer>
  </div>
</template>

<style scoped>

.main-content{
  margin: 3% 15%;
}

iframe {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 75vh;
}

</style>
