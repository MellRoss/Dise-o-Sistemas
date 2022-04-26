<template>
  <v-container class="px-16">
    <Breadcrumbs
        title="Citas"
        subtitle="Administrador de citas"
    ></Breadcrumbs>
    <Card
        title="Detalles cita"
    >
      <v-row>
        <v-col cols="6">
          <v-text-field
              label="Nombre"
              readonly
              value="Jorge"
              outlined
              hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
              label="Fecha y hora"
              readonly
              value="25/05/2021 16:00"
              outlined
              hide-details
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-text-field
              label="Teléfono"
              readonly
              value="3624731145"
              outlined
              hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
              label="Correo electrónico"
              readonly
              value="jorge@gmail.com"
              outlined
              hide-details
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-text-field
              label="Código de propiedad"
              readonly
              value="67"
              outlined
              hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
              label="Tipo de actividad"
              readonly
              value="Venta"
              outlined
              hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
              label="Estado"
              readonly
              value="En proceso"
              outlined
              hide-details
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.8354454902938!2d-58.986979185278805!3d-27.443238622147593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94450c5ecfa1554d%3A0x3c62dcd02fdbeb7d!2sLiniers%20603%2C%20H3508CZA%20Resistencia%2C%20Chaco!5e0!3m2!1ses-419!2sar!4v1622064869488!5m2!1ses-419!2sar"
              width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </v-col>
      </v-row>
    </Card>
  </v-container>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs';
import Card from '@/components/Card';

export default {
  name: 'AppointmentDetails',
  components: {
    Breadcrumbs,
    Card
  }
}
</script>

<style scoped>

</style>
