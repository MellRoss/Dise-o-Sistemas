<template>
  <v-row class="mb-2">
    <v-col class="d-flex align-center">
      <div @click="goBack" class="mr-4 cursor-pointer">
        <v-icon>mdi-arrow-left</v-icon>
      </div>
      <div class="d-flex flex-column">
        <v-breadcrumbs class="pa-0" :items="breadcrumbsList"></v-breadcrumbs>
        <span class="text-h5 headline">
          {{ title }}
        </span>
        <span class="text-caption">
          {{ subtitle }}
        </span>
      </div>
    </v-col>
    <v-col sm="4" class="d-flex justify-end align-center">
      <slot></slot>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  props: {
    title: String,
    subtitle: String
  },
  data() {
    return {
      breadcrumbsList: []
    }
  },
  watch: {
    '$route': function () {
      this.updateList()
    }
  },
  mounted() {
    this.updateList()
  },
  methods: {
    goBack () {
      if (this.$route.matched.length > 2) {
        const currentRoute = this.$route.matched[this.$route.matched.length - 1];
        const previousRoute = this.$route.matched[this.$route.matched.length - 2];

        if (`${previousRoute.path}/` !== currentRoute.path) {
          this.$router.push(this.$route.matched[this.$route.matched.length - 2].path);
        } else {
          this.$router.push('/');
        }
      } else {
        this.$router.push('/');
      }
    },
    updateList() {
      const routeMatched = this.$route.matched
      let breadcrumbsTmp = [...routeMatched]

      breadcrumbsTmp = breadcrumbsTmp.map(item => ({
        text: item.meta.name === 'Base' ? 'Inicio' : item.meta.name,
        to: item.meta.name === 'Base'? '/' : item.path.replace(':id', this.$route.params.id)
      }))
      breadcrumbsTmp = breadcrumbsTmp.filter(item => item.text !== 'Index');

      this.breadcrumbsList = breadcrumbsTmp;
    }
  }
}
</script>

<style lang="sass" scoped>

  .cursor-pointer
    cursor: pointer

</style>
