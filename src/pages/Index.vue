<template>
  <q-page class="pageContainer">
    <div class="leftContainer">
      <q-avatar size="100px">
        <img src="~/src/assets/beni-og.jpg" alt="Beni"/>
      </q-avatar>
      <h4>Taidot</h4>

      <div>
        <SkillBar skill-name="Java" skill-level="5" />
        <SkillBar skill-name="Python" skill-level="2" />
        sliderit ei toimi nätisti
      </div>


    </div>

    <div class="rightContainer">
      <div class="q-pa-lg">
        <h3>Benjamin Blinnikka</h3>
      </div>

      <div class="q-pa-lg">
        <h4>Profiili</h4>
      </div>

      <div class="q-pa-lg">
        <q-timeline>
          <q-timeline-entry heading>Työkokemus</q-timeline-entry>

          <q-timeline-entry
            title="Helsinki Surf Shop"
            subtitle="February 22, 1986"
            avatar="~/src/assets/surfing-24px.svg"
            color="blue"
          >
            <div>
              Kuvaus tänne.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 21, 1986"
            icon="delete"
          >
            <div>
              Kuvaus tänne.
            </div>
          </q-timeline-entry>
        </q-timeline>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SkillBar from "components/SkillBar.vue";

@Component({
  components: {SkillBar}
})
export default class PageIndex extends Vue {
  name = 'Benjamin Blinnikka'
}
</script>

<style>
.leftContainer {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  padding: 75px;
  background-color: dimgrey;
}

.rightContainer {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  background-color: #3c3f41;
  flex-grow: 1
}

.pageContainer {
  display: flex;
  flex-direction: row;
}
</style>
