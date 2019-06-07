<template>
     <ul class="list-group">
            <li v-for="(tarea,indice) in tareas" :key="indice" class="list-group-item" 
                v-bind:class="{terminada: tarea.terminada}">
                {{tarea.texto}}
                <span class="pull-right">
                    <button type="button" v-on:click="tarea.terminada = !tarea.terminada" class="btn btn-success btn-xs fa fa-check"> </button>
                    <button type="button" v-on:click="eliminarTarea(indice)" class="btn btn-danger btn-xs fa fa-close"> </button>
                </span>
            </li>
        </ul>
</template>

<script>
export default {
    props:['tareas'],
    
    methods: {
        eliminarTarea (indice) {
            console.log(indice);
            this.tareas.splice(indice, 1);
            this.$emit('decrementarContador',1);
        }
    }
}
</script>

<style scoped>
.terminada {
    color: gray;
    text-decoration: line-through;
}
</style>


