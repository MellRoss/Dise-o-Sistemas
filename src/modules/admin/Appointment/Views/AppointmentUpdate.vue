<template>
  <v-container class="px-16">
    <Breadcrumbs
        title="Citas"
        subtitle="Administrador de citas"
    ></Breadcrumbs>
    <Card
        title="Editar cita"
    >
      <v-row>
        <v-col cols="8">
          <v-row>
            <v-col cols="6">
              <v-text-field
                  label="Nombre"
                  disabled
                  value="Jorge"
                  outlined
                  hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                  label="Código de propiedad"
                  disabled
                  value="67"
                  outlined
                  hide-details
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                  label="Teléfono"
                  disabled
                  value="3624731145"
                  outlined
                  hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                  label="Correo electrónico"
                  disabled
                  value="jorge@gmail.com"
                  outlined
                  hide-details
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="4">
          <v-textarea
              label="Días y horarios disponibles"
              value="Lunes, Martes y Jueves de 15:00 a 18:00"
              height="136px"
              outlined
              no-resize
              disabled
              hide-details
          ></v-textarea>
        </v-col>
      </v-row>
      <v-divider class="my-8"></v-divider>
      <v-row>
        <v-col cols="4">
          <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                  v-model="dateFormatted"
                  label="Fecha"
                  append-icon="mdi-calendar"
                  readonly
                  outlined
                  @blur="date = parseDate(dateFormatted)"
                  hide-details
                  v-bind="attrs"
                  v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
                v-model="date"
                no-title
                scrollable
                color="secondary"
                :min="new Date().toISOString().substr(0, 10)"
            >
              <v-spacer></v-spacer>
              <v-btn
                  text
                  color="primary"
                  @click="menu = false"
              >
                Cancelar
              </v-btn>
              <v-btn
                  text
                  color="primary"
                  @click="$refs.menu.save(date)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="4">
          <v-menu
              ref="menu2"
              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="time"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                  v-model="time"
                  label="Hora"
                  append-icon="mdi-clock-time-four-outline"
                  hide-details
                  outlined
                  readonly
                  v-bind="attrs"
                  v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
                v-if="menu2"
                v-model="time"
                color="secondary"
                no-title
                full-width
                @click:minute="$refs.menu2.save(time)"
            ></v-time-picker>
          </v-menu>
        </v-col>
        <v-col cols="4">
          <v-select
              label="Agente"
              :items="['Marcelo Perez', 'Laura Ruiz']"
              value="Marcelo Perez"
              no-data-text="No hay agentes disponibles"
              hide-details
              outlined
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4" class="d-flex mx-auto">
          <v-select
              label="Estado"
              :items="['Pendiente', 'En proceso', 'Finalizada', 'Cancelada']"
              value="En proceso"
              outlined
              hide-details
          ></v-select>
        </v-col>
      </v-row>
      <div class="d-flex justify-end">
        <Button
            text="Guardar"
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
import moment from 'moment';

export default {
  name: 'AppointmentUpdate',
  components: {
    Breadcrumbs,
    Card,
    Button
  },
  data() {
    return {
      date: moment(25, 'DD').toISOString().substr(0, 10),
      time: '16:00',
      menu: false,
      menu2: false,
      modal: false,
      modal2: false,
      createButton: {
        loading: false,
        success: false,
        error: false
      },
    }
  },
  computed: {
    dateFormatted() {
      if (!this.date) return null
      const [year, month, day] = this.date.split('-')
      return `${day}/${month}/${year}`
    }
  },
  methods: {
    openPopup() {
      this.createButton.loading = true
      this.$store.dispatch('commons/openPopUp', {
        title: '¿Esta seguro de guardar?',
        actionPrimary: { text: 'Guardar', callback() {  } },
        actionSecondary: {
          text: 'Cancelar', callback() {}
        },
        icon: { color: 'success', name: 'mdi-calendar-sync' },
        color: 'success',
      });
      setTimeout(() => {
        this.createButton.error = true
        this.createButton.loading = false
        setTimeout(() => {
          this.resetButtonValues()
        },1000)
      },2000)
    },
    parseDate (date) {
      if (!date) return null
      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
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
