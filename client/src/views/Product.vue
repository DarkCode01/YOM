<template>
  <div>
    <h2>hey</h2>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
import store from "../store/index"

export default {
  computed: {
    message() {
      return store.state.message; 
    }
  },
}
</script>
