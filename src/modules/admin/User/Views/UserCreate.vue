import { required } from 'vee-validate/dist/rules';
<template>
<v-container class="px-16">
      <Breadcrumbs
          title="Nuevo usuario"
      ></Breadcrumbs>
  <Card
    title="Crear usuario"
  >
  <v-form v-model="valid" >
      <v-row>
          <v-col
            cols="6"
          >
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="75"
              label="Nombre"
              required
              outlined
            ></v-text-field>
          </v-col>

          <v-col
            cols="6"
          >
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="75"
              label="Apellido"
              required
              outlined
            ></v-text-field>
          </v-col>
      </v-row>

      <v-row>
          <v-col
            cols="6"
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
              outlined
            ></v-text-field>
          </v-col>

          <v-col
            cols="6"
          >
            <v-text-field
              v-model="dni"
              :rules="dniRules"
              :counter="8"
              type="number"
              label="DNI"
              required
              outlined
            ></v-text-field>
          </v-col>
      </v-row>

      <v-row>
          <v-col
        cols="6"
      >
        <v-text-field
          v-model="nroTelefono"
          :rules="telefonoRules"
          type="number"
          label="Numero de telefono"
          required
          outlined
        ></v-text-field>
      </v-col>

          <v-col
        cols="6"
      >
        <v-text-field
          v-model="nroAlternativo"
          :rules="[telefonoRules.length]"
          type="number"
          label="Numero de telefono alternativo"
          outlined
        ></v-text-field>
      </v-col>
      </v-row>

      <v-row>
          <v-col
          cols="6"
        >
          <v-text-field
            v-model="usuario"
            :rules="usuarioRules"
            label="Nombre de usuario"
            required
            outlined
          ></v-text-field>
        </v-col>

         <v-col
        cols="6"
      >
        <v-text-field
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rulesPas.required, rulesPas.min]"
          :type="show1 ? 'text' : 'password'"
          label="Contraseña"
          hint="Minimo 8 caracteres"
          counter
          class="input-group--focused"
          @click:append="show1 = !show1"
          outlined
        ></v-text-field>
      </v-col>
      </v-row>

      <v-row>
        <v-col
            cols="6"
        >
          <v-select
              v-model="rol"
              :rules="rolRules"
              label="Rol"
              required
              outlined
            ></v-select>
          </v-col>
          </v-row>
<!-- -->

    <v-row class="d-flex justify-end">
      <v-col
        cols="4"
        md="2"
      >
    <Button
      text="Cancelar"
      alternative
      @click="$router.push('/users/')"
    ></Button>
      </v-col>
      <v-col
        cols="4"
        md="2"
      >
    <Button
      text="Confirmar"
    ></Button>
      </v-col>

    </v-row>
    </v-form>
  </Card>

  </v-container>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs';
import Button from '@/components/Button';
import Card from '@/components/Card';
export default {
name: 'UserCreate',
components: {
  Card,
  Breadcrumbs,
  Button,
},

    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Campo requerido',
        v => v.length <= 75 || 'Debe contener menos de 75 caracteres.',
      ],
      email: '',
      emailRules: [
        v => !!v || 'Campo requerido',
        v => /.+@.+/.test(v) || 'El e-mail debe ser valido.',
      ],
      dni: '',
      dniRules: [
        v => !!v || 'Campo requerido',
        v => v.length <= 8 || 'El DNI debe contener 8 digitos.',
      ],
      nroTelefono: '',
      nroAlternativo: '',
      telefonoRules: [
        v => !!v || 'Campo requerido',
        v => v.length >= 10 || 'Debe contener como minimo 10 digitos.',
      ],
      usuario: '',
      usuarioRules: [
        v => !!v || 'Campo requerido',
        v => v.length >= 4 || 'Debe contener minimo 4 caracteres.',
      ],
      rol: '',
      rolRules: [
        v => !!v || 'Campo requerido',
      ],

      show1: false,
      password: '',
      rulesPas: {
        required: value => !!value || 'Campo requerido.',
        min: v => v.length >= 8 || 'Minimo 8 caracteres',
      },
      overlay: false,
      zIndex: 0,
    }),
}

</script>

<style scoped>

</style>
