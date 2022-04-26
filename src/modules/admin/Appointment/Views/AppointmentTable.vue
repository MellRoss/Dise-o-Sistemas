<template>
  <v-row class="ma-0">
    <Filters
        class="col-2"
        :items="filters"
        @changed="changed"
    ></Filters>
    <v-col cols="10" class="py-6 px-12 align">
      <Breadcrumbs
          title="Citas"
          subtitle="Administrador de citas"
      >
        <Button
            text="Crear cita"
            @click="$router.push('/appointments/create')"
        ></Button>
      </Breadcrumbs>
      <Table
          :headers="headers"
          :items="items"
          :events="events"
          :sort-by="sortBy"
          :sort-desc="sortDesc"
          :with-assignation="statusFilter == 'Pendiente'"
          @assignationAction="assignAppointment"
          :with-details="statusFilter != 'Pendiente'"
          @detailsAction="showDetails"
          :with-edition="statusFilter == 'En proceso'"
          @editAction="updateItem"
          dual-view
      ></Table>
    </v-col>
  </v-row>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs';
import Table from '@/components/Table';
import Filters from '@/components/Filters';
import Button from '@/components/Button';
import moment from 'moment'

export default {
  name: 'AppointmentTable',
  components: {
    Button,
    Filters,
    Table,
    Breadcrumbs
  },
  data() {
    return {
      statusFilter: 'Pendiente',
      activityType: null,
      sortBy: 'requestDate',
      sortDesc: true,
      headers: [
        {
          text: 'Nombre',
          value: 'name',
          sortable: true,
          class: 'text-subtitle-2'
        }, {
          text: 'Propiedad',
          value: 'propertyId',
          sortable: true,
          class: 'text-subtitle-2'
        }, {
          text: 'Estado',
          value: 'status',
          sortable: true,
          class: 'text-subtitle-2 d-none',
          cellClass: 'd-none',
          filter: value => {
            return value == this.statusFilter
          }
        }, {
          text: 'Solicitado',
          value: 'requestDate',
          sortable: true,
          class: 'text-subtitle-2',
          cellClass: '',
          filterable: false
        }, {
          text: 'Agendado',
          value: 'appointmentDate',
          sortable: true,
          class: 'text-subtitle-2 d-none',
          cellClass: 'd-none',
          filterable: false
        }, {
          text: 'Actividad',
          value: 'activityType',
          sortable: false,
          class: 'text-subtitle-2 d-none',
          cellClass: 'd-none',
          /*filter: value => {
            if (!value) return true
            return value == this.activityType
          }*/
        }, {
          text: 'Ubicación',
          value: 'location',
          sortable: true,
          class: 'text-subtitle-2 d-none',
          cellClass: 'd-none'
        }, {
          text: 'Teléfono',
          value: 'telephone',
          sortable: false,
          class: 'text-subtitle-2 d-none',
          cellClass: 'd-none',
          filterable: false
        }, {
          text: '',
          value: 'actions',
          sortable: false,
          class: 'text-subtitle-2'
        },
      ],
      items: [
        {
          id: 1,
          propertyId: 42,
          name: 'Marcos Diaz',
          status: 'Pendiente',
          requestDate: '16/05/2021',
          appointmentDate: ''
        }, {
          id: 2,
          propertyId: 47,
          name: 'Carlos',
          status: 'Pendiente',
          requestDate: '15/05/2021',
        }, {
          id: 3,
          propertyId: 65,
          name: 'Maria',
          status: 'Pendiente',
          requestDate: '16/05/2021',
        }, {
          id: 4,
          propertyId: 87,
          name: 'Jose Lopez',
          status: 'Finalizada',
          requestDate: '10/05/2021',
          appointmentDate: '12/05/2021 17:00',
          activityType: 'Alquiler',
          location: 'Castelli 146',
          telephone: '3624764324'
        }, {
          id: 5,
          propertyId: 23,
          name: 'Lucia Rios',
          status: 'Finalizada',
          requestDate: '09/05/2021',
          appointmentDate: '10/05/2021 09:00',
          activityType: 'Venta',
          location: 'French 231',
          telephone: '3624657812'
        }, {
          id: 6,
          propertyId: 12,
          name: 'Carmen',
          status: 'Cancelada',
          requestDate: '10/05/2021',
        }, {
          id: 7,
          propertyId: 8,
          name: 'Martin',
          status: 'En proceso',
          requestDate: '08/05/2021',
          appointmentDate: '20/05/2021 10:00',
          activityType: 'Alquiler',
          location: '9 de Julio 25 3A',
          telephone: '3624547861'
        }, {
          id: 8,
          propertyId: 81,
          name: 'Carla Gonzalez',
          status: 'En proceso',
          requestDate: '17/05/2021',
          appointmentDate: '25/05/2021 08:00',
          activityType: 'Alquiler',
          location: 'Güemes 414',
          telephone: '3624189453'
        }, {
          id: 9,
          propertyId: 67,
          name: 'Jorge',
          status: 'En proceso',
          requestDate: '18/05/2021',
          appointmentDate: '25/05/2021 16:00',
          activityType: 'Venta',
          location: 'Liniers 603',
          telephone: '3624731145'
        },
      ],
      events: [
        {
          id: 5,
          color: 'secondary lighten-3',
          start: moment('10/05/2021 09:00', 'DD/MM/YYYY hh:mm').format('YYYY-MM-DD hh:mm'),
          end: moment('10/05/2021 10:00', 'DD/MM/YYYY hh:mm').format('YYYY-MM-DD hh:mm'),
          timed: true,
          name: 'Lucia Rios',
          status: 'Finalizada'
        }, {
          id: 4,
          color: 'secondary lighten-3',
          start: moment('12/05/2021 17:00', 'DD/MM/YYYY hh:mm').format('YYYY-MM-DD hh:mm'),
          end: moment('12/05/2021 18:00', 'DD/MM/YYYY hh:mm').format('YYYY-MM-DD hh:mm'),
          timed: true,
          name: 'Jose Lopez',
          status: 'Finalizada'
        }, {
          id: 7,
          color: 'secondary',
          start: moment('20/05/2021 10:00', 'DD/MM/YYYY hh:mm').format('YYYY-MM-DD hh:mm'),
          end: moment('20/05/2021 11:00', 'DD/MM/YYYY hh:mm').format('YYYY-MM-DD hh:mm'),
          timed: true,
          name: 'Martin',
          status: 'Pendiente'
        }, {
          id: 8,
          color: 'secondary',
          start: moment('25/05/2021 08:00', 'DD/MM/YYYY hh:mm').format('YYYY-MM-DD hh:mm'),
          end: moment('25/05/2021 09:00', 'DD/MM/YYYY hh:mm').format('YYYY-MM-DD hh:mm'),
          timed: true,
          name: 'Carla Gonzalez',
          status: 'Pendiente'
        }, {
          id: 9,
          color: 'secondary',
          start: moment('25/05/2021 16:00', 'DD/MM/YYYY hh:mm').format('YYYY-MM-DD hh:mm'),
          end: moment('25/05/2021 17:00', 'DD/MM/YYYY hh:mm').add(1, 'h').format('YYYY-MM-DD hh:mm'),
          timed: true,
          name: 'Jorge',
          status: 'Pendiente'
        }
      ],
      filters: [
        {
          filters: [{
            type: 'select',
            name: 'Estado',
            items: ['Pendiente', 'En proceso', 'Cancelada', 'Finalizada'],
            value: 'Pendiente'
          }]
        }
      ]
    }
  },
  watch: {
    statusFilter(value) {
      switch (value) {
        case 'Pendiente': {
          this.headers[3].class = 'text-subtitle-2'
          this.headers[3].cellClass = ''
          this.headers[4].class = 'text-subtitle-2 d-none'
          this.headers[4].cellClass = 'd-none'
          this.headers[5].class = 'text-subtitle-2 d-none'
          this.headers[5].cellClass = 'd-none'
          this.headers[6].class = 'text-subtitle-2 d-none'
          this.headers[6].cellClass = 'd-none'
          this.headers[7].class = 'text-subtitle-2 d-none'
          this.headers[7].cellClass = 'd-none'
          this.sortBy = 'requestDate'
          this.sortDesc = true
          if (this.filters.length == 2) this.filters.pop()
          break
        }
        case 'En proceso': {
          this.headers[3].class = 'text-subtitle-2 d-none'
          this.headers[3].cellClass = 'd-none'
          this.headers[4].class = 'text-subtitle-2'
          this.headers[4].cellClass = ''
          this.headers[5].class = 'text-subtitle-2'
          this.headers[5].cellClass = ''
          this.headers[6].class = 'text-subtitle-2'
          this.headers[6].cellClass = ''
          this.headers[7].class = 'text-subtitle-2'
          this.headers[7].cellClass = ''
          this.sortBy = 'appointmentDate'
          this.sortDesc = false
          if (this.filters.length == 1) this.filters.push({
            filters: [{
              type: 'select',
              name: 'Actividad',
              items: ['Alquiler', 'Venta'],
              value: null,
              clearable: true
            }]
          })
          break
        }
        case 'Cancelada': {
          this.headers[3].class = 'text-subtitle-2'
          this.headers[3].cellClass = ''
          this.headers[4].class = 'text-subtitle-2 d-none'
          this.headers[4].cellClass = 'd-none'
          this.headers[5].class = 'text-subtitle-2 d-none'
          this.headers[5].cellClass = 'd-none'
          this.headers[6].class = 'text-subtitle-2 d-none'
          this.headers[6].cellClass = 'd-none'
          this.headers[7].class = 'text-subtitle-2 d-none'
          this.headers[7].cellClass = 'd-none'
          this.sortBy = null
          this.sortDesc = null
          if (this.filters.length == 2) this.filters.pop()
          break
        }
        case 'Finalizada': {
          this.headers[3].class = 'text-subtitle-2'
          this.headers[3].cellClass = ''
          this.headers[4].class = 'text-subtitle-2'
          this.headers[4].cellClass = ''
          this.headers[5].class = 'text-subtitle-2'
          this.headers[5].cellClass = ''
          this.headers[6].class = 'text-subtitle-2'
          this.headers[6].cellClass = ''
          this.headers[7].class = 'text-subtitle-2'
          this.headers[7].cellClass = ''
          this.sortBy = 'appointmentDate'
          this.sortDesc = false
          if (this.filters.length == 1) this.filters.push({
            filters: [{
              type: 'select',
              name: 'Actividad',
              items: ['Alquiler', 'Venta'],
              value: null,
              clearable: true
            }]
          })
          break
        }
      }
    }
  },
  methods: {
    changed(index, i, value) {
      /*this.filters[index].filters[i].value = value*/
      switch (index) {
        case 0: {
          this.statusFilter = value
          break
        }
        case 1: {
          this.activityTypeFilter = value
          break
        }
      }

    },
    assignAppointment(id) {
      this.$router.push(`/appointments/create/${id}`)
    },
    showDetails(id) {
      this.$router.push(`/appointments/details/${id}`)
    },
    updateItem(id) {
      this.$router.push(`/appointments/update/${id}`)
    },
    deletePopup() {
      this.$store.dispatch('commons/openPopUp', {
        title: '¿Esta seguro de eliminar?',
        actionPrimary: { text: 'Eliminar', callback() {} },
        actionSecondary: {
          text: 'Cancelar', callback() {}
        },
        icon: { color: 'error', name: 'mdi-delete' },
        color: 'error',
      });
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
