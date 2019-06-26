<template>
    <div>
    <v-alert
      :value="alert"
      :type="type"
      transition="scale-transition"
    >
    <slot name="message"></slot>
    </v-alert>
  </div>
</template>

<script>
export default {
    props:{
        type: { required:true },
        alert: { required:true }
    }
}
</script>