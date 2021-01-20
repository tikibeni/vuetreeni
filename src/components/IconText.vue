<template>
  <div class="row q-mb-md" :style="'height: ' + size + 'px;'">
    <q-icon :size="size + 'px'" :name="'fas fa-' + icon" style="top: 20%;" />
    <div :style="'font-size: ' + size + 'px; margin-left: 15px;'">
      <slot>
        <!-- Content generated here upon calling -->
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

export default class IconText extends Vue {
  @Prop({ required: true })
  size!: number

  @Prop( { required: true })
  icon!: string
}
</script>

<style scoped>

</style>
