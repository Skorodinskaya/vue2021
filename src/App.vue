<template>

  <form @submit.prevent="onSubmit">
    <input type="text" v-model="inputValue">
    <input type="checkbox" v-model="isVisible">
    <button>submit</button>
  </form>

  <h1>{{ inputValue }}</h1>
  <button @click="currentPage = currentPage - 1">prev page</button>
  <button>current page{{ currentPage }}</button>
  <button @click="currentPage = currentPage + 1">next page</button>
  <br>

  <button @click="isVisible = !isVisible">toggle list visibility</button>


  <Test v-if="isVisible" :items="filteredItems" @removeItem="removeItemFromList"/>
  <h1 v-else-if="!isVisible && counter === 0">Some strange condition</h1>
  <h1 v-else>List is hidden</h1>


  <img alt="Vue logo" src="./assets/logo.png">
  <h1 v-show="isVisible">{{ user.name }}</h1>
  <div :class="{test: counter % 2 !== 0}">counter value: {{ counter }}
  </div>
  <button @click="incCounter($event, 123321)">inc</button>

  <router-view></router-view>
</template>

<script>
import Test from './components/Test'

export default {
  name: 'App',
  async created() {
    this.getTodos();
    console.log('test created')

  },

  mounted() {
    console.log('test mounted')

  },

  // updated() {
  //   this.getTodos()
  // },
  watch: {
    currentPage() {
      this.getTodos()
    },
    inputValue() {
      console.log(typeof this.inputValue)
    }
  },
  data() {
    return {
      inputValue: '',
      pageSize: 10,
      currentPage: 1,
      isVisible: true,
      items: [],
      counter: 0,
      username: 'Anastasiia',
      user: {
        name: 'Grande'
      }
    }
  },
  methods: {
    filteredItemsMethod() {
    return this.items.filter((el, i) => i % 2 === 0);
    },

    onSubmit() {
      console.log(this.inputValue, this.isVisible)
    },

    removeItemFromList(id) {
      this.items = this.items.filter(item => item.id !== id)
    },

    incCounter() {
      this.counter++

      this.user.name += '!'
    },
    decCounter() {
      this.counter--
    },

    async getTodos() {
      const limit = this.currentPage * this.pageSize
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}}`);
      this.items = await response.json();
    }
  },

  components: {
    Test
  },

  computed: {
    filteredItems() {
      return this.items.filter((el, i) => i % 2 === 0)
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
  margin-top: 60px;
}

.test {
  background: aquamarine;
}
</style>
