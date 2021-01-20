<template>
<div>
  <q-btn flat @click="buttonPressed" class="hl-color-1">
    {{ ButtonName }}
  </q-btn>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component({
  // --
})

export default class ToolbarButton extends Vue {
  @Prop({ required: true })
  ButtonName!: string

  @Prop({ required: true })
  linkTo!: string

  buttonPressed () {
    if (this.$router.currentRoute.fullPath !== this.linkTo) {
      this.$router.push(this.linkTo)
    }
  }
}
</script>

<style scoped>

</style>
