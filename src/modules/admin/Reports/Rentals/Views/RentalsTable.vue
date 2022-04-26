<template>
  <v-row class="ma-0">
    <Filters
        class="col-2"
        :items="filters"
    ></Filters>
    <v-col cols="10" class="py-6 px-12">
      <Breadcrumbs
          title="Alquileres"
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
  name: 'RentalsTable',
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
        { text: 'Tipo', value: 'tipo' },
        { text: 'Propietario', value: 'propietario' },
        { text: 'Inquilino', value: 'inquilino' },
        { text: 'Dirección', value: 'direcc'},
        { text: 'Fecha', value: 'fecha' },
        { text: 'Precio', value: 'precio' },
        {
          text: '',
          value: 'actions',
          sortable: false,
          class: 'text-subtitle-2'
        },
      ],
      items: [
        {
          cod: '1',
          tipo:'Departamento',
          propietario: 'Cosme Fulanito',
          inquilino: 'Cecilia Gomez',
          direcc: 'Av. Italia 943',
          fecha: '05/10/20',
          precio: '$10.850',
        },
        {
          cod: '7',
          tipo:'Departamento',
          propietario: 'Jorge Subeldia',
          inquilino: 'Luis Suárez',
          direcc: 'Arturo Illia 1293',
          fecha: '12/2/19',
          precio: '$30.150',
        },
        {
          cod: '4',
          tipo:'Casa',
          propietario: 'Manuel Ávila',
          inquilino: 'Jorge Subeldia',
          direcc: 'Av. 25 de mayo 1219',
          fecha: '05/10/20',
          precio: '$10.850',
        },
        {
          cod: '6',
          tipo:'Departamento',
          propietario: 'Hector Ibarrola',
          inquilino: 'Jimena Ruiz',
          direcc: 'J.R. Lestani 786',
          fecha: '05/10/20',
          precio: '$10.850',
        },
        {
          cod: '5',
          tipo:'Casa',
          propietario: 'Cosme Fulanito',
          inquilino: 'Luis Suárez',
          direcc: 'Av. Castelli 771',         
          fecha: '05/10/20',
          precio: '$10.850',
        },
        {
          cod: '10',
          tipo:'Departamento',
          propietario: 'Cesar Leiva',
          inquilino: 'Jimena Ruiz',
          direcc: 'Arturo Illia 120',         
          fecha: '05/10/20',
          precio: '$10.850',
        },
        {
          cod: '9',
          tipo:'Casa',
          propietario: 'Esteban Sanin',
          inquilino: 'Javier Sosa',
          direcc: 'Arturo Illia 120',         
          fecha: '05/10/20',
          precio: '$10.850',
        },
        {
          cod: '8',
          tipo:'Departamento',
          propietario: 'Cosme Fulanito',
          inquilino: 'Luis Suárez',
          direcc: 'Arturo Illia 247',          
          fecha: '05/10/20',
          precio: '$10.850',
        },
        {
          cod: '3',
          tipo:'Casa',
          propietario: 'Jacinto Luque',
          inquilino: 'Pablo Rodas',
          direcc: 'J.R. Lestani 786',          
          fecha: '05/10/20',
          precio: '$10.850',
        },
        {
          cod: '2',
          tipo:'Casa',
          propietario: 'Manuel Ávila',
          inquilino: 'Javier Sosa',
          direcc: 'Monteagudo 1050',          
          fecha: '05/10/20',
          precio: '$10.850',
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
      this.$router.push(`/reports/rentals/details/${id}`)
  },
  }
}
</script>
<style lang="sass" scoped>

</style>