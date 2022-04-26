<template>
  <div v-if="active" class="alertPopup">
    <v-card v-show="active" class="pa-10 d-flex flex-column justify-center align-center alertPopup__content">
      <div class="pb-5 alertPopup__icon">
        <template v-if="icon">
          <div :class="['circle', 'color-' + icon.color, 'text-center', 'mx-auto']">
            <v-icon size="60" color="white" :class="['icon', 'color-' + icon.color]"> {{ icon.name }} </v-icon>
          </div>
        </template>
      </div>
      <v-card-title :class="['headline', color + '--text', 'text-center', 'd-block']"> {{ title }} </v-card-title>
      <v-card-actions class="d-flex justify-space-around mt-4">
        <Button
            v-if="actionSecondary"
            alternative
            :text="actionSecondary.text"
            @click="()=>action(actionSecondary.callback)"
            class="px-6 mx-4"
        ></Button>
        <Button
            v-if="actionPrimary"
            :text="actionPrimary.text"
            @click="()=>action(actionPrimary.callback)"
            class="px-6 mx-4"
        ></Button>
      </v-card-actions>
    </v-card>
  </div>
  <!--<v-dialog
      v-model="active"
      persistent
  >
    <v-card>
      <div class="d-flex justify-center">
        <v-alert
            :color="icon.color"
            dark
            dense
            :icon="icon.name"
            prominent
        ></v-alert>
      </div>
      <v-card-title> {{ title }} </v-card-title>
      <v-card-actions class="d-flex justify-space-around mt-4">
        <Button
            text="Cerrar"
            @click="action(actionSecondary.callback)"
        ></Button>
        <Button
            text="Confirmar"
            @click="action(actionPrimary.callback)"
        ></Button>
       &lt;!&ndash; <v-btn v-if="actionSecondary" rounded large text @click="()=>cancel(actionSecondary.callback)" class="px-6 mx-4">
          {{ actionSecondary.text }} </v-btn>
        <v-btn v-if="actionPrimary" rounded :color="color" class="px-6 mx-4" large dark
               @click="()=>confirm(actionPrimary.callback)"> {{ actionPrimary.text }} </v-btn>&ndash;&gt;
      </v-card-actions>
    </v-card>
  </v-dialog>-->
</template>

<script>
import Button from '@/components/Button';
import { mapActions } from 'vuex';

export default {
  name: 'Popup',
  components: {
    Button
  },
  computed: {
    active() {
      return !!this.$store.state.commons.popup
    },
    title() {
      return this.$store.state.commons.popup.title
    },
    actionPrimary() {
      return this.$store.getters['commons/getProp']('popup.actionPrimary', this.$store.state.commons)
    },
    actionSecondary() {
      return this.$store.getters['commons/getProp']('popup.actionSecondary', this.$store.state.commons)
    },
    icon() {
      return this.$store.getters['commons/getProp']('popup.icon', this.$store.state.commons)
    },
    color() {
      return this.$store.getters['commons/getProp']('popup.color', this.$store.state.commons)
    },
  },
  methods: {
    ...mapActions(['commons/closePopUp']),
    action (callback) {
      callback();
      this['commons/closePopUp']();
    },
  },
}
</script>

<style lang="sass" scoped>

.alertPopup
  position: absolute
  z-index: 99
  top: 0
  left: 0
  width: 100vw
  height: 100%
  background: rgba(0, 0, 0, 0.2)

  &__content
    min-width: 30vw
    max-width: 40vw
    position: fixed
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 20px 50px rgba(0, 0, 0, 0.2)
    .headline, .title, .subtitle
      word-break: break-word !important
  &__icon
    width: fit-content

  .circle
    border-radius: 50% !important

  .icon
    margin: 35px
    padding: 15px
    position: relative
    border-radius: 50%

  @mixin syntax-colors($error: '', $success: '', $warning: '', $info: '')
    .circle.color-error
      background-color: var(--v-#{$error}-lighten5)
    .icon.color-error
      background-color: var(--v-#{$error}-base)

    .circle.color-success
      background-color: var(--v-#{$success}-lighten5)
    .icon.color-success
      background-color: var(--v-#{$success}-base)

    .circle.color-warning
      background-color: var(--v-#{$warning}-lighten5)
    .icon.color-warning
      background-color: var(--v-#{$warning}-base)

    .circle.color-info
      background-color: var(--v-#{$info}-lighten5)
    .icon.color-info
      background-color: var(--v-#{$info}-base)

  @include syntax-colors($error: 'error', $success: 'success', $warning: 'warning', $info: 'info')

</style>
