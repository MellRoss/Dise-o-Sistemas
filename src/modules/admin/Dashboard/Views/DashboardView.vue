<template>
  <v-container fluid class="pa-0 pb-8 dashboard-bg fullHeight d-flex align-center" :style="`background-image: url(${require('@/assets/dashboardHome.jpg')})`">
    <v-container class="viewSpaces d-flex align-center dashboard-height">
      <v-row>
        <v-col sm="5">
          <h1 class="display-2 teal--text my-4 text-capitalize">
            BIENVENIDO!
          </h1>
          <h2 class="subtitle-1 font-weight-medium">
            Jose Martinez
          </h2>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
/*import { mapGetters } from 'vuex';*/

export default {
  name: 'DashboardView',
  /*computed: {
    ...mapGetters([
      'commons/getUserData',
    ]),
    user() {
      return this['commons/getUserData']
    }
  },*/
}
</script>

<style scoped lang="sass">
  .dashboard-bg
    background-color: unset !important
    background-size: contain
    background-repeat: no-repeat
    background-position: 75%
  .dashboard-height
    height: calc(100vh - 100px)
</style>
