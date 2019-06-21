<template>
    <v-container>
        <v-layout>
            <v-flex>
                <h1>Fotografia {{$route.params.id}}</h1>
                 <img :src="frutas[$route.params.id].url"  width="400" height="150">
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import { mapState , mapMutations } from "vuex";

export default {
    name:'Foto',
    computed:{
        ...mapState(['frutas']),
    },
}
</script>