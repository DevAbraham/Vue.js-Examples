<template>
    <v-dialog
      hide-overlay
      persistent
      v-model="dialog"
      width="300"
    >
      <v-card
        color="accent"
        dark
      >
        <v-card-text>
          Cargando
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>

</template>
<script>
export default {
  props:{
        dialog: { required:true }
    }
}
</script>