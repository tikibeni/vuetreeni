<template>
  <div style="margin-bottom: 30px;">
    <IconText icon="fas fa-cogs" class="hl-color-1 row justify-center" style="margin-top: 25px; margin-bottom: 25px; font-size:30px;"> {{ title }} </IconText>
    <div v-for="skill in skillsList" :key="skill.key">
      <transition-group
        appear
        enter-active-class="animated fadeInUp"
      >
        <div key="title" class="row justify-center" >
          <div class="hl-color-1-light">
            {{ skill.name }}
          </div>
        </div>
        <div key="stars" class="row justify-center">
          <!-- Consider fixing the keys below if necessary. Works for the time being -->
          <div v-for="number in skill.grade" v-bind:key="skill.grade + number">
            <q-icon name="fas fa-star" class="q-px-xs hl-color-1" />
          </div>
          <div v-for="number in 5-skill.grade" v-bind:key="number + skill.name">
            <q-icon name="far fa-star" class="q-px-xs  hl-color-1-dark" />
          </div>
        </div>
        <div key="description" style="text-align: center; margin-bottom: 25px;" class="tx-color-2">
          <slot>
            {{ skill.description }}
          </slot>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import IconText from 'components/utils/IconText.vue'
import { Prop } from 'vue-property-decorator'

@Component({
  components: { IconText }
})

export default class Skills extends Vue {
  @Prop({ required: true })
  skillsList!: Array<string>

  @Prop({ required: true })
  title!: string
}
</script>

<style scoped>

</style>
