import InicioComponent from './componentes/inicio.vue'
// import UsuariosComponent from './componentes/usuarios.vue'
import InfoUsuario from './componentes/infoUsuario.vue'

// lazy loading 
const UsuariosComponent = resolve => {
    require.ensure(['./componentes/usuarios.vue'], () => {
        resolve(require('./componentes/usuarios.vue'));
    })
}

export const rutas = [
    { path: '', component: InicioComponent },
    { path: '/usuarios', component: UsuariosComponent, name: 'usuarios' },
    { path: ':id', component: InfoUsuario, name: 'infoUsuario' },
    { path: '*', redirect: '/' }


]