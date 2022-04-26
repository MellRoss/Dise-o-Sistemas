<template>
  <v-row class="ma-0">
    <Filters
        class="col-2"
        :items="filters"
        @changed="changed"
    ></Filters>
    <v-col cols="10" class="py-6 px-12 align">
      <Breadcrumbs
          title="Propiedades"
          subtitle="Administrador de propiedades"
      >
        <Button
            text="Nueva propiedad"
            @click="$router.push('/properties/create')"
        ></Button>
      </Breadcrumbs>
      <Table
          :headers="headers"
          :items="items"
          :sort-by="sortBy"
          :sort-desc="sortDesc"
          with-details
          @detailsAction="showDetails"
          with-edition
          @editAction="updateItem"
          with-deletion
          @deleteAction="deletePopup"
      ></Table>
    </v-col>
  </v-row>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs';
import Table from '@/components/Table';
import Filters from '@/components/Filters';
import Button from '@/components/Button';

export default {
  name: 'PropertyTable',
  components: {
    Button,
    Filters,
    Table,
    Breadcrumbs
  },
  data() {
    return {
      sortBy: '',
      sortDesc: false,
      headers: [
        {
          text: 'ID Propietario',
          value: 'ownerId',
          sortable: true,
          class: 'text-subtitle-2'
        }, {
          text: 'Tipo',
          value: 'propertyType',
          sortable: false,
          class: 'text-subtitle-2'
        }, {
          text: 'Contrato',
          value: 'contractType',
          sortable: false,
          class: 'text-subtitle-2'
        }, {
          text: 'Precio',
          value: 'price',
          sortable: true,
          class: 'text-subtitle-2'
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
          ownerId: 42,
          propertyType: 'Departamento',
          contractType: 'Alquiler',
          price: '$ 20000',
        }, {
          id: 2,
          ownerId: 76,
          propertyType: 'Casa',
          contractType: 'Venta',
          price: '$ 1000000',
        }, {
          id: 3,
          ownerId: 12,
          propertyType: 'Departamento',
          contractType: 'Venta',
          price: '$ 2000000',
        }
      ],
      filters: [
        {
          filters: [{
            type: 'select',
            name: 'Tipo',
            items: ['Departamento', 'Casa', 'Chalet', 'Local', 'Casa con local', 'Cabaña'],
          }]
        }, {
          filters: [{
            type: 'select',
            name: 'Contrato',
            items: ['Alquiler', 'Venta'],
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
    showDetails(id) {
      this.$router.push(`/properties/details/${id}`)
    },
    updateItem(id) {
      this.$router.push(`/properties/update/${id}`)
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
