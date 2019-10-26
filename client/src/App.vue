<template>
  <v-app id="keep">
    <v-app-bar
      app
      clipped-left
      color="red darken-4"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-text-field
        solo-inverted
        flat
        hide-details
        label="Search"
        prepend-inner-icon="search"
      ></v-text-field>
      <v-spacer></v-spacer>
      <span class="title ml-3 mr-5">YOM</span>
      <div class="my-2">
        <router-link to="/">
          <v-btn small text>Sign in</v-btn>
        </router-link>
        <router-link to="/login">
          <v-btn small text>Log in</v-btn>
        </router-link>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      color="grey lighten-4"
    >
      <v-list
        dense
        class="grey lighten-4"
      >
        <template>
          <div>
            <router-link to="/">Go to Home</router-link>
            <router-link to="/about">Go to About</router-link>
          </div>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container
        fluid
        class="grey lighten-4 fill-height"
      >
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null
    }),
  }
</script>

<style>
#keep .v-navigation-drawer__border {
  display: none
}
</style>