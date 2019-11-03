<template>
  <div class="home float-left">
    <CardProduct @click="tapped()"/>
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
