<template>
    <div class="header">
        <nav>
            <ul class="nav ">
                <h2 class="text muted">Aplicacion Enrutamiento Usuarios</h2>
                <router-link tag="li" class="nav-item nav-link"
                 active-class=" active" exact to="/"><a >Inicio</a></router-link>
                <router-link tag="li" class="nav-item nav-link "
                 active-class="nav-item active" to="/usuarios"><a >Usuarios</a></router-link>
                
            </ul>
            
        </nav>
    </div>
</template>

<style scoped>
.nav-item.active a {
  color: red;
}
</style>
