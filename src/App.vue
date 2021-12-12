<template>
  <!--  <h1>Current count value: {{$store.state.count}}</h1>-->
  <!--  <h1>Current multiplied count value: {{$store.getters.multipliedCounter}}</h1>-->

  <!--  <button @click="incCounter">inc</button>-->
  <Header></Header>
  <router-view></router-view>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: 'App',
  components: {
    Header
  },
  created() {
    console.log(this.$store.state.count)
  },
  methods: {
    incCounter() {
      this.$store.dispatch('increment', 123)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}
</style>
