<template>
  <main>
    <div >
      <section v-for="film of filmes" :key="film.id" className="container">
        <img :src="film.image" :alt="film.title" />
        <div className="overlay">
          <h3>{{film.title}}</h3>
          <p>{{film.description}}</p>
          <button
            :data-testid="`button ${film.id}`"
            :name="film.id"
            type="button"
            @click="handleClick(film)"
          >
            {{film.fav ? 'Disfavor' : 'Favorite'}}
          </button>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    filmes: {
      type: Array,
      required: true,
    },
  },
  
  methods: {
    handleClick(film) {
      // Emitindo o evento para notificar o componente pai (index.vue) que o botão foi clicado
      this.$emit('favorite-toggled', film.id);
    },
  },
};
</script>