<template>
  <q-avatar class="dropShadow avatarImage" size="155px" square>
    <img src="~/src/assets/avatar.jpg" alt="Beni"/>
  </q-avatar>
</template>

<script lang="ts">

import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  // Here be components
})

export default class Avatar extends Vue {
  // Here be class-specific functions and variables
}
</script>

<style scoped>
.avatarImage {
  width: 140px;
}

.dropShadow {
  box-shadow: 5px 5px 10px rgba(0,0,0, 0.5);
}
</style>
