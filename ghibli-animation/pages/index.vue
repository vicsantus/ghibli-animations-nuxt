<template>
  <div class="container">
    <TheHeader />
    <RenderFilms :filmes="filmes" @favorite-toggled="handleFavoriteToggled" />
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import RenderFilms from '@/components/RenderFilms.vue';
import TheHeader from '@/components/TheHeader.vue';

export default {
  name: 'IndexPage',

  components: {
    TheHeader,
    RenderFilms,
  },

  async asyncData({ ssrContext }) {
    let filmes = [];
    if (process.server && !ssrContext) {
      // Estamos no servidor durante a geração estática
      filmes = await fetch('http://localhost:3001/').then((response) => response.json());
    }
    return {
      filmes,
    };
  },
  
  data() {
    return {
      filmes: [],
    };
  },
  
  computed: {
    ...mapState({
      filmes,
    }),
  },
  
  mounted() {
    // Executar o fetch no cliente (navegação no navegador)
    if (!this.filmes.length) {
      this.fetchData();
    }
  },

  methods: {
    async fetchData() {
      const filmes = await fetch('http://localhost:3001/').then((response) => response.json());
      this.filmes = filmes;
    },

    ...mapMutations({
      changeFilms: this.filmes,
    }),

    handleFavoriteToggled(id) {
      // Atualize a lista de filmes no estado local
      this.filmes = this.filmes.map((film) => (film.id === id ? { ...film, fav: !film.fav } : film));
    },
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