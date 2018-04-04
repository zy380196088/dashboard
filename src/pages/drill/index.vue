/* eslint-disable */ 
<template>
  <div id="app">
    <router-view keep-alive transition transition-mode="out-in"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'drill',
  }

</script>

<style>
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(242, 242, 242, 1);
  }

  #app {
    width: 100%;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

</style>
