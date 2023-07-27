<template>
  <div >
    <!-- Verifica se há filmes filtrados para mostrar -->
    <template v-if="filteredFilms.length >= 1">
      <!-- Itera sobre a lista de filmes filtrados -->
      <section v-for="film of filteredFilms" :key="film.id" class="container">
        <img :src="film.image" :alt="film.title" />
        <div class="overlay">
          <h3>{{film.title}}</h3>
          <p>{{film.description}}</p>
          <button
            :data-testid="`button ${film.id}`"
            type="button"
            @click="handleClick(film.id)"
          >
            {{film.fav ? 'Disfavor' : 'Favorite'}}
          </button>
        </div>
      </section>
    </template>
    <!-- Caso não haja filmes filtrados, exibe uma mensagem -->
    <template v-else>
      <h2>No films to show...</h2>
    </template>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  props: {
    favpage: {
      type: Boolean,
      required: true,
    },
  },

  computed: {
    ...mapState(['filmes']),
    filteredFilms() {
      // Filtrar os filmes com base no valor da prop favpage
      return this.favpage ? this.filmes.filter((film) => film.fav) : this.filmes;
    },
  },

  async created() {
    // Buscar os filmes apenas uma vez ao entrar na rota "home"
    await this.fetchFilmes();
  },

  methods: {
    ...mapActions(['fetchFilmes', 'toggleFavorite']),
    async handleClick(id) {
      // Chamar a mutation para atualizar o estado global
      await this.toggleFavorite(id);
    },
  },
};
</script>

<style>
.container {
  position: relative;
  perspective: 1000px;
  display: inline-block;
}

.container img {
  height: 400px;
  width: 300px;
  transition: transform 0.5s;
}

.container:hover img {
  transform: rotateY(180deg);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotateY(-180deg);
  backface-visibility: hidden;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 20px;
  box-sizing: border-box;
  transition: transform 0.5s;
}

.container:hover .overlay {
  transform: rotateY(0deg);
  backface-visibility: visible;
}

</style>