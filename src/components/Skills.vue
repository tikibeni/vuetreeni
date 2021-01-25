<template>
  <div style="margin-bottom: 30px;">
    <IconText icon="graduation-cap" class="hl-color-1 row justify-center" style="margin-top: 25px; margin-bottom: 25px; font-size:30px;"> {{ title }} </IconText>
    <div v-for="skill in skillsList" :key="skill.key">
      <div class="row justify-center" >
        <div class="hl-color-1-light">
          {{ skill.name }}
        </div>
      </div>
      <div class="row justify-center">
        <!-- Consider fixing the keys below if necessary. Works for the time being -->
        <div v-for="number in skill.grade" v-bind:key="skill.grade + number">
          <q-icon name="fas fa-star" class="q-px-xs hl-color-1" />
        </div>
        <div v-for="number in 5-skill.grade" v-bind:key="number + skill.name">
          <q-icon name="far fa-star" class="q-px-xs  hl-color-1-dark" />
        </div>
      </div>
      <div style="text-align: center; margin-bottom: 25px;" class="tx-color-2">
        <slot>
          {{ skill.description }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import IconText from 'components/IconText.vue'

@Component({
  components: { IconText }
})

export default class SkillBar extends Vue {
  title = this.$t('skills')
  skillsList = this.$t('skills_info')

  // TODO: The following implementation is absolutely bad
  // FIXME when I know how to use Vuex stores (localisation into store state)
  // FIXME unbound-method lint
  mounted () {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    setInterval(this.updateLocalisation, 1000)
  }

  updateLocalisation () {
    this.title = this.$t('skills')
    this.skillsList = this.$t('skills_info')
  }
}
</script>

<style scoped>

</style>
