<template>
<h1> Product</h1>
  <ul>
    <li v-for="product of $store.state.products" :key="product.id">
      <router-link :to="`/${product.id}`">{{product.title}} | {{product.price}}</router-link>
    </li>
  </ul>

</template>

<script>
export default {
  name: "Products",
  created() {
    this.$store.dispatch('getProducts')
  }
}
</script>

<style scoped>

</style>
