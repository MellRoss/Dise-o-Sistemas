<template>
  <v-container class="px-16">
    <Breadcrumbs
        title="Propiedades"
        subtitle="Administrador de propiedades"
    ></Breadcrumbs>
    <Card
        title="Crear propiedad"
    >
      <v-row>
        <v-col cols="6">
          <v-select
              label="Tipo"
              :items="['Departamento', 'Casa', 'Chalet', 'Local', 'Casa con local', 'Cabaña']"
              outlined
              hide-details
          ></v-select>
        </v-col>
        <v-col cols="6">
          <v-text-field
              label="Ubicación"
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
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Dormitorios"
              outlined
              type="number"
              hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Suites"
              outlined
              type="number"
              hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
              label="Antigüedad"
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
              outlined
              hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
              label="Precio"
              outlined
              hide-details
          ></v-text-field>
        </v-col>
      </v-row>
      <div class="mt-4 d-flex justify-end">
        <Button
            text="Crear"
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
  name: 'PropertyCreate',
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
        title: '¿Esta seguro de crear?',
        actionPrimary: { text: this.lock ? 'Asignar' : 'Crear', callback() {}
        },
        actionSecondary: {
          text: 'Cancelar', callback() {}
        },
        icon: { color: 'success', name: 'mdi-domain-plus' },
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
