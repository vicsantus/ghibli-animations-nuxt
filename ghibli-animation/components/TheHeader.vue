<template>
  <header>
    <nav>
      <NuxtLink to="/">
        <img src="~/assets/images/Ghibli.svg" alt="ghibli-svg" />
      </NuxtLink>
      <NuxtLink data-testid="fav-testid" to="/favorites">
        <img src="~/assets/images/Vector.svg" alt="vector-svg" />
        Favorites
      </NuxtLink>
    </nav>
  </header>
</template>

<script>
  export default {
  name: 'NuxtHeader',
}
</script>

<style>
  header {
    height: 150px;
    background: #007DF9;
    margin-bottom: 30px;
    padding: 15px;
  }

  header nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  header nav a {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 27px;
    line-height: 33px;
    text-decoration: none;
    color: #000000;
  }

  header nav a:last-of-type {
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
  }
</style>