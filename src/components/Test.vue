<template>
  <h3 v-for="item of items" :key="item.id">
    {{ item.title }}
    <button class="test" @click="removeItem(item.id)">remove</button>
  </h3>
</template>

<script>
export default {
  name: "Test",
  unmounted() {
    console.log('test unmounted')
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    logger() {
      console.log(this)
    },

    removeItem(id) {
      this.$emit('removeItem', id)
    },
  },
  emits: ['removeItem']
}
</script>

<style scoped>
.test {
  background: blueviolet;
}

</style>
