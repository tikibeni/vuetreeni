<template>
<div>
  <q-btn flat color="white" :label="ButtonName" @click="buttonPressed" />
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component({
  // TODO
})

export default class ToolbarButton extends Vue {
  @Prop({ required: true })
  ButtonName!: string

  @Prop({ required: true })
  linkTo!: string

  buttonPressed () {
    if (this.$router.currentRoute.fullPath !== '/contacts') {
      this.$router.push(this.linkTo)
    }
  }
}
</script>

<style scoped>

</style>
