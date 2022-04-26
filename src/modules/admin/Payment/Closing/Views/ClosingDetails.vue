<template>
  <v-container>
    <Card title="Detalles del movimiento">
      <v-row class="ma-0">
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="codigo"
            label="Codigo de la transaccion"
            readonly
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="concepto"
            label="Concepto"
            readonly
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="3">
          <v-text-field
            v-model="monto"
            label="Monto"
            readonly
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="fechaHora"
            label="Fecha y Hora"
            readonly
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="ubicacion"
            label="Ubicacion"
            readonly
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="inquilino"
            label="Inquilino"
            readonly
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="propietario"
            label="Propietario"
            readonly
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <div class="d-flex justify-end">
          <Button
            text="Volver"
            @click="$router.push('/payment/closing/')"
          ></Button>
        </div>
      </v-row>
    </Card>
  </v-container>
</template>

<script>
import Card from '@/components/Card';
import Button from '@/components/Button';

export default {
  name: 'ClosingCreate',
  components: {
    Card,
    Button,
  },
  data() {
    return {
      codigo: '1',
      concepto: 'Pago de alquiler',
      monto: '100',
      fechaHora: '10-10-2010 10:00',
      ubicacion: 'Argentina/Chaco/Resistencia',
      inquilino: 'Inquilino 1',
      propietario: 'Propietario 1'
    };
  },
  methods: {},
};
</script>

<style scoped>
</style>
