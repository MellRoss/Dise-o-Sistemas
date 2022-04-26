<template>
  <v-container class="px-16">
    <Breadcrumbs
        title="Propiedades"
        subtitle="Administrador de propiedades"
    ></Breadcrumbs>
    <Card
        title="Editar propiedad"
    >
      <v-row>
        <v-col cols="6">
          <v-select
              label="Tipo"
              :items="['Departamento', 'Casa', 'Chalet', 'Local', 'Casa con local', 'Cabaña']"
              value="Departamento"
              outlined
              hide-details
          ></v-select>
        </v-col>
        <v-col cols="6">
          <v-text-field
              label="Ubicación"
              value="French 1203"
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
              value="1"
              hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Dormitorios"
              outlined
              value="2"
              type="number"
              hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Suites"
              outlined
              value="0"
              type="number"
              hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Antigüedad"
              value="5 años"
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
              outlined
              hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
              label="Precio"
              value="$ 20000"
              outlined
              hide-details
          ></v-text-field>
        </v-col>
      </v-row>
      <div class="mt-4 d-flex justify-end">
        <Button
            text="Guardar"
            :loading="createButton.loading"
            :success="createButton.success"
            :error="createButton.error"
            @click="openPopup"
        ></Button>
      </div>
    </Card>
  </v-container>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default {
  name: 'PropertyUpdate',
  components: {
    Breadcrumbs,
    Card,
    Button
  },
  data() {
    return {
      createButton: {
        loading: false,
        success: false,
        error: false
      },
    }
  },
  methods: {
    openPopup() {
      this.$store.dispatch('commons/openPopUp', {
        title: '¿Esta seguro de editar?',
        actionPrimary: { text: 'Guardar', callback() {}
        },
        actionSecondary: {
          text: 'Cancelar', callback() {}
        },
        icon: { color: 'success', name: 'mdi-sync' },
        color: 'success',
      });
    },
    resetButtonValues() {
      this.createButton.loading = false;
      this.createButton.success = false;
      this.createButton.error = false;
    },
  }
};
</script>

<style scoped>

</style>
