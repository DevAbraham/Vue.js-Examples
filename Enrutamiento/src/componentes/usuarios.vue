<template>
    <div>
        <p>
            Lista de usuarios
        </p>
            <ul class="list-group">
                <router-link tag="li" :to="{name:'infoUsuario', params: { id:usuario.id }}" class="list-group-item" v-for="(usuario,indice) in usuarios" :key="indice" >
                    {{usuario.name}}

                </router-link>
            </ul>
         <p>Da click en un usuario</p>   
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return {
            usuarios:[]
        }
    },


    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            console.log(response);
            return response.data;
        })
        .then( responseJson => {
            this.usuarios= responseJson;
        })
    }
}
</script>