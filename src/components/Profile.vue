<template>
  <div class="q-pa-lg">
    <IconText style="padding-bottom: 20px; font-size: 30px;" icon="fas fa-user" class="hl-color-1">{{ title }}</IconText>
    <q-card v-for="i in info" :key="i.key" >
      <q-card-section style="font-size: 20px;" class="tx-color-1">
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

</style>
