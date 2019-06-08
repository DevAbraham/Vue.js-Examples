<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <titulo v-bind:titulo="titulo"
              v-bind:numTareas="numTareas"></titulo>
      <br>
      <nueva-tarea  v-bind:tareas="tareas" 
      v-bind:aumentarContador="aumentarContador"></nueva-tarea>
      <br>
      <lista-tareas v-on:decrementarContador="numTareas -= $event" v-bind:tareas="tareas"></lista-tareas>
      </div>
  </div>
</template>

<script>
import Titulo from  './TituloComponent'
import NuevaTarea from './NuevaTareaComponent'
import ListaTareas from './ListaTareasComponent'

export default {
  name: 'app',
  components:{
    Titulo,
    NuevaTarea,
    ListaTareas
  },
  data () {
    
    return {
      numTareas:0,
      titulo:"Lista de tareas ",
      tareas: [],
    }
  },
  methods:{
    aumentarContador(){
      this.numTareas ++;
    },
  },
  created() {
      console.log("creado");
      this.$http.get('/tareas.json')
      .then(response =>{
        console.log(response);
        return response.data;
        
      })
      .then(responseJson =>{
        console.log(responseJson);
        for(let id in responseJson){
          let tarea ={
            id:id,
            texto:responseJson[id].texto,
            terminada:responseJson[id].terminada
          }
          this.tareas.push(tarea);
          this.aumentarContador();
        }
        
      })
    },
}
</script>

<style>

</style>
