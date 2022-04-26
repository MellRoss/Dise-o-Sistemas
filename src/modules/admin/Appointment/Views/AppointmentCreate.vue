<template>
  <v-container class="px-16">
    <Breadcrumbs
        title="Citas"
        subtitle="Administrador de citas"
    ></Breadcrumbs>
    <Card
        :title="`${lock ? 'Asignar' : 'Crear'} cita`"
    >
      <v-row>
        <v-col :cols="lock ? 8 : 12">
          <v-row>
            <v-col cols="6">
              <v-text-field
                  label="Nombre"
                  :disabled="lock"
                  :value="lock ? 'Marcos Diaz' : ''"
                  outlined
                  hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                  label="Código de propiedad"
                  :disabled="lock"
                  :value="lock ? '42' : ''"
                  outlined
                  hide-details
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                  label="Teléfono"
                  :disabled="lock"
                  :value="lock ? '3624453261' : ''"
                  outlined
                  hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                  label="Correo electrónico"
                  :disabled="lock"
                  :value="lock ? 'marcos.diaz@gmail.com' : ''"
                  outlined
                  hide-details
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-col v-if="lock" cols="4">
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
            no-data-text="No hay agentes disponibles"
            outlined
          ></v-select>
        </v-col>
      </v-row>
      <div class="d-flex justify-end">
        <Button
            :text="lock ? 'Asignar' : 'Crear'"
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

export default {
  name: 'AppointmentCreate',
  components: {
    Breadcrumbs,
    Card,
    Button
  },
  data() {
    return {
      lock: !!this.$route.params.id,
      date: null,
      time: null,
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
        title: '¿Esta seguro de crear?',
        actionPrimary: { text: this.lock ? 'Asignar' : 'Crear', callback() {}
        },
        actionSecondary: {
          text: 'Cancelar', callback() {}
        },
        icon: { color: 'success', name: 'mdi-calendar-alert' },
        color: 'success',
      });
      setTimeout(() => {
        this.createButton.success = true
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
