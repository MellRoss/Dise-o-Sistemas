<template>
  <v-container class="px-16">
    <Card>
      <v-row class="ma-0">
        <v-col cols="8" class="py-6">
          <Breadcrumbs title="Pagos" subtitle="Registrar entrada/salida">
          </Breadcrumbs>
        </v-col>
        <v-col cols="4" class="d-flex justify-end align-center">
            <Button
              text="Agregar"
              @click="$router.push('/payment/stocktaking/create')"
            ></Button>
          </v-col>
      </v-row>
    </Card>

    <Card title="Entradas">
       <v-row class="ma-0">
      <v-col  cols="12" sm="6" >
            <v-input>
          <h2>Entradas</h2>
        </v-input>
         </v-col>
          </v-row>
      <v-row class="ma-0">

        <v-col>
          <Table :headers="headers" :items="items"></Table>
        </v-col>
      </v-row>
    </Card>
    <Card title="Salidas">
        <v-row class="ma-0">
      <v-col  cols="12" sm="6" >
              <v-input>
          <h2>Salidas</h2>
        </v-input>
         </v-col>
          </v-row>
      <v-row class="ma-0">
        <v-col>
          <Table :headers="headers2" :items="items2"></Table>
        </v-col>
      </v-row>
    </Card>
  </v-container>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs';
import Button from '@/components/Button';
import Table from '@/components/Table';
export default {
  name: 'StocktakingTable',
  components: {
    Button,
    Breadcrumbs,
    Table,
  },
  data() {
    return {
      headers: [
        {
          text: 'Fecha',
          align: 'start',
          sortable: false,
          value: 'fecha',
          class: 'text-subtitle-2',
        },
        {
          text: 'Concepto',
          value: 'concepto',
          class: 'text-subtitle-2',
        },
        {
          text: 'Monto',
          value: 'monto',
          class: 'text-subtitle-2',
        },
      ],
      items: [
        {
           fecha: '2-2-2021',
          concepto: 'Concepto 1',
          monto: 6.0,
        },
      ],
      headers2: [
        {
          text: 'Fecha',
          align: 'start',
          sortable: false,
          value: 'fecha',
          class: 'text-subtitle-2',
        },
        {
          text: 'Concepto',
          value: 'concepto',
          class: 'text-subtitle-2',
        },
        {
          text: 'Monto',
          value: 'monto',
          class: 'text-subtitle-2',
        },
      ],
      items2: [
        {
           fecha: '2-2-2021',
          concepto: 'Concepto 1',
          monto: 6.0,
        },
        {
          fecha: '2-2-2021',
           concepto: 'Concepto 2',
          fat: 12.0,
        },
      ],
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
