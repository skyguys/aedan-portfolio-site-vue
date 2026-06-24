<script setup lang="ts">
import Navbar from '~/components/Navbar.vue';
import Header from '~/components/Header.vue';
import ProjectPill from '~/components/ProjectPill.vue';
import ResumeCard from '~/components/ResumeCard.vue';
import ProjectHeader from '~/components/ProjectHeader.vue';

const header = ref('Resume');
const description = ref(
  `Listed below is my work experience, projects, as well as a PDF copy of 
  my resume.`);
const navbarHeaderHue = ref(90);

const { data: projects } = await useAsyncData('projects', () =>
  queryCollection('projects').all()
)
console.log(projects.value);

const { data: work } = await useAsyncData('work', () =>
  queryCollection('work').all()
)
console.log(work.value);

const workSliced = work.value?.slice(0, 2);
const educationSliced = work.value?.slice(2)
console.log(workSliced);


</script>

<template>
  <div>
    <Navbar 
      :navbar_hue="navbarHeaderHue">
    </Navbar>
    <ProjectHeader 
      :project_title='header' 
      :project_title_additional_info='description'
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
      <h2>Tools</h2>
    </div>
  </div>
</template>

<style scoped>

.main-content{
  margin: 3% 15%;
}

</style>
