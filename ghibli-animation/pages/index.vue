<template>
  <div class="container">
    <TheHeader />
    <RenderFilms :favpage="false"/>
  </div>
</template>

<script>
import RenderFilms from '@/components/RenderFilms.vue';
import TheHeader from '@/components/TheHeader.vue';

export default {
  name: 'IndexPage',

  components: {
    TheHeader,
    RenderFilms,
  },
};
</script>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Single+Day&display=swap') ;

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding-bottom: 150px;
  }
</style>