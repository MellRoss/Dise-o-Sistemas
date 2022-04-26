<template>
  <v-card
      class="px-8 py-4 ma-0"
  >
    <v-card-title class="px-0 grey--text text--darken-2">{{ title }}</v-card-title>
    <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
    <div>
      <slot></slot>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    subtitle: String,
  }
}
</script>

<style scoped>

</style>
