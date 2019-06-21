<template>
  <v-container>
      <v-layout align-center justify-center row>
         <v-flex xs8 text-xs-center >
             <v-card class="mt-5">
                <v-toolbar color="blue" >
                    <v-toolbar-title>Lista De Frutas Con Vuex</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>

                <v-list>
                    <v-list-tile
                        v-for="(item,index) in arrayOrdenado"
                        :key="item.id"
                        avatar
                    >
                        <v-list-tile-avatar>
                        <img :src="item.url">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                        <v-list-tile-title v-text="item.nombre"></v-list-tile-title>
                        <v-list-tile-sub-title>Cantidad: {{ item.cantidad }}</v-list-tile-sub-title>
                        </v-list-tile-content>

                        <v-list-tile-action>
                        <v-btn  @click="aumentar(index)" icon ripple color="green lighten-1">
                            <v-icon color="white">add</v-icon>
                        </v-btn>
                        </v-list-tile-action>

                    </v-list-tile>
                </v-list>
             
                <v-card-text >
                    <v-btn @click="reiniciar" block color="error" dark >
                        Reiniciar Contadores 
                        <v-icon dark right>autorenew</v-icon>
                    </v-btn>
                </v-card-text>
             </v-card>

         </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
import { mapState , mapMutations } from "vuex";

export default {
    computed:{
        ...mapState(['frutas']),
        arrayOrdenado(){
            return this.frutas.sort((a , b) => b.cantidad  - a.cantidad)
        }
    },
    methods:{
        ...mapMutations(['aumentar','reiniciar'])
    }
}
</script>
