import { default } from '../../views/Home.vue';
<template>
 <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <v-spacer></v-spacer>
        <strong class="subheading">Contacto</strong>
        <v-btn
          class="mx-3"
          dark
          icon
          href="https://github.com/DevAbraham"
        >
          <v-icon size="24px">shared</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-actions class="grey darken-3 justify-center">
         <p>Platzi Music Proyect Vue.Js &copy;{{ new Date().getFullYear() }} — <strong>Vuetify</strong></p>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>