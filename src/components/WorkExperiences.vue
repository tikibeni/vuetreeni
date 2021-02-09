<template>
  <div class="q-pa-md">
    <q-timeline color="accent" style="position: relative;">
      <IconText icon="fas fa-book" class="hl-color-1" style="margin-bottom: 40px; font-size: 30px;">{{ title }}</IconText>
      <div class="backRectangle" />
      <div v-for="work in experienceList" v-bind:key="work.workplace">
        <div>
          <q-timeline-entry
            :icon="work.icon"
            color="green"
            style="margin-left: 10px;"
          >
            <template v-slot:subtitle>
              <div class="tx-color-2">
                {{ work.during }}
              </div>
            </template>
            <template v-slot:title>
              <div class="hl-color-1">
                {{ work.workplace }}
              </div>
            </template>
            <div>
              <div class="tx-color-1" style="font-size: 16px;">
                {{ work.description }}
              </div>
            </div>
          </q-timeline-entry>
        </div>
      </div>
    </q-timeline>
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

export default class WorkExperiences extends Vue {
  @Prop({ required: true })
  title!: string

  @Prop({ required: true })
  experienceList!: Array<string>
}
</script>

<style scoped>

.backRectangle {
  position: absolute;
  background-color: #404040;
  width: 5px;
  left: 5px;
  height: 80%;
  margin-top: 10px;
  margin-left: 10px;
}

</style>
