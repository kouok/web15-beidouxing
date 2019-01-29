<template>
  <div id="app">
    <headtop/>
    <scrollimg/>
    <contentbox />
  </div>
</template>

<script>
import headtop from './components/headtop'
import scrollimg from './components/scroll'
import contentbox from './components/content'

export default {
  name: 'App',
  components: {
    headtop,
    scrollimg,
    contentbox
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
  
}
</style>
