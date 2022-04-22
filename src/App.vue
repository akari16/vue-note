<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/slots">Slots</router-link>
      <router-link to="/computedWatch">computedWatch</router-link>
      <router-link to="/deepClone">深浅拷贝</router-link>
      <router-link to="/defineProperty">
        Object.defineProperty&&Proxy
      </router-link>
      <router-link to="/numbers">Number</router-link>
      <router-link to="/mathFun">mathFun</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  text-align: left;
  padding: 30px;

  a {
    padding: 0 10px;
    border-right: 1px solid #2c3e50;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
* {
  text-align: left;
}
</style>
