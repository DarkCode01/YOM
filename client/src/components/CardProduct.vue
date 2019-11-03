<template>
  <v-card class="mx-auto" max-width="300" @click="tapped()">
    <v-img height="150px" :src="product.imgURL"></v-img>

    <v-card-title class="text-uppercase">{{product.nomArt}}</v-card-title>

    <v-card-subtitle class="pb-0">
      <v-chip
        class="ma-2"
        x-small
        color="primary"
        v-for="category in categorys"
        :key="category"
      >{{category}}</v-chip>
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{product.descripcion | cutText}}</div>
      <p class="pt-3 product-price font-weight-bold">{{product.precio | prefixMoney}}</p>
    </v-card-text>

  </v-card>
</template>

<script>
const Product = {
  nomArt: "Casa de campo",
  descripcion:
    "description product Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  imgURL: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
  precio: 130000,
  fecSub: "27/10/2019",
  lugVen: "Santo Domingo",
  cnd: "Usado",
  ctg: "casa, alquiler, hospedaje",
  scn: "Imobiliario"
};

export default {
  name: "CardProduct",
  props: {
    product: {
      type: Object,
      default() {
        return { ...Product };
      }
    }
  },
  methods: {
    tapped() {
      console.log("Hola")
    }
  },
  computed: {
    categorys() {
      return this.product.ctg.split(",").map(category => category.trim());
    }
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