<template>
  <v-container>
    <Card title="Rellenar los datos">
      <v-row class="ma-0">
        <v-col cols="10" class="py-6 px-12">
          <v-row class="ma-0">
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="fecha"
                label="Fecha"
                outlined
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="hora"
                label="Hora"
                outlined
                readonly
              ></v-text-field>
            </v-col>
             <v-col cols="12" sm="6">
             <v-text-field

            label="Concepto"
              type="number"
              outlined
              min="0"
              value="0"
          ></v-text-field>
             </v-col>
           <v-col cols="12" sm="6">
          <v-text-field

            label="Monto"
              type="number"
              outlined
              min="0"
              value="0"
          ></v-text-field>
           </v-col>
            <v-row class="ma-0">
              <v-col cols="12" sm="6">
                <v-select
                  :items="tipoMov"
                  label="Tipo de Movimiento"
                  outlined
                ></v-select>
              </v-col>
            </v-row>
          </v-row>
        </v-col>
        <v-row class="ma-0">
        <v-col cols="4" sm="6">
          <Button text="Agregar" @click="openPopup"></Button>
        </v-col>

        <v-col cols="4" sm="6">
          <v-btn
            color="secondary"
            @click="$router.push('/payment/stocktaking/')"
            rounded
            large
          >
            Volver
          </v-btn>
        </v-col>
      </v-row>
      </v-row>

    </Card>
  </v-container>
</template>

<script>
import Card from '@/components/Card';
import Button from '@/components/Button';

export default {
  name: 'StocktakingCreate',
  components: {
    Card,
    Button,
  },
   data() {
    return {
      fecha :'19-05-2021',
      hora:'22:30',
      tipoMov:['Entrada','Salida'],
    };
  },
  methods: {
    openPopup() {
      this.$store.dispatch('commons/openPopUp', {
        title: '¿Esta seguro de crear el informe?',
        actionPrimary: {
          text: 'Crear',
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
