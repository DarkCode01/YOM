<template>
  <div class="home">
    <h1>Hello from Home</h1>
    <CardProduct />
  </div>
</template>

<script>
import CardProduct from "@/components/CardProduct.vue";
export default {
  name: "home",
  components: {
    CardProduct
  }
};
</script>
