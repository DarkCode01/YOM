<template>
  <div>
    <div v-for="pr in product" :key="pr._id">
      <v-carousel>
        <v-carousel-item
          v-for="(image ,i) in pr.images"
          :key="i"
          :src="pr.images[0 + i] | imgUrl"
          reverse-transition="fade-transition"
          transition="fade-transition"
          aspect-ratio="1.7"
          contain
        ></v-carousel-item>
      </v-carousel>
      <v-toolbar flat>
        <h1>{{pr.nomArt}}</h1>
        <v-spacer></v-spacer>
        <h1>{{pr.precio | prefixMoney}}</h1>
      </v-toolbar>

      <div>{{pr.descripcion}}</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { filterProductMixins } from "../mixins/filterProdut";

export default {
  mixins: [filterProductMixins],
  props: {
    id: {
      type: String,
      default: "enlace"
    }
  },
  async created() {
    await this.loadProduct();
  },
  methods: {
    ...mapActions(["getProductByIdAction"]),
    async loadProduct() {
      const self = this;
      await this.getProductByIdAction(self.id);
    }
  },
  computed: {
    ...mapState(["product"])
  }
};
</script>
