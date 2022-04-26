<template>
  <v-row class="ma-0 px-16">
    <v-col cols="10" class="py-6 px-12">
      <Breadcrumbs title="Pagos" subtitle="Registrar pagos"> </Breadcrumbs>
      <v-col cols="12" sm="6">
        <v-input>
          <h2>Registrar un pago por alquiler</h2>
        </v-input>
      </v-col>
      <v-row class="ma-0">
        <v-col cols="12" sm="6">
          <v-text-field
            outlined
            label="Ingrese codigo de cliente"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <Button
            text="Buscar"
            @click="$router.push('/payment/paying/alquiler')"
          ></Button>
        </v-col>
      </v-row>
      <v-col cols="12" sm="6">
        <v-input>
          <h2>Registrar un pago por venta</h2>
        </v-input>
      </v-col>

      <v-row class="ma-0">
        <v-col cols="12" sm="6">
          <v-text-field
            outlined
            label="Ingrese codigo del inmueble"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <Button
            text="Buscar"
            @click="$router.push('/payment/paying/create')"
          ></Button>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs';
import Button from '@/components/Button';

export default {
  name: 'PayingTable',
  components: {
    Button,
    Breadcrumbs,
  },
  data() {
    return {
      cliente: '100',
    };
  },
  methods: {
    openPopup() {
      this.$store.dispatch('commons/openPopUp', {
        title: '¿Esta seguro de crear el informe?',
        actionPrimary: {
          text: 'Crear',
          callback() {

          },
        },
        actionSecondary: {
          text: 'Cancelar',
          callback() {},
        },
        icon: { color: 'success', name: 'mdi-check' },
        color: 'success',
      });
    },
  },
};
</script>
<style scoped>
</style>
