<template>
    <div>
        <h3>Informacion del usuario</h3>
        <div>
            <p> <strong>Nombre: </strong>{{nombre}}</p>
        </div>
        <button class="btn btn-primary" @click="volver()">Volver</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            nombre:'',
        
        }
    },
    created(){
        let id = this.$route.params.id;
        this.$http.get('https://jsonplaceholder.typicode.com/users/'+id)
            .then ( response =>{
                console.log(response);
                return response.data;
            })
            .then ( responseJson =>{
                this.nombre = responseJson.name;
            })
    },
    methods:{
        volver(){
            this.$router.push({name:'usuarios'});
        }
    }
}
</script>
