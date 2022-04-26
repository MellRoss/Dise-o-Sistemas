<template>
  <v-row class="ma-0">
    <Filters
        class="col-2"
        :items="filters"
    ></Filters>
    <v-col cols="10" class="py-6 px-12">
      <Breadcrumbs
          title="Ventas"
      > <v-btn
      class="mx-2"
      fab
      dark
      small
      color="grey"
    >
      <v-icon dark>
        mdi-printer
      </v-icon>
    </v-btn>
      </Breadcrumbs>
      <Table
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
import Filters from '@/components/Filters';

export default {
  name: 'SalesTable',
  components: {
    Filters,
    Table,
    Breadcrumbs
  },
  data() {
    return {
      headers: [
        {
          text: 'Código',
          value: 'cod',

        },
        { text: 'Tipo', value: 'tipo', class: 'text-subtitle-2'},
        { text: 'Dueño', value: 'dueño', class: 'text-subtitle-2'},
        { text: 'Comprador', value: 'comprador', class: 'text-subtitle-2'},        
        { text: 'Dirección', value: 'direcc', class: 'text-subtitle-2'},
        { text: 'Fecha', value: 'fecha', class: 'text-subtitle-2' },
        { text: 'Precio', value: 'precio', class: 'text-subtitle-2' },
        {
          text: '',
          value: 'actions',
          sortable: false,
          class: 'text-subtitle-2'
        },
      ],
      items: [
        {
          cod: '101',
          tipo: 'Casa',
          dueño: 'Daniel Gomez',
          comprador: 'Jorge Subeldia',
          direcc: 'Av. Italia 943',
          fecha: '01/02/21',
          precio: '$1.950.000'
        },
        {
          cod: '100',
          tipo: 'Departamento',
          dueño: 'Luisa Garcia',
          comprador: 'Javier Sosa',
          direcc: 'Av. Italia 943',
          fecha: '05/10/20',
          precio: '$955.000'
        },
        {
          cod: '107',
          tipo: 'Departamento',
          dueño: 'Alfredo Cassano',
          comprador: 'Jimena Ruiz',
          direcc: 'Av. Italia 943',
          fecha: '17/02/21',
          precio: '$490.000'
        },
        {
          cod: '102',
          tipo: 'Casa',
          dueño: 'Pablo Rodas',
          comprador: 'Daniel Arias',
          direcc: 'Arturo Illia 1293',
          fecha: '05/10/20',
          precio: '$1.950.000'
        },
        {
          cod: '108',
          tipo: 'Casa',
          dueño: 'José López',
          comprador: 'Sergio Marín',
          direcc: 'Av. 25 de mayo 1219',
          fecha: '11/10/20',
          precio: '$2.950.000'
        },
        {
          cod: '105',
          tipo: 'Departamento',
          dueño: 'Cecilia Gómez',
          comprador: 'David Subeldia',
          direcc: 'J.R. Lestani 786',
          fecha: '05/9/20',
          precio: '$1.950.000'
        },
        {
          cod: '104',
          tipo: 'Casa',
          dueño: 'Manuel Ávila',
          comprador: 'Hector Ibarrola',
          direcc: 'Av. Castelli 771',
          fecha: '30/01/21',
          precio: '$2.500.000'
        },
        {
          cod: '103',
          tipo: 'Departamento',
          dueño: 'Julio Sanchez',
          comprador: 'Cesar Leiva',
          direcc: 'Av. Sarmiento 1093',
          fecha: '03/7/19',
          precio: '$1.950.000'
        },
        {
          cod: '109',
          tipo: 'Casa',
          dueño: 'Esteban Sanin',
          comprador: 'Francisco Marin',
          direcc: 'Av. Castelli 142',
          fecha: '23/10/20',
          precio: '$3.950.000'
        },
        {
          cod: '109',
          tipo: 'Casa',
          dueño: 'Jacinto Luque',
          comprador: 'Daniela Lugo',
          direcc: 'Arturo Illia 120',
          fecha: '01/02/21',
          precio: '$1.000.000'
        },
       
      ],
      filters: [
         {
          name: 'Tipo de inmueble',
          filters: [{
            type: 'autocomplete',
            name: '',
            items: [{value: 1, text: 'Casa'}, {value: 2, text: 'Departamento'}],
            value: null,
            clearable: true
          }]
        },{
          name: 'Fecha',
          filters: [
            {
              name: 'Desde',
              type: 'date',
              value: null,
              isCalendarOpen: false,
            },{
              name: 'Hasta',
              type: 'date',
              value: null,
              isCalendarOpen: false,
            },
          ]
        }
      ]
    }
  },
  methods: {
    showDetails(id) {
      this.$router.push(`/reports/sales/details/${id}`)
  },
  }
}
</script>
<style lang="sass" scoped>

</style>