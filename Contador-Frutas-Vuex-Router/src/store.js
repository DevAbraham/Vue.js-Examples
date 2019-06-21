import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        frutas: [
            { nombre: 'Manzana', cantidad: 0, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrOWEonj1BOWBR5vGQ4H7r6RpgBQLkng4QdNxmfWUj26ygnfC3' },
            { nombre: 'Naranja', cantidad: 0, url: 'https://www.frutasramirez.com/wp-content/uploads/2015/09/distribucion-naranja-frutas-ramirez.jpg' },
            { nombre: 'Sandia', cantidad: 0, url: 'https://www.hogarmania.com/archivos/201307/sandia-rodajas-xl-668x400x80xX.jpg' },
        ]

    },
    mutations: {
        aumentar(state, index) {
            state.frutas[index].cantidad++;
        },
        reiniciar(state) {
            state.frutas.forEach(elemento => {
                elemento.cantidad = 0;
            });
        }
    },
    actions: {

    }
})