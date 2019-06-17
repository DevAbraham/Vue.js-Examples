<template>
  <v-app>
    <v-toolbar color="blue" app>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>

      <v-toolbar-title>
        Vuetify
      
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="success">Ingreso</v-btn>
      <v-btn class="error">Salir</v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer"  dark app>
      <v-layout mt-4 column align-center>
         <v-flex>
            <v-avatar>
               <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="">
            </v-avatar>
         </v-flex>
         <v-flex>
           <p class="white--text mt-3 headline"> Abraham Rueda</p>
         </v-flex>
      </v-layout>
      <v-layout column>
         <v-flex mx-1>

           <v-btn color="accent" block   :to="{name:'home'}">
            Home
            </v-btn>
            <v-btn color="success" block   :to="{name:'botones'}">
            Botones
            </v-btn>
            <v-btn color="warning" block  :to="{name:'tareas-crud'}">
            Lista De Tareas
            </v-btn>

         </v-flex>
      </v-layout>
      
    </v-navigation-drawer>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      drawer:false
      //
    }
  }
}
</script>
