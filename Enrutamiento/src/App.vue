<template>
  <div class="container">
    <encabezado></encabezado>
  <div class="jumbotron">
    
    <router-view></router-view>
  </div>  
  </div>

</template>

<script>
import Encabezado from './componentes/encabezado';
export default {
components:{
  encabezado : Encabezado
}
  
}
</script>

<style>

</style>
