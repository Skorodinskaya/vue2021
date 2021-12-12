<template>
  <h1>Product Details</h1>
  <div>
    <ul v-if="selectedProduct">
      <li>Title: {{selectedProduct.title}}</li>
      <li>Price is: {{selectedProduct.price}}</li>
      <li>Description: {{selectedProduct.description}}</li>
      <li><img :src="selectedProduct.image" alt="image"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  created() {
    const {id} = this.$route.params
    this.$store.commit('clearSelectedProduct')
    this.$store.dispatch('getProductById', id)
  },
  computed: {
    selectedProduct(){
      return this.$store.state.selectedProduct
    }
  }
}
</script>

<style scoped>
img {
  max-width: 200px;
}

</style>
