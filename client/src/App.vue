<template>
  <v-app id="keep">

    <navbar />

    <v-content>
      <v-container
        fluid
      >
        <router-view></router-view>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
  import navbar from '@/components/NavBar.vue';

  export default {
    components: {
      navbar
    },
    props: {
      source: String,
    }
  }
  
</script>

<style>
#keep .v-navigation-drawer__border {
  display: none
}
</style>