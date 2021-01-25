<template>
  <div class="q-pa-lg">
    <q-timeline color="accent" style="position: relative;">
      <IconText icon="book" class="hl-color-1" style="margin-bottom: 50px; font-size: 30px;">{{ title }}</IconText>
      <div class="backRectangle" />
      <div v-for="work in experienceList" v-bind:key="work.workplace">
        <div>
          <q-timeline-entry
            :icon="work.icon"
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
              <div class="tx-color-1">
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
import IconText from 'components/IconText.vue'

@Component({
  components: { IconText }
})

export default class WorkExperiences extends Vue {
  title = this.$t('experience')
  experienceList = this.$t('experience_info')

  // TODO: The following implementation is very bad
  // FIXME with Vuex store
  // FIXME Lint error about unbound method
  mounted () {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    setInterval(this.updateLocalisation, 1000)
  }

  updateLocalisation () {
    this.title = this.$t('experience')
    this.experienceList = this.$t('experience_info')
  }
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
