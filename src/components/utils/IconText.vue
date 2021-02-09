<template>
  <div class="row q-mb-md">
    <q-icon :name="icon" style="top: 20%; margin-top: 5px;" />
    <div :style="'margin-left: 15px;'">
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
  // Here be the components
})

export default class IconText extends Vue {
  @Prop({ required: true })
  icon!: string
}
</script>

<style scoped>

</style>
