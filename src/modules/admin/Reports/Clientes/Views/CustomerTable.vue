<template>
  <v-row class="ma-0">
    <Filters
        class="col-2"
        :items="filters"
    ></Filters>
    <v-col cols="10" class="py-6 px-12">
      <Breadcrumbs
          title="Clientes"
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
  name: 'CustomerTable',
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
          align: 'start',
          value: 'cod',

        },
        { text: 'Nombre y Apellido', value: 'nombre', class: 'text-subtitle-2'},
        { text: 'Email', value: 'email', class: 'text-subtitle-4'},
        { text: 'Dirección', value: 'direcc', class: 'text-subtitle-2'},
        { text: 'Fecha', value: 'fecha', class: 'text-subtitle-2' },
        { text: 'Hora', value: 'hora', class: 'text-subtitle-2'},
        {
          text: '',
          value: 'actions',
          sortable: false,
          class: 'text-subtitle-2'
        },
      ],
      items: [
        {
          cod: '106',
          nombre: 'Cosme Fulanito',
          email: 'cosmefulanito@gmail.com',
          direcc: 'Av. Italia 943',
          fecha: '05/10/20',
          hora: '16.53' 
        },
        {
          cod: '109',
          nombre: 'Daniel Gomez',
          email: 'danielgomez@gmail.com',
          direcc: 'Av. Castelli 771',
          fecha: '03/7/19',
          hora: '14:01' 
        },
        {
         cod: '107',
          nombre: 'Luciano Garcia',
          email: 'lucianogarcia@hotmail.com',
          direcc: 'J.R. Lestani 786',
          fecha: '23/10/20',
          hora: '17:33' 
        },
        {
          cod: '108',
          nombre: 'Luis Suarez',
          email: 'cosmefulanito@gmail.com',
          direcc: 'Arturo Illia 1293',
          fecha: '01/02/21',
          hora: '10:02' 
        },
        {
          cod: '100',
          nombre: 'Derliz Subeldia',
          email: 'derlizsubeldia@hotmail.com',
          direcc: 'Av. 25 de mayo 1219',
          fecha: '17/02/21',
          hora: '20:45' 
        },
        {
          cod: '104',
          nombre: 'Cecilia Gomez',
          email: 'ceciliagomez@gmail.com',
          direcc: 'Av. Sarmiento 1093',
          fecha: '30/01/21',
          hora: '15:46' 
        },
        {
          cod: '105',
          nombre: 'Jorge Subeldia',
          email: 'fersubel@outlook.com',
          direcc: 'Brown 194',
          fecha: '17/05/20',
          hora: '18:04' 
        },
        {
          cod: '103',
          nombre: 'José Smith',
          email: 'josesito@gmail.com',
          direcc: 'José Hernández 255',
          fecha: '23/05/21',
          hora: '19:33' 
        },
        {
          cod: '102',
          nombre: 'Manuel Ávila',
          email: 'manufulanito@outlook.com',
          direcc: 'Monteagudo 788',
          fecha: '12/11/20',
          hora: '09:59' 
        },
       
      ],
      filters: [
         {
          name: 'Apellido y Nombre',
          filters: [{
            type: 'autocomplete',
            name: '',
            items: [],
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
      this.$router.push(`/reports/clientes/details/${id}`)
    },
  }
}
</script>
<style lang="sass" scoped>

</style>