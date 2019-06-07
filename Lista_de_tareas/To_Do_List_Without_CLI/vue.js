var data = {
    tareas: [{
            texto: 'Aprender Vue.js Basico',
            terminada: false
        },
        {
            texto: 'Aprender Vue.js Medio',
            terminada: false
        },
        {
            texto: 'Aprender Vue.js Avanzado',
            terminada: false
        },
    ],
    nuevaTarea: ''
}


Vue.component('titulo', {
    template: '<h2>{{titulo}}</h2>',
    data: function() {
        return { titulo: 'Lista de tareas' }
    }
})

Vue.component('agregar-tarea', {
    template: `
    <div class="input-group">
            <input type="text" placeholder="Escribe una nueva tarea" v-model="nuevaTarea" class="form-control" v-on:keyup.enter="agregarTarea()">
            <span class="input-group-btn">
            <button type="button" v-on:click="agregarTarea()" class="btn btn-primary">Agregar Tarea</button>
            </span>
        </div>
    `,
    data: function() {
        return data;
    },
    methods: {
        agregarTarea: function() {
            var texto = this.nuevaTarea.trim();
            if (texto) {
                this.tareas.push({
                    texto: texto,
                    terminada: false
                })
            }
            this.nuevaTarea = '';
        }
    }

})
Vue.component('lista-tareas', {
    template: `
    <ul class="list-group">
            <li v-for="(tarea,indice) of tareas" class="list-group-item" v-bind:class="{terminada:tarea.terminada}">
                {{tarea.texto}}
                <span class="pull-right">
                    <button type="button" v-on:click="tarea.terminada = !tarea.terminada" class="btn btn-success btn-xs fa fa-check"> </button>
                    <button type="button" v-on:click="eliminarTarea" class="btn btn-danger btn-xs fa fa-close"> </button>
                </span>
            </li>
        </ul>
    `,
    data: function() {
        return data;
    },
    methods: {
        eliminarTarea: function(indice) {

            this.tareas.splice(indice, 1);

        }
    }

})

var app = new Vue({
    el: '#app',
    data: data,


})