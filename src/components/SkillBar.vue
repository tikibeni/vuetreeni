<template>
  <div style="margin-bottom: 30px;">
    <div class="row justify-center">
      <div class="hl-color-1-light">
        {{ SkillName }}
      </div>
    </div>
    <div class="row justify-center">
      <!-- Consider fixing the keys below if necessary. Works for the time being -->
      <div v-for="number in SkillLevel" v-bind:key="SkillName + number">
        <q-icon name="fas fa-star" class="q-px-xs hl-color-1" />
      </div>
      <div v-for="number in 5-SkillLevel" v-bind:key="number + SkillName">
        <q-icon name="far fa-star" class="q-px-xs  hl-color-1-dark" />
      </div>
    </div>
    <div style="text-align: center;" class="tx-color-2">
      <slot>
      </slot>
    </div>
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

  @Prop({ required: true })
  SkillLevel!: number
}
</script>

<style scoped>

</style>
