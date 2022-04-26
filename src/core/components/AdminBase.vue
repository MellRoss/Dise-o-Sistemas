<template>
  <v-app>
    <v-navigation-drawer
        app
        permanent
        expand-on-hover
        :mini-variant.sync="mini"
        color="primary"
        dark
    >
      <v-list-item @click="goBack">
        <v-list-item-icon>
          <v-icon>{{ activeSubModules ? 'mdi-chevron-left' : 'mdi-menu' }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ activeSubModules ? 'Volver' : 'Menú principal' }}</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list
          v-if="!activeSubModules"
          nav
          dense
          rounded
      >
        <v-list-item @click="redirect(module.to)" v-for="(module, index) in activeModules" :key="index">
          <v-list-item-icon>
            <v-icon>{{ module.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ module.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list
          v-else
          nav
          dense
          rounded
      >
        <v-list-item @click="redirect(subModule.to)" v-for="(subModule, index) in activeSubModules" :key="index">
          <v-list-item-icon>
            <v-icon>{{ subModule.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ subModule.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
        app
        flat
        height="57"
        class="app-bar-border"
    >
      <v-img
          max-width="40"
          :src="require('@/assets/Domus.png')"
          @click="redirect('/')"
          class="header-pointer"
      >
      </v-img>
      <span
          class="display-1 font-weight-thin ml-2 teal--text header-pointer"
          @click="redirect('/')"
      >
        Domus
      </span>
      <v-spacer></v-spacer>
      <v-avatar
        @click="logout"
      >
        <v-icon
            large
        >
          mdi-account-circle
        </v-icon>
      </v-avatar>
    </v-app-bar>
    <v-main>
        <router-view></router-view>
    </v-main>
    <Popup></Popup>
  </v-app>
</template>

<script>
import Popup from '@/components/Popup';

export default {
  name: 'AdminBase',
  components: {
    Popup
  },
  data() {
    return {
      mini: true,
      activeModules: [
        {
          to: '/users',
          icon: 'mdi-account',
          title: 'Usuarios'
        },
        {
          to: '/properties',
          icon: 'mdi-office-building',
          title: 'Propiedades'
        },
        {
          to: '/appointments',
          icon: 'mdi-calendar-cursor',
          title: 'Citas'
        },
        {
          to: [
            {
              to: '/payment/closing',
              icon: 'mdi-cash-register',
              title: 'Cierre de caja'
            },
            {
              to: '/payment/paying',
              icon: 'mdi-cash-plus',
              title: 'Registrar pago'
            },
            {
              to: '/payment/stocktaking',
              icon: 'mdi-cash-multiple',
              title: 'Registrar entrada/salida'
            },
          ],
          icon: 'mdi-cash-usd-outline',
          title: 'Pagos'
        },
        {
          to : [
            {
              to:'/reports/sales',
              icon: 'mdi-home-group',
              title: 'Ventas'
            },
            {
              to:'/reports/rentals',
              icon: 'mdi-office-building',
              title: 'Alquileres'
            },
            {
              to:'/reports/customers',
              icon: 'mdi-briefcase-account ',
              title: 'Clientes'
            },
            {
              to:'/reports/properties',
              icon: 'mdi-home-city',
              title: 'Propiedades'
            },
          ],
          icon: 'mdi-chart-areaspline-variant',
          title: 'Reportes'
        }
      ],
      activeSubModules: null
    }
  },
  methods: {
    goBack() {
      this.activeSubModules = null
    },
    redirect(to) {
      if( typeof to === 'string') {
        if (this.$route.path != to) {
          this.$router.push(to);
        }
      } else {
        this.activeSubModules = to
      }
    },
    logout() {
      this.$store.dispatch('commons/logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="sass">
  .header-pointer
    cursor: pointer
    > .v-app-bar-title__content
      text-overflow: unset !important
</style>
