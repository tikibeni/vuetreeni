<template>
<div class="q-pa-md">
  <q-badge :label="SkillName" />
  <q-slider
    :value="SkillLevel"
    markers
      :min="0"
      :max="5"
    readonly
  />
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component({
  // --
})

export default class SkillBar extends Vue {
  @Prop({ required: true })
  SkillName!: string

  @Prop( { required: true })
  SkillLevel!: number
}
</script>

<style scoped>

</style>
