<template>
  <v-container class="px-16">
    <v-col cols="10" class="py-6">
      <Breadcrumbs
        title="Detalles de usuario"
      ></Breadcrumbs>
    </v-col>
    <Card
      title="Detalles"
    >
        <v-row>
          <v-col
            cols="6"
          >
            <v-text-field
              v-model="Nombre"
              label="Nombre"
              readonly
              outlined
            ></v-text-field>
          </v-col>

          <v-col
            cols="6"
          >
            <v-text-field
              v-model="Apellido"
              label="Apellido"
              readonly
              outlined
            ></v-text-field>
          </v-col>
          </v-row>

          <v-row>
          <v-col
            cols="6"
          >
            <v-text-field
              v-model="email"
              label="E-mail"
              readonly
              outlined
            ></v-text-field>
          </v-col>

          <v-col
            cols="6"
          >
            <v-text-field
              v-model="dni"
              label="DNI"
              readonly
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col
            cols="6"
          >
            <v-text-field
              v-model="nroTelefono"
              label="Numero de telefono"
              readonly
              outlined
            ></v-text-field>
          </v-col>

          <v-col
            cols="6"
          >
            <v-text-field
              v-model="nroAlternativo"
              label="Numero de telefono alternativo"
              readonly
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col
            cols="6"
          >
            <v-text-field
              v-model="Usuario"
              label="Nombre de usuario"
              readonly
              outlined
            ></v-text-field>
          </v-col>

          <v-col
            cols="6"
          >
            <v-select
              v-model="Rol"
              label="Rol"
              readonly
              outlined
            ></v-select>
          </v-col>
        </v-row>
    </Card>
  </v-container>
</template>

<script>

import Breadcrumbs from '@/components/Breadcrumbs';
import Card from '@/components/Card';
export default {
  name: 'UserDetails',
  components: {
    Card,
    Breadcrumbs,
  },
  data() {
    return {
      Nombre: 'Sergio',
      Apellido: 'Lopez',
      email: 'Sergio@dot.com',
      dni: '12345678',
      nroTelefono: '3698569152',
      nroAlternativo: '3652456789',
      Usuario: 'Lopez035',
      Rol: 'Gerente',
    };
  },
  methods: {},
}
</script>

<style scoped>

</style>
