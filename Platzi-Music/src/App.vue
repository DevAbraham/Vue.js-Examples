<template>
  <v-app>
    <p-m-header/>
    <v-content>
      <router-view/>
    </v-content>
    <p-m-footer/>
  </v-app>
</template>

<script>
import PMHeader from '@/components/layout/Header.vue'
import PMFooter from '@/components/layout/Footer.vue'

export default {
  name: 'App',
  components:{
    PMHeader,
    PMFooter
  },
  data () {
    return {
      //
    }
  }
}
</script>
