<template>
  <div>
    <TheHeader />
    <main class="main-render-films">
      <h1>Films</h1>
      <RenderFilms :favpage="false"/>
    </main>
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

.main-render-films {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
}

.main-render-films div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  gap: 2em;
}

.main-render-films h1 {
  font-family: 'Single Day', 'Oxygen', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 45px;
  line-height: 56px;
  color: #000000;
  text-shadow: 0px 4px 4px rgba(255, 255, 0, 0.75);
}

.main-render-films div section {
  padding: 9px;
  box-shadow: 1px 1px 1px 1px #007DF9 ;
}

.main-render-films div section p {
  font-family: 'Single Day', 'Oxygen', sans-serif;
  font-weight: 400;
  font-size: 20px;
  height: 160px;
  width: 300px;
  line-height: 0.9;
  text-overflow: ellipsis;
  white-space: break-spaces;
  overflow: scroll;
}

.main-render-films div section img {
  height: 400px;
  width: 300px;
}

.main-render-films div section h3 {
  font-family: 'Single Day', 'Oxygen', sans-serif;
  font-weight: 400;
  font-size: 30px;
  overflow: scroll;
  text-overflow: clip;
  width: auto;
}

.main-render-films div section button {
  font-family: 'Single Day', 'Oxygen', sans-serif;
  font-weight: 400;
  font-size: 20px;
  border: none;
  width: 73px;
  border-radius: 3px;
}
</style>