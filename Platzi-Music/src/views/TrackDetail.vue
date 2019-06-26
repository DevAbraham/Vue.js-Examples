<template>
    <v-container>
        <v-layout>
            <v-flex>
                <v-card v-if="track && track.album">
                    <v-toolbar color="cyan" dark>
                    <v-btn icon
                        @click="anterior">
                        <v-icon>arrow_back</v-icon>
                    </v-btn>
                    <v-toolbar-title>{{trackTitle}}</v-toolbar-title>
                    </v-toolbar>
                        <v-flex xs12 pa-3>
                        <v-img 
                            :src="track.album.images[0].url"
                            aspect-ratio="1" max-height="200"
                            contain
                            ></v-img>
                            </v-flex>
                    <v-list two-line>
                    <template v-for="(item, index) in track">
                        <v-list-tile
                        :key="index"
                        >
                        <v-list-tile-content>
                            <v-list-tile-title >{{item}}</v-list-tile-title>
                            <v-list-tile-sub-title >{{index}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                        </v-list-tile>
                    </template>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
import {mapState , mapActions ,mapGetters } from 'vuex'

export default {

    computed :{
        ...mapState(['track']),
        ...mapGetters(['trackTitle'])
    },
    created (){
        const id = this.$route.params.id
        if(!this.track || !this.track.id || this.track.id!= id ){
         this.getTrackById({id})
            .then ( res => {
                console.log(res)
            })
        }
    },
    methods: {
        ...mapActions(['getTrackById']),
        anterior(){
            this.$router.go(-1)
        }
    },

}
</script>

