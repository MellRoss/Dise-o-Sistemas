<template>
  <v-container fluid class="pa-0 ma-0">
  <div class="d-flex justify-center position-home-form">
  <v-img v-bind:src="require('@/assets/7.jpg')" style="filter:brightness(75%);"></v-img>
      <div class="d-flex align-center justify-center login-card-height white px-12">
      <v-col class="text-center">
        <h1 class="display-1 font-weight-thin mb-4 teal--text">Domus</h1>
        <v-card flat>
          <v-card-title>Iniciar sesión</v-card-title>
          <v-card-text>
            <v-text-field label="Usuario" outlined></v-text-field>
            <v-text-field
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show ? 'text' : 'password'"
                label="Contraseña"
                hint="Al menos 8 caracteres"
                outlined
                class="input-group--focused"
                @click:append="show = !show"
            ></v-text-field>
          </v-card-text>
          <v-card-actions class="d-flex justify-center">
            <Button text="Siguiente" @click="login"></Button>
          </v-card-actions>
        </v-card>
      </v-col>
  </div>
  </div>


  </v-container>
</template>

<script>
import Button from '@/components/Button';

export default {
  name: 'LoginForm',
  components: {
    Button
  },
  methods: {
    login() {
      this.$store.dispatch('commons/login')
      this.$router.push(this.$route.query.redirect || '/')
    }
  },

  data () {
    return {
      show: false,
      items: [
        {
          src: require('@/assets/4.jpg')
        },
        {
          src: require('@/assets/5.jpg')
        },
        {
          src: require('@/assets/3.jpg'),
        },
      ],
      rules: {
        required: value => !!value || 'Requerido',
        min: v => v.length >= 8 || 'Mínimo 8 caracteres',
      },
    }
  },
}
</script>

<style scoped>
.position-home-form{
  position: relative;
  height: 100vh ;

}

.login-card-height{
  position: absolute;
  height: 100vh;

}

</style>
