<template>

  <v-container>

    <Card title="Informacion del cliente">
      <Breadcrumbs title="Pagos" subtitle="RegistrarRegistrar un pago por alquiler"> </Breadcrumbs>
      <v-row class="ma-0">
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="inquilino"
            label="Inquilino"
            filled
            readonly
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="propietario"
            label="propietario"
            filled
            readonly
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="precio"
            label="Precio del alquiler"
            filled
            readonly
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="fecha"
            label="Fecha del pago"
            filled
            readonly
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="numero"
            label="Numero de la transaccion"
            filled
            readonly
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
    </Card>

    <Card title="Rellene los siguientes datos"   outlined>

      <v-row class="ma-0">
        <v-col cols="12" sm="6">
          <v-select outlined :items="mes" label="Mes"> </v-select>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            outlined
            v-model="año"
            label="Año"
            type="number"
            min="1900"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            outlined
            v-model="mora"
            label="Interes por mora"
            type="number"
            min="0"
            value="0"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="total"
            label="Total a pagar"
            type="number"
            outlined
             min="0"
            value="0"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-select
            outlined
            :items="formaDePago"
            label="Forma de Pago"
          ></v-select>
        </v-col>
      </v-row>
      <v-row class="ma-0">
        <v-col cols="4" sm="6">
          <Button text="Asentar el pago" @click="openPopup"></Button>
        </v-col>
        <v-col cols="4" sm="6">
          <v-btn
            color="secondary"
            @click="$router.push('/payment/paying/')"
            rounded
            large
          >
            Volver
          </v-btn>
        </v-col>
      </v-row>
    </Card>
  </v-container>
</template>

<script>
import Card from '@/components/Card';
import Button from '@/components/Button';

export default {
  name: 'PayingAlquiler',
  components: {
    Card,
    Button,
  },
  data() {
    return {
      inquilino: 'Inquilino 1',
      propietario: 'Propietario 1',
      precio: 100,
      fecha: '10-10-2001',
      numero: 1,
      mes: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
      ],
      año: 2021,
      total: 0,
      mora: 0,
      formaDePago: ['Efectivo', 'Tarjeta'],
    };
  },
  methods: {
    openPopup() {
      this.$store.dispatch('commons/openPopUp', {
        title: '¿Esta seguro de realizar la operacion?',
        actionPrimary: {
          text: 'Realizar pago',
          callback() {

          },
        },
        actionSecondary: {
          text: 'Cancelar',
          callback() {},
        },
        icon: { color: 'success', name: 'mdi-check' },
        color: 'success',
      });
    },
  },
};
</script>

<style scoped>
</style>
