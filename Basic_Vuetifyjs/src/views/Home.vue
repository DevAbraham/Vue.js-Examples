<template>
  <v-container grid-list-md>
    <v-layout row wrap >
      <v-flex xs12 sm3>
        <v-card max-width="400px" max-height="600px">
          <v-img src="https://www.hazunaweb.com/imagenes/prueba.jpg">
          <v-container fill-height>
            <v-layout>
              <v-flex>
                <span class="headline white--text">Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur.</span>
              </v-flex>
            </v-layout>
          </v-container>
          </v-img>
          <v-card-title>
            <h2>Lorem, ipsum dolor.</h2>
          </v-card-title>
          <v-card-text>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt enim possimus magni tempore voluptatem consequuntur.
            </p>
          </v-card-text>
          <v-card-actions>
              <v-btn color="info"  @click="dialog = !dialog" flat > Accion</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm3>
        <v-card max-width="400px" max-height="600px">
          <v-img src="https://www.hazunaweb.com/imagenes/prueba.jpg"></v-img>
          <v-card-title>
            <h2>Lorem, ipsum dolor.</h2>
          </v-card-title>
          <v-card-text>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt enim possimus magni tempore voluptatem consequuntur.
            </p>
          </v-card-text>
          <v-card-actions>
              <v-btn @click="dialog = !dialog" color="info" flat > Accion</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

       <v-flex xs12 sm3>
        <v-card max-width="400px" max-height="600px">
          <v-img src="https://www.hazunaweb.com/imagenes/prueba.jpg"></v-img>
          <v-card-title>
            <h2>Lorem, ipsum dolor.</h2>
          </v-card-title>
          <v-card-text>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt enim possimus magni tempore voluptatem consequuntur.
            </p>
          </v-card-text>
          <v-card-actions>
              <v-btn @click="dialog = !dialog" color="info" flat > Accion</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      
       <v-flex xs12 sm3>
        <v-card max-width="400px" max-height="600px">
          <v-img src="https://www.hazunaweb.com/imagenes/prueba.jpg"></v-img>
          <v-card-title>
            <h2>Lorem, ipsum dolor.</h2>
          </v-card-title>
          <v-card-text>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt enim possimus magni tempore voluptatem consequuntur.
            </p>
          </v-card-text>
          <v-card-actions>
              <v-btn @click="dialog = !dialog" color="info" flat > Accion</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

    </v-layout>
    
     
    <!-- Dialog -->
  <v-dialog persistent
      v-model="dialog"
      width="500"
    >
           <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = !dialog"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Dialog -->

    
  </v-container>
</template>

<script>
  
  export default {
   data(){
     return {
       dialog:false,
     }
   }
  }
</script>
