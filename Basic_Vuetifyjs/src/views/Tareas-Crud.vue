<template>
   <v-container grid-list-xl>
       <v-layout row wrap>
           <v-flex md6>
               <v-card class="mb-3" v-for="(item, index) in listaTareas" :key="index">
                <v-card-text>
                    <v-chip label color="blue" text-color="white" class="ml-0" 
                   >
                        <v-icon left>label</v-icon>
                       <h3 v-bind:class="{terminada: item.terminada}">
                        {{item.titulo}} 
                       </h3>
                    </v-chip>
                    <p :class="{terminada: item.terminada}">
                        {{item.descripcion}}
                    </p>
                    <v-btn color="warning" class="ml-0" @click="editar(index)" >Editar</v-btn>
                    <v-btn color="error" @click="eliminarTarea(item.id)">Eliminar</v-btn>
                    <v-btn color="success" @click="tareaTerminada(index)">Terminada</v-btn>
                </v-card-text>
               </v-card>

           </v-flex>

           <v-flex md6 >
               <v-card class=" mb-3 pa-3" v-if="formAgregar">
                 <v-form @submit.prevent="agregarTarea">
                    <v-text-field label="Titulo de la tarea" v-model="titulo"></v-text-field> 
                    <v-textarea label="Descripcion de la tarea" v-model="descripcion"></v-textarea>
                    <v-btn block color="success" type="submit">Agregar Tarea</v-btn>                      
                 </v-form> 
               </v-card>

               <v-card class=" mb-3 pa-3" v-if="!formAgregar">
                 <v-form @submit.prevent="editarTarea">
                    <v-text-field label="Titulo de la tarea" v-model="titulo"></v-text-field> 
                    <v-textarea label="Descripcion de la tarea" v-model="descripcion"></v-textarea>
                    <v-btn block color="warning" type="submit">Editar Tarea</v-btn>                      
                 </v-form> 
               </v-card>

           </v-flex>
       </v-layout>

        <v-snackbar
         v-model="snackbar"
         color="success"
     
        >
        {{ msj }}
        <v-btn
            color="white"
            flat
            @click="snackbar = false"
        >
            Cerrar
        </v-btn>
        </v-snackbar>
       
   </v-container>
</template>


<script>

export default {
     data(){
        return{
            listaTareas :[],
            titulo:'',
            descripcion:'',
            msj:'',
            snackbar:false,
            formAgregar:true,
            indexTarea:'',
        }
    },
    created() {
    console.log('Cargar Tareas');
       this.$http.get('/listTareas.json')
      .then(response =>{
        return response.data;
      })
      .then(responseData =>{
        console.log(responseData);
        for(let id in responseData){
        let tarea ={
            id:id,
            titulo:responseData[id].titulo,
            descripcion:responseData[id].descripcion,
            terminada:responseData[id].terminada
          }
          this.listaTareas.push(tarea);
        }
      });
    },
    methods:{
        mostrarMensaje( msj){
            this.msj=msj;
            this.snackbar=true;
        },
        restablecerData(){
        this.titulo='';
        this.descripcion='';
        },
        agregarTarea(){
            console.log(this.titulo ,this.descripcion)
            if(this.titulo===''||this.descripcion===''){
                this.mostrarMensaje("Llena todos los campos");
            }else{
                this.$http.post('/listTareas.json',{
                titulo :this.titulo,
                descripcion:this.descripcion,
                terminada:false,
                }).then(response => {
                  return response.data;
               
                }).then( responseData => {
                this.listaTareas.push({
                    id: responseData.name,
                    titulo: this.titulo,
                    descripcion: this.descripcion,
                    terminada: false,
                });
                this.mostrarMensaje("Tarea Agregada");
                this.restablecerData();
                })
            }
        },
        tareaTerminada(index){
            let id = this.listaTareas[index].id;
            let terminada = !this.listaTareas[index].terminada ;
            this.$http.patch('listTareas/'+id+'.json',{
                terminada:terminada
            })
            .then (response => {
                console.log (response)
                this.mostrarMensaje(`Tarea Finalizada ${this.listaTareas[index].titulo}`);
                 this.listaTareas[index].terminada = terminada ;
            });    
        },
        eliminarTarea(id){

            this.$http.delete('listTareas/'+id+'.json')
            .then (response => {
            console.log (response)
            this.listaTareas = this.listaTareas.filter( e => e.id!= id)
            });
        },
        editar(index){
            this.titulo=this.listaTareas[index].titulo;
            this.descripcion=this.listaTareas[index].descripcion;
            this.indexTarea=index;
            this.formAgregar=false;
             console.log(this.indexTarea);
        },
        editarTarea(){
            let id = this.listaTareas[this.indexTarea].id;
            this.$http.patch('listTareas/'+id+'.json',{
                titulo: this.titulo,
                descripcion: this.descripcion,
            })
            .then (response => {
                console.log (response)
                this.listaTareas[this.indexTarea].titulo = this.titulo;
                this.listaTareas[this.indexTarea].descripcion = this.descripcion;
                this.formAgregar = true;
                this.restablecerData();
                this.mostrarMensaje("Tarea Editada");
                });
        },
        
    }
}
</script>

<style scoped>
.terminada {
    color: gray;
    text-decoration: line-through;
}
</style>