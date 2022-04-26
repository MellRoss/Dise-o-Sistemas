<template>
  <v-container>

      <Card
        title="Rellenar los datos"
    >
      <v-row class="ma-0">

        <v-col cols="12" sm="6">
         <v-select
          :items="tipoVenta"
          label="Tipo de Venta"
          outlined
        ></v-select>
           </v-col>


         <v-col cols="12" sm="6">
          <v-text-field
             min="0"
              value="0"
            label="Porcentaje de comision"
            outlined
              type="number"
          ></v-text-field>
          </v-col>

           <v-col cols="12" sm="6">
          <v-text-field

            label="Precio"
              type="number"
              outlined
              min="0"
              value="0"
          ></v-text-field>
          </v-col>

        <v-col cols="12" sm="6">
          <v-select
          :items="moneda"
          label="Moneda"
          outlined
        ></v-select>
  </v-col>
             <v-col cols="12" sm="6">
         <v-select
          :items="formaDePago"
          label="Forma de Pago"
          outlined
        ></v-select>
          </v-col>

      </v-row>
      <v-row class="ma-0">
      <v-col cols="4" sm="6">
          <Button
            text="Asentar el pago"
             @click="openPopup"
        ></Button>
        </v-col>
        <v-col cols="4" sm="6">
          <v-btn
            color="secondary"
            @click="$router.push('/payment/paying/create')"
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
name: 'PayingCreate2',
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
   tipo: ['Departamento','Casa','Chalet','Local','Casa con local','Cabaña','cochera'],
     año:2021,
     total:0,
     mora:0,
      formaDePago: ['Efectivo', 'Tarjeta'],
      tipoVenta:['Financiada','Total'],
      moneda:['Peso','Dolar'],
    }


   },
  methods: {
    openPopup() {
      this.$store.dispatch('commons/openPopUp', {
        title: '¿Esta seguro de realizar la operacion?',
        actionPrimary: { text: 'Realizar pago', callback() {} },
        actionSecondary: {
          text: 'Cancelar', callback() {}
        },
        icon: { color: 'success', name: 'mdi-check' },
        color: 'success',
      });
    }
  }
}

</script>

<style scoped>

</style>
