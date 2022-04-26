<template>
  <v-container class="px-16">
    <Breadcrumbs
        title="Propiedades"
        subtitle="Administrador de propiedades"
    ></Breadcrumbs>
    <Card
        title="Detalles propiedad"
    >
      <v-row>
        <v-col cols="6">
          <v-select
              label="Tipo"
              :items="['Departamento', 'Casa', 'Chalet', 'Local', 'Casa con local', 'Cabaña']"
              value="Departamento"
              readonly
              outlined
              hide-details
          ></v-select>
        </v-col>
        <v-col cols="6">
          <v-text-field
              label="Ubicación"
              value="French 1203"
              readonly
              outlined
              hide-details
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-text-field
              label="Baños"
              outlined
              type="number"
              readonly
              value="1"
              hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Dormitorios"
              outlined
              value="2"
              readonly
              type="number"
              hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Suites"
              outlined
              readonly
              value="0"
              type="number"
              hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Antigüedad"
              value="5 años"
              readonly
              outlined
              hide-details
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-autocomplete
              label="Espacios"
              :items="['Living', 'Comedor', 'Terraza', 'Balcón', 'Cochera']"
              :value="['Living', 'Comedor']"
              multiple
              readonly
              chips
              outlined
              hide-details
          ></v-autocomplete>
        </v-col>
        <v-col cols="6">
          <v-autocomplete
              label="Artefactos"
              :items="['Termotanque', 'Placard', 'Bañera', 'Mesada', 'Aire acondicionado']"
              :value="['Termotanque', 'Placard']"
              multiple
              readonly
              chips
              outlined
              hide-details
          ></v-autocomplete>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-autocomplete
              label="Servicios"
              :items="['Gas', 'Luz', 'Agua', 'Cable', 'Internet']"
              :value="['Gas', 'Luz', 'Agua']"
              multiple
              readonly
              chips
              outlined
              hide-details
          ></v-autocomplete>
        </v-col>
        <v-col cols="6">
          <v-select
              label="Contrato"
              :items="['Alquiler', 'Venta']"
              value="Alquiler"
              readonly
              outlined
              hide-details
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-file-input
              accept="image/png, image/jpeg, image/bmp"
              label="Imagenes"
              prepend-icon=""
              chips
              readonly
              outlined
              multiple
              hide-details
          ></v-file-input>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-textarea
              label="Descripción"
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              outlined
              readonly
              no-resize
              auto-grow
              hide-details
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-text-field
              label="ID Propietario"
              value="42"
              readonly
              outlined
              hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
              label="Precio"
              value="$ 20000"
              readonly
              outlined
              hide-details
          ></v-text-field>
        </v-col>
      </v-row>
    </Card>
  </v-container>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs';
import Card from '@/components/Card';

export default {
  name: 'PropertyDetails',
  components: {
    Breadcrumbs,
    Card
  }
};
</script>

<style scoped>

</style>
