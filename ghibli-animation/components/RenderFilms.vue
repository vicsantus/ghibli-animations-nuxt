<template>
  <main>
    <div >
      <section v-for="film of filteredFilms" :key="film.id" className="container">
        <img :src="film.image" :alt="film.title" />
        <div className="overlay">
          <h3>{{film.title}}</h3>
          <p>{{film.description}}</p>
          <button
            :data-testid="`button ${film.id}`"
            :name="film.id"
            type="button"
            @click="handleClick(film.id)"
          >
            {{film.fav ? 'Disfavor' : 'Favorite'}}
          </button>
        </div>
      </section>
    </div>
  </main>
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