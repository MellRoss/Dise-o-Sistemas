<template>
  <v-data-table
      v-if="tableFormat"
      :headers="headers"
      :items="items"
      :search="search"
      :sort-by="sortBy"
      :sort-desc="sortDesc"
  >
    <template v-slot:top>
      <v-toolbar
          flat
          height="100"
      >
        <v-row>
          <v-col cols="4" class="d-flex align-center">
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                dense
                outlined
                rounded
            ></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
          <v-col class="d-flex justify-end">
            <v-btn-toggle
                v-model="tableFormat"
                v-if="dualView"
                borderless
                rounded
                mandatory
            >
              <v-btn
                  :value="true"
                  icon
              >
                <v-icon>mdi-table-large</v-icon>
              </v-btn>

              <v-btn
                  :value="false"
                  icon
              >
                <v-icon>mdi-calendar-month</v-icon>
              </v-btn>
            </v-btn-toggle>
          </v-col>
        </v-row>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-menu bottom>
        <template v-slot:activator="{ on }">
          <v-icon v-on="on">mdi-dots-vertical</v-icon>
        </template>
        <v-list class="pa-0">
          <v-list-item v-if="withAssignation" @click="$emit('assignationAction', item.id)">
            <v-list-item-title>
              <v-icon>mdi-calendar-plus</v-icon> Asignar
            </v-list-item-title>
          </v-list-item>
          <v-list-item v-if="withDetails" @click="$emit('detailsAction', item.id)">
            <v-list-item-title>
              <v-icon>mdi-eye</v-icon> Detalles
            </v-list-item-title>
          </v-list-item>
          <v-list-item v-if="withEdition" @click="$emit('editAction', item.id)">
            <v-list-item-title>
              <v-icon>mdi-pencil</v-icon> Editar
            </v-list-item-title>
          </v-list-item>
          <v-list-item v-if="withDeletion" @click="$emit('deleteAction', item.id)">
            <v-list-item-title>
              <v-icon>mdi-delete</v-icon> Eliminar
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-data-table>
  <v-row v-else class="fill-height">
    <v-col>
      <v-sheet height="64">
        <v-toolbar
            flat
            class="toolbar-margin"
        >
          <v-btn
              outlined
              class="mr-4"
              color="grey darken-2"
              @click="setToday"
          >
            Hoy
          </v-btn>
          <v-btn
              fab
              text
              small
              color="grey darken-2"
              @click="prev"
          >
            <v-icon small>
              mdi-chevron-left
            </v-icon>
          </v-btn>
          <v-btn
              fab
              text
              small
              color="grey darken-2"
              @click="next"
          >
            <v-icon small>
              mdi-chevron-right
            </v-icon>
          </v-btn>
          <v-toolbar-title class="text-capitalize" v-if="$refs.calendar">
            {{ $refs.calendar.title }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu
              bottom
              right
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  outlined
                  color="grey darken-2"
                  v-bind="attrs"
                  v-on="on"
              >
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right>
                  mdi-menu-down
                </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>Día</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>Semana</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>Mes</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-spacer></v-spacer>
          <v-btn-toggle
              v-model="tableFormat"
              borderless
              rounded
          >
            <v-btn
                :value="true"
                icon
            >
              <v-icon>mdi-table-large</v-icon>
            </v-btn>

            <v-btn
                :value="false"
                icon
            >
              <v-icon>mdi-calendar-month</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar
            ref="calendar"
            v-model="focus"
            color="primary"
            :events="events"
            :event-color="getEventColor"
            :type="type"
            @click:event="showEvent"
            @click:more="viewDay"
            @click:date="viewDay"
        ></v-calendar>
            <!--@change="updateRange"-->
        <v-menu
            v-model="selectedOpen"
            :close-on-content-click="false"
            :activator="selectedElement"
            offset-x
        >
          <v-card
              color="grey lighten-4"
              min-width="350px"
              flat
          >
            <v-toolbar
                :color="selectedEvent.color"
                dark
            >
              <v-btn icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn
                  icon
                  @click="showDetails(selectedEvent.id)"
              >
                <v-icon>mdi-eye</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <v-select
                label="Estado"
                :disabled="selectedEvent.status == 'Finalizada'"
                :items="['Pendiente', 'En proceso', 'Finalizada', 'Cancelada']"
                :value="selectedEvent.status"
                outlined
                hide-details
              ></v-select>
            </v-card-text>
            <v-card-actions class="pt-0 d-flex justify-end">
              <v-btn
                  text
                  color="grey darken-2"
                  @click="selectedOpen = false"
              >
                Cerrar
              </v-btn>
              <v-btn
                  text
                  color="secondary"
                  @click="selectedOpen = false"
              >
                Guardar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Table',
  props: {
    headers: Array,
    items: Array,
    dualView: { type: Boolean, default: false },
    withAssignation: { type: Boolean, default: false },
    withDetails: { type: Boolean, default: false },
    withEdition: { type: Boolean, default: false },
    withDeletion: { type: Boolean, default: false },
    sortBy: String,
    sortDesc: { type: Boolean, default: false },
    events: { type: Array, default: () => [] }
  },
  data() {
    return {
      tableFormat: true,
      search: '',

      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },


      focus: '',
      type: 'month',
      typeToLabel: {
        month: 'Mes',
        week: 'Semana',
        day: 'Día'
      },
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party']

    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  mounted() {
    //TODO: check default in vuetify
    /*this.$refs.calendar.checkChange()*/
  },
  methods: {
    showDetails(id) {
      this.$router.push(`/appointments/details/${id}`)
    },
    editItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = {...item};
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = {...item};
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.items.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = {...this.defaultItem};
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = {...this.defaultItem};
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.items[this.editedIndex], this.editedItem);
      } else {
        this.items.push(this.editedItem);
      }
      this.close();
    },





    viewDay ({ date }) {
      this.focus = date
      this.type = 'day'
    },
    getEventColor (event) {
      return event.color
    },
    setToday () {
      this.focus = ''
    },
    prev () {
      this.$refs.calendar.prev()
    },
    next () {
      this.$refs.calendar.next()
    },
    showEvent ({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        requestAnimationFrame(() => requestAnimationFrame(() => this.selectedOpen = true))
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        requestAnimationFrame(() => requestAnimationFrame(() => open()))
      } else {
        open()
      }

      nativeEvent.stopPropagation()
    },
    rnd (a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
  },
};
</script>

<style lang="sass" scoped>

  .toolbar-margin
    margin-top: 2px

</style>
