
<script setup>

const props = defineProps({
  class_name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true
  }
})

console.log(props.class_name);

const classNameAlt = props.class_name + " colored";

</script>

<template>
  <div class="icon-container">
    <div class="icon">
      <em :class='[
          props.class_name,
          "default-icon"
        ]'
      ></em>
      <em :class='[
          classNameAlt,
          "alt-icon"
        ]'></em>

    </div>
    <span>{{ title }}</span>
  </div>
  
</template>

<style lang="scss" scoped>

.icon {
  display: grid;

  > em {
    grid-row: 1;
    grid-column: 1;
  }

  .default-icon {
    transition: 0.25s;
    // display: show;
    opacity: 1;
  }

  .alt-icon {
    transition: 0.25s;
    // display: none;
    opacity: 0;
  }
}

.icon-container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 1%;

  transition: 0.25s;

  &:hover{
    // scale: 1.1;
    transform: translate(0px, -10px);

    background-color: rgba(0, 0, 0, 0.18);

    .default-icon {
      opacity: 0;
    }

    .alt-icon {
      opacity: 1;
    }
  }
}

em {
  font-size: 4rem;
}

span {
  text-align: center;
}

</style>