<template>
  <header>
    <div>
      <span>Welcome to our shop!</span>
      <router-link class="link" to="/">Products</router-link>
    </div>

    <div :title="cartTotalPrice">Cart items count : {{cart.length}}</div>

  </header>
</template>

<script>
export default {
  name: "Header",
  computed: {
    cart() {
      return this.$store.state.cartItems
    },
    cartTotalPrice(){
      return '$' + this.cart.reduce((acc, el) => (acc += el.price), 0)
    }
  }

}
</script>

<style scoped>
header {
  background: cadetblue;
  color: white;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
}

.link {
  margin-left: 14px;
  color: white;
}

</style>
