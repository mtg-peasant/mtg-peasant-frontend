<template>
  <div id="app">
    <div id="nav">
      <span>Mtg-Peasant</span> |
      <router-link to="/">Home</router-link> |
      <router-link to="/tournament">Tournament</router-link> |
      <router-link to="/rule">Rule</router-link> |
      <router-link to="/valideck">Valideck</router-link> |
      <router-link to="/forum">Forum</router-link> |
      <router-link to="/search">Search</router-link> |
      Signup / Login
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
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
