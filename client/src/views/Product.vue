<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>

export default {
  props: {
    id: {
      type: String,
      default: "enlace"
    }
  },
}
</script>
