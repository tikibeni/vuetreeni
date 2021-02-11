<template>
  <div class="q-pa-lg">
    <IconText style="padding-bottom: 20px; font-size: 30px;" icon="fas fa-graduation-cap" class="hl-color-1"> {{ title }} </IconText>
    <q-card>
      <q-card-section>
        <div class="row justify-start scaleToScreen">
          <img class="svgColor q-ma-sm" src="~/src/assets/unihelsinki.svg" alt="HYLogo" height="150px">
          <div class="column justify-center tx-color-1">
            <div class="row justify-center scaleToScreen">
              {{ description[0] }}
            </div>
            <div class="row justify-center scaleToScreen">
              {{ description[1] }}
            </div>
          </div>
        </div>

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

export default class Education extends Vue {
  @Prop({ required: true })
  title!: string

  @Prop({ required: true })
  description!: []
}
</script>

<style scoped>

.svgColor {
  filter: brightness(0) invert(1);
}

@media screen and (max-width: 906px) {
  .scaleToScreen {
    font-size: 13px;
    justify-content: center;
    padding-top: 10px;
  }
}

@media screen and (min-width: 750px) {
  .scaleToScreen {
    font-size: 16px;
    padding-top: 10px;
  }
}

</style>
