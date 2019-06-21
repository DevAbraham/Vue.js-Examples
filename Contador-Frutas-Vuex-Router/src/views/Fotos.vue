<template>
    <v-container grid-list-xl>
        <v-layout row >

             <v-flex xs6>
             <v-card  color="danger">
                <v-list>
                    <v-list-tile
                        v-for="(item,index) in fotosArray"
                        :key="item.id"
                        avatar
                    >
                        <v-list-tile-content>
                        <v-list-tile-title >Fotografias {{index}}</v-list-tile-title>
                        
                        <v-list-tile-sub-title>Fotografia Numero: {{item}}</v-list-tile-sub-title>
                        </v-list-tile-content>

                        <v-list-tile-action>
                            
                        <v-btn block :to="{name:'fotos',params:{id:item}}"  color="green lighten-1">
                            <v-icon color="white">add</v-icon>
                        </v-btn>
                        </v-list-tile-action>

                    </v-list-tile>
                </v-list>
             </v-card>
            </v-flex>
            <v-flex xs6>
                <v-card>
                      <Foto/>
                </v-card>
            </v-flex>
        </v-layout>
            <v-layout align-center justify-center row>
              <v-flex xs6 text-xs-center >

            <v-btn @click="home" block color="error" dark >
                        Home
            <v-icon dark right>autorenew</v-icon>
            </v-btn>
            <v-btn @click="anterior" block color="warning" dark >
                        Anterior
            <v-icon dark right>autorenew</v-icon>
            </v-btn>
            <v-btn @click="siguiente" block color="success" dark >
                        Siguiente
            <v-icon dark right>autorenew</v-icon>
            </v-btn>

                </v-flex>
            </v-layout>
    </v-container>
</template>

<script>
import  Foto  from "@/components/Fotografia.vue";
export default {
    name:'Fotos',
    components:{
        Foto
    },
    data(){
        return{
            fotosArray:[0,1,2]
        }
    },
    methods:{
        home(){
            this.$router.push('/');
        },
        anterior(){
            this.$router.go(-1)
        },
        siguiente(){
            this.$router.go(1)
        }
    }
}
</script>
