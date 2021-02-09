<template>
  <div class="bg-color-1 fullscreen hl-color-1 text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div class="text-h2" style="opacity:.4">
        Oops. Nothing here...
      </div>

      <q-btn
        class="hl-color-1 q-mt-xl"
        unelevated
        to="/"
        label="Back to the profile"
        size="20px"
        no-caps
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Error404 extends Vue {}
</script>
