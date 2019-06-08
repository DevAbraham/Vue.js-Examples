<template>
  <div id="app" class="container ">
    <div class="row">
      <div class="col-md-6 ">
        <div class="center-block">
          <h1>Formulario</h1>
        
          <form>
          <div class="form-group">
            <label for="nombre">Nombre </label>
            <input type="text" class="form-control" placeholder="Nombre" v-model.trim="usuario.nombre">
          </div>  
          <div class="form-group">
            <label for="correo">Correo Electrónico </label>
            <input type="email" class="form-control" placeholder="Correo Electrónico" v-model.lazy="usuario.correo">
          </div>
          <div class="form-group">
            <label for="clave">Contraseña </label>
            <input type="password" class="form-control" placeholder="Contraseña" v-model="usuario.clave">
          </div>
          <div class="form-group">
            <label for="edad">Edad </label>
            <input type="text" class="form-control" placeholder="Edad" v-model.number="usuario.edad">
          </div>
          <div class="form-group">
            <label for="pais">País </label>
            <select class="form-control" v-model="usuario.pais">
              <option v-for="(pais,i) in paises" v-bind:key=i>{{pais}}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="mensaje">Mensaje</label>
            <textarea class="form-control" rows="4" v-model="usuario.mensaje"></textarea>
          </div>

          <fieldset class="form-group">
          <legend>Genero</legend>
          <div class="form-check">
            <label class="form-check-label">
              <input type="radio" class="form-check-input" name="optionsRadios" value="Hombre" v-model="usuario.genero" >
              Hombre
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input type="radio" class="form-check-input" name="optionsRadios" value="Mujer" v-model="usuario.genero">
              Mujer
            </label>
          </div>
          </fieldset>

          <div class="form-check">
            <label class="form-check-label">
            <input type="checkbox" class="form-check-input" value="acepto" v-model="usuario.condiciones">
            Acepto las condiciones de uso
            </label>
          </div>
           <div class="form-check">
            <label class="form-check-label">
            <input type="checkbox" class="form-check-input" value="noticias" v-model="usuario.condiciones">
            Recibir noticias
            </label>
          </div>
          <br>
          <button type="sumbit" class="btn btn-primary" v-on:click.prevent="enviarFormulario">Enviar </button>
          </form>
        </div>
      </div>

      <div class="col-md-6 " v-if="mostrar">
        <div class="center-block">

          <h1>Resultados</h1>
          <p><strong>Nombre: {{usuario.nombre}}</strong></p>
          <p><strong>Correo Electrónico: {{usuario.correo}}</strong></p>
          <p><strong>Contraseña: {{usuario.clave}}</strong></p>
          <p><strong>Edad: {{usuario.edad}}</strong></p>
          <p><strong>Pais: {{usuario.pais}}</strong></p>
          <p class="mensaje"><strong>Mensaje: {{usuario.mensaje}}</strong></p>
          <p><strong>Genero: {{usuario.genero}}</strong></p>
          <p><strong>Condiciones: {{usuario.condiciones}}</strong></p>
        </div>  
      </div>

    </div>
  </div>
   
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      usuario: {
      nombre:'',
      correo:'',
      clave:'',
      edad:'',
      pais:'Mexico',
      mensaje:'',
      genero:'Hombre',
      condiciones:[]
      },
      mostrar:false,
      paises:['Argentina','Mexico','Chile','Venezuela','Guatemala']
    }
  },
  methods:{
    enviarFormulario(){
      this.mostrar=true;
    }
  }
}
</script>

<style>
.mensaje{
  white-space:pre;
}
</style>
