<template>
  <v-btn
      rounded
      large
      :outlined="outlined"
      :disabled="disabled"
      :loading="loading"
      @mouseleave="hover=false"
      @mouseover="hover=true"
      :elevation="hover ? 8 : 0"
      :color="success ? 'success' : (error ? 'error' : (alternative ? 'white' : 'secondary'))"
      @click="$emit('click')"
  >
    <v-icon>{{ success ? 'mdi-check' : (error ? 'mdi-alert-circle' : '') }}</v-icon>
    <template v-if="!success && !error">{{ text }}</template>
  </v-btn>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    alternative: { type: Boolean, default: false },
    outlined: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    success: { type: Boolean, default: false },
    error: { type: Boolean, default: false }
  },
  data() {
    return {
      hover: false,
    }
  },
  watch: {
    success (val) {
      if (val) {
        setTimeout(() => {
          this.buttonState = 'success';
          setTimeout(() => {
            this.buttonState = null;
            this.$emit('end');
          }, 1500)
        }, 1000)
      }
    },
    error (val) {
      if (val) {
        setTimeout(() => {
          this.buttonState = 'error';
          setTimeout(() => {
            this.buttonState = null;
            this.$emit('end');
          }, 3000)
        }, 1000)
      }
    },
  },
}
</script>

<style scoped>

</style>
