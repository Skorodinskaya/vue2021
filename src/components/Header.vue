<template>
  <header>
    <div>
      <span>Welcome to the shop!</span>
      <router-link class="link" to="/">Products</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
header {
  background: #54a4b9;
  color: white;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
}

.link {
  margin-left: 14px;
  color: #f7ceff;
  text-decoration: underline;
}
</style>
