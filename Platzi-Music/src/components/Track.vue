<template>
    <v-card v-if="track && track.album"  max-width="300" :color="(color)  ? color : 'green lighten-3 '" 
       pt-5 wrap >
              <v-container>
              <v-layout align-center wrap  > 
                <v-flex xs12 pt-1>
                   <v-img 
                    :src="track.album.images[0].url"
                    aspect-ratio="1" max-height="200"
                    contain
                  ></v-img>
                </v-flex>
              </v-layout>
              <v-layout align-center wrap  > 
                <v-flex xs12>                  
                      <div class="title font-weight-light">{{track.name}}</div>
                      <div >{{track.artists[0].name}}</div>
                      <div>{{track.album.release_date}}</div>
                      <div>Duracion: {{track.duration_ms|ms-to-mm}} Min</div>                 
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="">
               <v-btn
                color="light-green accent-4 "
                class="white--text"
                icon
                @click="selectTrack"
                 >
                <v-icon  dark>play_arrow</v-icon>
              </v-btn>
              <v-btn
                color="light-yellow accent-4 "
                class="white--text"
                icon
                @click="goToTrack(track.id)"
                 >
                <v-icon  dark>open_in_new</v-icon>
              </v-btn>
              </v-card-actions>
              </v-container>
            </v-card>
</template>

<script>
import trackMixin from '@/mixins/track'

export default {
    mixins:[trackMixin],
    props:{
        track: { type: Object, required:true },
        color:{ }
    },
    methods:{
      
      goToTrack(id){
        if(!this.track.preview_url){return}
        this.selectTrack();
        this.$router.push({name:'track_id',params:{id}})
      }
    }
}
</script>