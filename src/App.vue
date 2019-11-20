<template>
  <div id="app">
    <redrain></redrain>
  </div>
</template>

<script>
import redrain from './compontents/RedRain'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components:{redrain},
  methods:{
  },
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;

  padding: 0;
}

</style>
