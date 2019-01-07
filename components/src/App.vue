<template>
  <div id="app">
    <vueComponents/>
  </div>
</template>

<script>
import vueComponents from './components/vueComponents'
export default {
  name: 'App',
  components: {
    vueComponents
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
