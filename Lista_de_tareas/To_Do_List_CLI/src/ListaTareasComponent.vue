<template>
     <ul class="list-group">
            <li v-for="(tarea,indice) in tareas" :key="indice" class="list-group-item" 
                v-bind:class="{terminada: tarea.terminada}">
                {{tarea.texto}}
                <span class="pull-right">
                    <button type="button" v-on:click="estado(indice)" class="btn btn-success btn-xs fa fa-check"> </button>
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
            let id = this.tareas[indice].id;
            this.tareas.splice(indice, 1);
            this.$emit('decrementarContador',1);
            this.$http.delete('tareas/'+id+'.json')
            .then (response => console.log (response));
        },
        estado(indice){
            let terminada = this.tareas[indice].terminada = !this.tareas[indice].terminada
            let id = this.tareas[indice].id;
            this.$http.patch('tareas/'+id+'.json',{
                terminada:terminada
            })
            .then (response => console.log (response));
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


