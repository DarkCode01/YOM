<template>
  <div>
    
    <v-carousel>
      <v-carousel-item
        v-for="(image ,i) in o.images"
        :key="i"
        :src="'http://localhost:1234/' + o.images[0 + i]"
        reverse-transition="fade-transition"
        transition="fade-transition" 
        aspect-ratio="1.7"
        contain
      ></v-carousel-item>
    </v-carousel>

      <v-toolbar flat>
        <h1>{{o.nomArt}}</h1>
        <v-spacer></v-spacer>
        <h1>{{o.precio | prefixMoney }}</h1>
      </v-toolbar>

      <div>
        {{o.descripcion}}
      </div>

  </div>
</template>

<script>

export default {
  props: {
    id: {
      type: String,
      default: "enlace"
    },
    o: {
      type: Object,
      default: {
        message: 'Hola'
      }
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
}
</script>
