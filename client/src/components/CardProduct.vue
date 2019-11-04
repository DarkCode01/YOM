<template>
  <div class="d-lg-flex d-inline">
    <v-card class="mx-auto my-3" max-width="300" v-for="product in products" :key="product._id">
      <router-link tag="button" :to="{name: 'product', params: {id: product._id} }">
        <v-img height="150px" :src="'localhost:1234/product/' + product.images[0]"></v-img>

        <v-card-title class="text-uppercase">{{product.nomArt}}</v-card-title>

        <v-card-subtitle class="pb-0">
          <v-chip
            class="ma-2"
            x-small
            color="primary"
          >{{product.ctg}}</v-chip>
        </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>{{product.descripcion | cutText}}</div>
          <p class="pt-3 product-price font-weight-bold">{{product.precio | prefixMoney}}</p>
        </v-card-text>

      </router-link>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "CardProduct",
  async created () {
    await this.loadProducts();
  },
  methods: {
    ...mapActions(['getProductsAction']),
    tapped() {
      console.log("Hola")
    },
    async loadProducts() {
      console.log('wait');
      await this.getProductsAction()
    }
  },
  computed: {
    ...mapState(['products'])
 
  },
  filters: {
    cutText(value) {
      return `${value.slice(0, 50)}...`;
    },
    prefixMoney(value) {
      return `RD$ ${value.toLocaleString()}`;
    }
  }
};
</script>

<style scoped>
.product-price {
  font-size: 1.5em;
}
.product-link {
  text-decoration: none;
}
</style>