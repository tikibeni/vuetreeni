<template>
  <div class="q-pa-lg">
    <IconText style="padding-bottom: 20px; font-size: 30px;" icon="fas fa-user" class="hl-color-1">{{ title }}</IconText>
    <q-card v-for="i in info" :key="i.key" >
      <q-card-section class="tx-color-1 scaleToScreen" style="overflow-wrap: break-word;">
        {{ i }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import IconText from 'components/utils/IconText.vue'

@Component({
  components: { IconText }
})

export default class Profile extends Vue {
  @Prop({ required: true })
  title!: string

  @Prop({ required: true })
  info!: []
}
</script>

<style scoped>

@media screen and (max-width: 770px) {
  .scaleToScreen {
    font-size: 16px;
  }
}

@media screen and (min-width: 770px) {
  .scaleToScreen {
    font-size: 20px;
  }
}

</style>
