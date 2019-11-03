<template>
    <nav>
        <v-app-bar
      app
      clipped-left
      dark
      color="blue darken-4"
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
      <div>
        <router-link to="/">
          <v-btn flat text>
            <span class="title ml-3 mr-5">YOM</span>
          </v-btn>
        </router-link>
      </div>
      <div class="my-2 hidden-md-and-down">
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
      dark
      color="blue darken-4"
    >
      <v-list
        dense
        class="blue darken-4"
      >
      <v-list-item>
            <div class="headline font-weight-black text-center hidden-md-and-up">
                <h1>You own Market</h1>
            </div>
        </v-list-item>
        <v-list-item>
            <v-list-item-title>
                <router-link to="/">
                    <v-btn large text flat x-large>
                        <span>Home</span>
                        <v-icon class="float-right">mdi-home-circle</v-icon></v-btn>
                </router-link>
            </v-list-item-title>
        </v-list-item>
        <v-list-item>
            <v-list-item-title>
                <router-link to="/About">
                    <v-btn large text flat x-large>About</v-btn>
                </router-link>
            </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    </nav>
</template>

<script> 

    export default {
    name: "navbar",
    props: {
      source: String,
    },
    data: () => ({
      drawer: false
    }),
  }
</script>

<style scoped>

</style>