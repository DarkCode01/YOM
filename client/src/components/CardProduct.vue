<template>
  <div class="d-md-flex d-inline">
    <v-card class="mx-auto my-3" max-width="250" v-for="product in products" :key="product._id">
      <router-link tag="button" :to="{name: 'product', params: { id: product._id } }">
        <v-img max-width="250px" :src="product.images[0] | imgUrl"></v-img>

        <v-card-title class="text-uppercase">{{product.nomArt}}</v-card-title>

        <v-card-subtitle class="pb-0">
          <v-chip class="ma-2" x-small color="primary">{{product.ctg}}</v-chip>
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
import { filterProductMixins } from "../mixins/filterProdut";

export default {
  name: "CardProduct",
  mixins: [filterProductMixins],
  async created() {
    await this.loadProducts();
  },
  methods: {
    ...mapActions(["getProductsAction"]),
    tapped() {
      console.log("Hola");
    },
    async loadProducts() {
      console.log("wait");
      await this.getProductsAction();
    }
  },
  computed: {
    ...mapState(["products"])
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