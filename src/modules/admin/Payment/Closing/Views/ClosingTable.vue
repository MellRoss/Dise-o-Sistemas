<template>
  <v-row class="ma-0">
    <Filters
        class="col-2"
        :items="filters"
    ></Filters>
    <v-col cols="10" class="py-6 px-12">

      <Breadcrumbs title="Pagos" subtitle="Cierre de caja"> </Breadcrumbs>

      <v-row class="ma-0">

        <v-col cols="12" sm="6" md="4" lg="3">
          <v-text-field
            v-model="ingresos"
            label="Total de ingresos"
            readonly
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-text-field
            v-model="egresos"
            label="Total de egresos"
            readonly
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-text-field
            v-model="general"
            label="Total general"
            readonly
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="4" sm="6" md="4" lg="3">
          <Button text="Imprimir balance" @click="openPopup"></Button>
        </v-col>
      </v-row>
        <Table
          class="col-12"
          :headers="headers"
          :items="items"
          with-details
          @detailsAction="showDetails"
        ></Table>
      </v-col>
    </v-row>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs';
import Table from '@/components/Table';
import Button from '@/components/Button';
import Filters from '@/components/Filters';

export default {
  name: 'ClosingTable',
  components: {
    Button,
    Table,
    Breadcrumbs,
    Filters,
  },
  data() {
    return {
      headers: [

        {

          text: 'Fecha',
          align: 'start',
          value: 'fecha',
          class: 'text-subtitle-2',
        },
        {
          text: 'Hora',
          value: 'hora',
          class: 'text-subtitle-2',
        },
        {
          text: 'Monto',
          value: 'monto',
          class: 'text-subtitle-2',
        },
        {
          text: 'Tipo de movimiento',
          value: 'tipoMov',
          class: 'text-subtitle-2',
        },
        {
          text: '',
          value: 'actions',
          sortable: false,
          class: 'text-subtitle-2',
        },
      ],
      items: [
        {
          fecha: '10-10-2010',
          hora: '10:00',
          monto: 100,
          tipoMov: 'Alquiler',
        },
        {
          fecha: '11-10-2010',
          hora: '10:10',
          monto: -100,
          tipoMov: 'Entrada/Salida',
        },
        {
          fecha: '12-10-2010',
          hora: '17:20',
          monto: 100,
          tipoMov: 'Venta',
        },
      ],

      ingresos: '200',
      egresos: '100',
      general: '100',

          filters: [
            {
          filters: [{
            type: 'autocomplete',
            name: 'Tipo de movimiento',
            items: [
        { value: 1, text: 'Entrada/Salida' },
        { value: 2, text: 'Alquiler' },
        { value: 3, text: 'Venta' },],
            value: 0,
            clearable: true
          }]
        }
          ]

    };
  },
  methods: {
    showDetails() {
      this.$router.push(`/payment/closing/details`);
    },
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
        icon: { color: 'success', name: 'mdi-printer' },
        color: 'success',
      });
    },
  },
};
</script>
<style scoped>
</style>
