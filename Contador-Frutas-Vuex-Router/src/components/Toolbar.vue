<template>
     <v-toolbar >
      <v-toolbar-title class="headline text-uppercase">
        <span>Contador de frutas</span>
        <span class="font-weight-light"> VUEX-ROUTE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        
          <v-btn 
         to="/"
              exact-active-class
              flat
            >
            Lista frutas
              <v-icon>open_in_new</v-icon>
          </v-btn>
          
        <v-btn 
         to="/fotos/1"
              exact-active-class
              flat
            >
            Fotos
              <v-icon>open_in_new</v-icon>
          </v-btn>



    </v-toolbar>
</template>

<script>
export default {
    name:'Toolbar'
}
</script>


<style>
.router.link.active v-btn {
  color: red;
}
</style>


