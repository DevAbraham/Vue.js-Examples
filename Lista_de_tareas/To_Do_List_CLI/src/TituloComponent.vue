<template>
    <div>
    <h2>{{tituloMayusculas()}}</h2>
    <h3>Numero de tareas: {{numTareas}} </h3>
    </div>
</template>

<script>
export default {
 props:{
     titulo:{
        type:String,
        default:'Tareas'
     },
     numTareas:{

     }
    },
    methods:{
        tituloMayusculas(){
            return this.titulo.toUpperCase();
        }
    }


}
</script>

