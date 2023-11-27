<template>
  <nav>
    <router-link to="/">Головна</router-link> |
    <router-link to="/employees">Працівники</router-link> |
    <router-link to="/applicants">Кандидати</router-link> |
    <router-link to="/appointments">Співбесіди</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 30px;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
