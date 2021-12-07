<template>
  <button @click="isVisible = !isVisible">toggle list visibility</button>
  <Test v-if="isVisible" :items="items" @removeItem="removeItemFromList"/>
  <h1 v-else-if="!isVisible && counter === 0">Some strange condition</h1>
  <h1 v-else>List is hidden</h1>



  <img alt="Vue logo" src="./assets/logo.png">
  <h1 v-show="isVisible">{{user.name}}</h1>
  <div>counter value: {{counter}}</div>
  <button @click="incCounter($event, 123321)">inc</button>
</template>

<script>
import Test from './components/Test'

export default {
  name: 'App',
  data() {
    return {
      isVisible: true,
      items:[{id: 1, text: 'text1'},{id: 2, text: 'text2'},{id: 3, text: 'text3'},],
      counter: 0,
      username: 'Anastasiia',
      user:{
        name: 'Grande'
      }
    }
  },
  methods: {
    removeItemFromList(id){
      this.items = this.items.filter(item => item.id !==id)
    },

    incCounter(event){
      console.log(event)
      console.log(this)
      this.counter++

      this.user.name += '!'
    },
    decCounter(){
      this.counter--
    }
  },

  components: {
    Test
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
  margin-top: 60px;
}
</style>
