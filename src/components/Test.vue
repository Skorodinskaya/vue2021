<template>
<!--<h1>test component {{text}}</h1>-->
<!--  <button v-on:click="text">log</button>-->
  <h3 v-for="item of items" :key="item.id">
    {{item.text}} <button @click ="removeItem(item.id)">remove</button>
  </h3>
</template>

<script>
export default {
  name: "Test",
  props: {
    items:{
      type: Array,
      required: true
    }
  },
  methods: {
    logger(){
      console.log(this)
    },

    removeItem(id){
      this.$emit('removeItem', id)
    },
  },
  emits:['removeItem']
}
</script>

<style scoped>

</style>
