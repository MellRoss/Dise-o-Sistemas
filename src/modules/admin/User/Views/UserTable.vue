<template>
  <v-row class="ma-0">
    <Filters
        class="col-2"
        :items="filters"
    ></Filters>
    <v-col cols="10" class="py-6 px-12">
      <Breadcrumbs
        title="Usuarios del sistema"
      >
        <Button
          text="Nuevo usuario"
          @click="$router.push('/users/create')"
        ></Button>
      </Breadcrumbs>


      <Table
          :headers="headers"
          :items="items"
          with-details
          @detailsAction="showDetails"
          with-edition
          @editAction="updateItem"
          with-deletion
          @deleteAction="deletePopup"
          outlined
      ></Table>
    </v-col>
  </v-row>

</template>

<script>
import Table from '@/components/Table';
import Filters from '@/components/Filters';
import Button from '@/components/Button';
import Breadcrumbs from '@/components/Breadcrumbs';
export default {
name: 'UserTable',
components: {
  Table,
  Button,
  Filters,
  Breadcrumbs,
},
data() {
  return {
    headers: [
      {text: 'Usuario', value: 'Usuario'},
      {text: 'Apellido', value: 'Apellido'},
      {text: 'Nombre', value: 'Nombre'},
      {text: 'Rol', value: 'Rol'},
      {text: '', value: 'actions', sortable: false, class: 'text-subtitle-2'},
    ],
    items: [
      {
        Usuario: 'Lopez035',
        Apellido: 'Lopez',
        Nombre: 'Sergio',
        Rol: 'Gerente',
      },
      {
        Usuario: 'Acosta254',
        Apellido: 'Acosta',
        Nombre: 'Lucia',
        Rol: 'Gerente',
      },
      {
        Usuario: 'Gomez345',
        Apellido: 'Gomez',
        Nombre: 'Raul',
        Rol: 'Director',
      },
      {
        Usuario: 'Lopez987',
        Apellido: 'Lopez',
        Nombre: 'Marcos',
        Rol: 'Tecnico',
      },
      {
        Usuario: 'Lopez135',
        Apellido: 'Lopez',
        Nombre: 'Carla',
        Rol: 'Administrativo',
      },
      {
        Usuario: 'Velez',
        Apellido: 'Velez',
        Nombre: 'Tamara',
        Rol: 'Ventas',
      },

    ],


    filters: [{
          name: 'Rol',
          filters: [{
            type: 'autocomplete',
            name: 'Rol',
            items: [],
            value: null,
            clearable: true
          }]
        },
      ]
    }
  },
  methods: {
    showDetails(id) {
      this.$router.push(`/users/details/${id}`)
    },
    updateItem(id) {
      this.$router.push(`/users/update/${id}`)
    },
    deletePopup() {
      this.$store.dispatch('commons/openPopUp', {
        title: '¿Esta seguro de eliminar?',
        actionPrimary: { text: 'Eliminar', callback() {} },
        actionSecondary: {
          text: 'Cancelar', callback() {}
        },
        icon: { color: 'error', name: 'mdi-delete' },
        color: 'error',
      });
    }
  }
}

</script>

<style scoped>

</style>
