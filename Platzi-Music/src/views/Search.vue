<template>
  <v-container grid-list-xl fluid>
    <v-layout  wrap >
      <v-flex
          xs12 md8 
          color="blue"
          pb-0
        >
          <v-text-field
            @keyup.enter="search"
            label="Buscar Canciones"
            required
            v-model="searchQuery"
          ></v-text-field>
        </v-flex>
        <v-flex xs6 pa-1 md2 color="red" >
          <v-btn block color="success"  @click="search">
            Buscar</v-btn>
        </v-flex>    
        <v-flex xs6 pa-1 md2 color="red" >
          <v-btn block color="error"  >
            Cancelar</v-btn>
        </v-flex>
    <pm-loader :dialog="isLoading"></pm-loader>
    </v-layout>

    <v-layout  justify-center>
      <v-flex xs12  >
            <v-card  >
            <v-toolbar color="cyan" dark>
            <v-toolbar-title>Canciones {{searchMessage}}</v-toolbar-title>
            </v-toolbar>
            </v-card>
                <pm-notification :type="notification.type" :alert="notification.show" >
                  <v-layout slot="message">
                    <v-flex xs12>
                      {{notification.message}}
                    </v-flex>
                  </v-layout>
                </pm-notification>
            <v-container  >
            <v-layout> 
            <v-flex >
              <v-container fluid grid-list-xs>
             <v-layout row wrap justify-center>
              <v-flex xs12 sm4  lg3
                  class="pb-4 "
                  v-for="t in tracks"
                  :key="t.id" >
              <pm-track 
              v-blur="t.preview_url"
              :color="(t.id===selectedTrack)  ? 'green lighten-1 ' : 'green lighten-3 '" 
              :track="t" @select="setSelectedTrack" />
              </v-flex>
            </v-layout>
             </v-container>
            </v-flex>
            </v-layout>
          </v-container>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapActions  } from 'vuex'

  import PmTrack from "@/components/Track.vue"
  import PmLoader from "@/components/shared/Loader.vue"
  import PmNotification from "@/components/shared/Notification.vue"
  import { setTimeout } from 'timers';

  export default {
    components: {
     PmTrack,
     PmLoader,
     PmNotification,
    },
    data(){
      return {
        searchQuery:'',
        tracks:[],
        isLoading:false,
        selectedTrack:'',
        notification:{
          type:'success',
          show:false,
          message:''
        }
      }
    },
    computed:{
      searchMessage(){
        return `Encontradas: ${this.tracks.length}`
      }
    },
    watch:{
      'notification.show': function(newVal, oldVal){
         if(this.notification.show){
          setTimeout(() => {
            this.notification.show=false;
          }, 1500);
        }
      }
      
    },
    methods: {
       ...mapActions(['searchSong']),
      search(){
        if(this.searchQuery.trim()===''){
          this.showNotification('warning',"Ingrese un nombre valido")
          }else{
              this.isLoading=true;
              this.searchSong({q:this.searchQuery})
            .then(res => {
                console.log(res);
                if(res.tracks.total===0){
                this.isLoading=false;
                this.showNotification('error',"No se encontraron canciones")
                this.tracks= []
                }else{
                this.tracks= res.tracks.items
                this.isLoading=false;
                }
          })
          .catch(error =>{
              this.isLoading=false;
              this.showNotification('error',"Ocurrio un error,intente mas tarde")
            this.tracks= []
          })
      }
      },
      setSelectedTrack(id){  
        this.selectedTrack=id;
      },
      showNotification(type,message){
        this.notification.type=type;
        this.notification.message=message;
        this.notification.show=true;

      }

    }
  }
</script>
<style>
 .scroll {
      overflow-y: auto;
    }
  .is-active{
    border:3px #fffb02
  }
</style>

