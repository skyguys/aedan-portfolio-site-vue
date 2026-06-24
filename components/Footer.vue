
<script setup>

const props = defineProps({
  footer_color: {
    type: Number,
    required: true,    
  }
})

const currentDate = new Date(); // Current date and time
const currentYear = currentDate.getFullYear();

</script>

<template>
  <div class="footer-container">
    <span>
      This site was made with Vue, Nuxt, and Bootstrap. © {{ currentYear }} 
      Aedan Magsombol.
    </span>
  </div>
</template>

<style>

.footer-container{
  height: 10vh;
  padding: 2%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  text-align: center;
  background: linear-gradient(hsla(v-bind('footer_color'), 10%, 40%, 0.9), 
                              hsla(v-bind('footer_color'), 10%, 20%, 0.9) )
}


</style>