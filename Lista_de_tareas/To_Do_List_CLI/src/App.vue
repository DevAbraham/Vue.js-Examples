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
      numTareas:3,
      titulo:"Lista de tareas ",
      tareas: [{
            texto: 'Aprender Vue.js Basico',
            terminada: false
        },
        {
            texto: 'Aprender Vue.js Medio',
            terminada: false
        },
        {
            texto: 'Aprender Vue.js Avanzado',
            terminada: false
        },
            ],
    }
  },
  methods:{
    aumentarContador(){
      this.numTareas ++;
    }
  }
}
</script>

<style>

</style>
