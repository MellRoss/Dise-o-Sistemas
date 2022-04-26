<template>
  <v-container>
    <Card title="Informacion del inmueble">
      <v-row class="ma-0">
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-text-field
            v-model="codigo"
            label="Codigo del inmueble"
            filled
            readonly
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="3">
          <v-text-field
            v-model="tipo"
            label="Tipo"
            filled
            readonly
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="3">
          <v-text-field
            v-model="precio"
            label="Precio del inmueble"
            filled
            readonly
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="3">
          <v-text-field
            v-model="antiguedad"
            label="Antiguedad"
            filled
            readonly
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="pais"
            label="Pais"
            filled
            readonly
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="provincia"
            label="Provincia"
            filled
            readonly
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="localidad"
            label="Localidad"
            filled
            readonly
            outlined
          ></v-text-field>
        </v-col>

          <v-col cols="12"  sm="6" md="3">
          <v-text-field
            v-model="codigoPostal"
            label="Codigo Postal"
            filled
            readonly
            outlined
          ></v-text-field>
        </v-col>

          <v-col cols="12" sm="12">
          <v-text-field
            v-model="direccion"
            label="Direccion"
            filled
            readonly
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="barrio"
            label="Barrio"
            filled
            readonly
            outlined
          ></v-text-field>
        </v-col>



        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="calle"
            label="Calle"
            filled
            readonly
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="piso"
            label="Piso"
            filled
            readonly
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="numero"
            label="Numero"
            filled
            readonly
            outlined
          ></v-text-field>
        </v-col>


        <v-col cols="12">
          <v-input>
            <h4>Espacios con los que cuenta</h4>
          </v-input>
          <Table :headers="headers1" :items="items1"></Table>
        </v-col>
        <v-col cols="12">
          <v-input>
            <h4>Artefactos con los que cuenta</h4>
          </v-input>
          <Table :headers="headers2" :items="items2"></Table>
        </v-col>
        <v-col cols="12">
          <v-input>
            <h4>Servicios adheridos</h4>
          </v-input>
          <Table :headers="headers3" :items="items3"></Table>
        </v-col>
      </v-row>
    </Card>

    <Card title="Datos del propietario">
      <v-row class="ma-0">
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="nroCliente"
            label="Numero de cliente"
            filled
            readonly
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
           <v-text-field
            v-model="tipoCliente"
            label="Tipo de cliente"
            filled
            readonly
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
           <v-text-field
            v-model="nomApe"
            label="Nombre y apellido"
            filled
            readonly
            outlined
          ></v-text-field>
        </v-col>
<v-col cols="12" sm="6" md="3">
           <v-text-field
            v-model="dni"
            label="DNI"
            filled
            readonly
            outlined
          ></v-text-field>
        </v-col>
<v-col cols="12" sm="6" md="3">
           <v-text-field
            v-model="telefono"
            label="Telefono"
            filled
            readonly
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
           <v-text-field
            v-model="correo"
            label="Correo"
            filled
            readonly
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
           <v-text-field
            v-model="dirProp"
            label="Direccion del propietario"
            filled
            readonly
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="ma-0">
        <v-col cols="4" sm="6">
          <Button
            text="Asentar el pago"
            @click="$router.push('/payment/paying/create2')"
          ></Button>
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
import Table from '@/components/Table';
export default {
  name: 'PayingCreate',
  components: {
    Card,
    Button,
    Table,
  },
  data() {
    return {
      headers1: [
        {
          text: 'Espacios',
          align: 'start',
          value: 'espacio',
          class: 'text-subtitle-2',
        },
      ],
      headers2: [
        {
          text: 'Artefactos',
          align: 'start',
          value: 'artefacto',
          class: 'text-subtitle-2',
        },
      ],
      headers3: [
        {
          text: 'Servicios',
          align: 'start',
          value: 'servicio',
          class: 'text-subtitle-2',
        },
      ],
      items1: [
        {
          espacio: 'Espacio',
        },
      ],
      items2: [
        {
          artefacto: 'Artefacto',
        },
        {
          artefacto: 'Artefacto 2',
        },
      ],
      items3: [
        {
          servicio: 'Agua',
        },
        {
          servicio: 'Luz',
        },
        {
          servicio: 'Telefono',
        },
      ],
      inquilino: 'Inquilino 1',
      propietario: 'Propietario 1',
      precio: 100,
      fecha: '10-10-2001',
      numero: '',
      año: 2021,
      total: 0,
      mora: 0,
      formaDePago: ['Efectivo', 'Tarjeta'],
      antiguedad: 5,
      tipo:'Departamento',
      pais:'Argentina',
      provincia:'Chaco',
      localidad:'Resistencia',
      barrio: '',
      direccion:'Direccion 1',
      calle:'',
      piso: '',
      codigoPostal:'3500',
      nroCliente:'1',
      tipoCliente:'Corporativo',
      nomApe:'Cliente corporativo 1',
      dni:'101',
      telefono:'12343546565',
      dirProp:'Direccion del propietario',
      correo:'Correo del propietario ',
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
