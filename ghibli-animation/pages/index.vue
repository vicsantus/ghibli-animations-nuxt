<template>
  <div class="container">
    <TheHeader />
    <main>
        <h1>Films</h1>
        <div >
          <section v-for="film of films" :key="film.id" className="container">
            <img :src="film.image" :alt="film.title" />
            <div className="overlay">
              <h3>{film.title}</h3>
              <p>{film.description}</p>
              <button
                :data-testid="`button ${film.id}`"
                onClick="handleClick"
                :name="film.id"
                type="button"
              >
                {film.fav ? 'Disfavor' : 'Favorite'}
              </button>
            </div>
          </section>
        </div>
      </main>
  </div>
</template>

<script>
  export default {
    name: 'IndexPage',
    data() {
      return {
        films: []
      }
    },
    async fetch() {
      this.films = await fetch(
        'http://localhost:3001/'
      ).then(res => res.json())
    }
  }
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