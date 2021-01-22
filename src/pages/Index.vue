<template>
  <q-page class="pageContainer">
    <div class="leftContainer bg-color-2">
      <q-avatar class="dropShadow avatarImage" size="155px" square>
        <img src="~/src/assets/avatar.jpg" alt="Beni"/>
      </q-avatar>
      <IconText icon="graduation-cap" class="hl-color-1" style="margin-top: 25px; margin-bottom: 25px; font-size:30px;"> {{ $t('skills') }} </IconText>
      <SkillBar v-for="skill in skList" :key="skill.key" :skill-name="skill.name" :skill-level="skill.grade"> {{ skill.description }} </SkillBar>
    </div>

    <div class="rightContainer bg-color-1" style="padding-left: 40px;">
      <div class="q-pa-lg">
        <IconText style="padding-bottom: 45px; font-size: 30px;"  icon="user" class="hl-color-1">{{ $t('profile') }}</IconText>
        <div class="tx-color-1">
          <p>TODO:</p>
          <ul>
            <li>Korjaa uudelleenrenderöintiongelma localizationiin liittyen</li>
            <li>Rakenna infot työkokemuksiin</li>
            <li>Koulutusosio työkokemusten alapuolelle</li>
            <li>Profiiliosion teksti</li>
            <li>Yhteystiedot-sivulle sposti + iconlinkit someihin + github</li>
            <li>Siistimpi fontti</li>
            <li>CV-osion jälkeen Projects-tabi, jossa koodausprojektien esittelyä</li>
          </ul>
        </div>
      </div>

      <div class="q-pa-lg">
        <q-timeline color="accent" style="position: relative;">
          <IconText icon="book" class="hl-color-1" style="margin-bottom: 50px; font-size: 30px;">{{ $t('experience') }}</IconText>
          <!-- The line of the timeLINE breaks due to the loop so it's built manually via backRectangle -->
          <div class="backRectangle" />
          <div v-for="work in expList" v-bind:key="work.workplace">
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
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SkillBar from 'components/SkillBar.vue'
import IconText from 'components/IconText.vue'

@Component({
  components: { SkillBar, IconText }
})
export default class PageIndex extends Vue {
  // Nämä pitää saada päivittymään kielenvaihdon yhteydessä.
  // Nyt hakee vain kerran, eikä näin uudelleenrenderöi komponentteja.
  skList = this.$t('skills_info')
  expList = this.$t('experience_info')


  updateLanguage () {
    this.$emit('change-language')
  }

}
</script>

<style>
  .avatarImage {
    width: 140px;
  }

  .dropShadow {
    box-shadow: 5px 5px 10px rgba(0,0,0, 0.5);
  }

  .backRectangle {
    position: absolute;
    background-color: #404040;
    width: 5px;
    left: 5px;
    height: 80%;
    margin-top: 10px;
    margin-left: 10px;
  }

  .rightContainer {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    flex-grow: 1
  }

  .leftContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 20px;
    min-width: 300px;
    max-width: 300px;
  }

  .pageContainer {
    display: flex;
    flex-direction: row;
  }
</style>
