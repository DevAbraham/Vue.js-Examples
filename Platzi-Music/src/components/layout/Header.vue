<template>
     <v-card flat>
     <v-toolbar
      color="accent"
      dark
      flat
     >
    <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        to="/"
      >
        <span class="mr-2">Search</span>
        <v-icon>home</v-icon>
      </v-btn>
    </v-toolbar>
    <v-layout row pb-2 v-if="track && track.id">
      <v-flex xs12  md6 offset-md2>
             <pm-player/>
      </v-flex>
    </v-layout>
  </v-card>  
</template>

<script>
import PmPlayer from '@/components/Player.vue'
import {mapState} from 'vuex'

export default {
  components:{
    PmPlayer
  },
  computed:{
    ...mapState(['track'])
  }   
}
</script>