<template>
  
  <v-container>
    <v-layout>
      <v-flex>
        <v-btn>Texto</v-btn>
        <v-btn color="primary">Texto</v-btn>
        <v-btn dark color="blue">Texto</v-btn>
        <v-btn flat >Sin fondo</v-btn>
        <v-btn large color="success">largo</v-btn>
        <v-btn small color="success">largo</v-btn>
        <v-btn large color="success" :disabled="false">largo</v-btn>
        <v-btn>
        <v-icon>favorite</v-icon>
        </v-btn> 
        <v-btn color="success">
        <v-icon>favorite</v-icon>
        </v-btn> 
        <v-btn icon>
        <v-icon>favorite</v-icon>
        </v-btn> 
        <v-btn fab>
        <v-icon>favorite</v-icon>
        </v-btn> 
        <v-btn small fab>
        <v-icon>favorite</v-icon>
        </v-btn> 
        <v-btn color="primary"> 
          Texto
          <v-icon>favorite</v-icon>
        </v-btn>
        <v-btn color="error"> 
          Texto
          <v-icon right>favorite</v-icon>
        </v-btn>
        <v-btn color="error"> 
          <v-icon left>favorite</v-icon>
          Texto
        </v-btn>
        <v-btn color="error" outline> 
          Texto
          <v-icon right>favorite</v-icon>
        </v-btn>
        <v-btn color="error" outline block > 
          Texto
          <v-icon right>favorite</v-icon>
        </v-btn>
        <v-btn color="error" outline round block > 
          Texto
          <v-icon right>favorite</v-icon>
        </v-btn>

      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
export default {
  
}
</script>

