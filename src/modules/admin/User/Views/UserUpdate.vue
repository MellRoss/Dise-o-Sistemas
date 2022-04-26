<template>
  <v-container class="px-16">
    <v-col cols="10" class="py-6">
      <Breadcrumbs
        title="Actualización de usuario"
      ></Breadcrumbs>
    </v-col>
    <Card
      title="Edición"
    >
        <v-row>
          <v-col
            cols="6"
          >
            <v-text-field
              v-model="Nombre"
              label="Nombre"
              outlined
            ></v-text-field>
          </v-col>

          <v-col
            cols="6"
          >
            <v-text-field
              v-model="Apellido"
              label="Apellido"
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
              outlined
            ></v-text-field>
          </v-col>

          <v-col
            cols="6"
          >
            <v-text-field
              v-model="dni"
              label="DNI"
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
              outlined
            ></v-text-field>
          </v-col>

          <v-col
            cols="6"
          >
            <v-text-field
              v-model="nroAlternativo"
              label="Numero de telefono alternativo"
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
              outlined
            ></v-text-field>
          </v-col>

          <v-col
            cols="6"
          >
            <v-select
              v-model="rol"
              label="Rol"
              outlined
            ></v-select>
          </v-col>
        </v-row>
    <v-row class="d-flex justify-end">
      <v-col
        cols="4"
        md="2"
      >
    <Button
      text="Cancelar"
      alternative
      @click="$router.push('/users/')"
    ></Button>
      </v-col>
      <v-col
        cols="4"
        md="2"
      >
    <Button
      text="Confirmar"
    ></Button>
      </v-col>

    </v-row>
    </Card>
  </v-container>
</template>

<script>

import Breadcrumbs from '@/components/Breadcrumbs';
import Button from '@/components/Button';
import Card from '@/components/Card';
export default {
  name: 'UserUpdate',
  components: {
    Card,
    Breadcrumbs,
    Button,
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
