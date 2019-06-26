<template>
    <v-container>
        <v-layout justify-end>
          <v-flex xs12 md8 >
            <v-card v-if="track&&track.album">
              <v-layout>
                <v-flex xs5>
                  <v-img
                    :src="track.album.images[0].url"
                    height="100px"
                    pa-5
                    contain
                  ></v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">{{track.name}}</div>
                      <div> {{track.artists[0].name}}</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                  <audio :src="track.preview_url" controls>

                    </audio>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import {mapState} from 'vuex'

export default {
computed:{
  ...mapState(['track'])
}   
}
</script>
