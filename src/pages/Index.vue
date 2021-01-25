<template>
  <q-page class="pageContainer">
    <!-- LEFT COLUMN CONTAINER -->
    <div class="leftContainer bg-color-2">
      <!-- Profile photo rendering -->
      <Avatar />
      <!-- Skill-information rendering -->
      <Skills />
    </div>

    <!-- RIGHT COLUMN CONTAINER -->
    <div class="rightContainer bg-color-1" style="padding-left: 40px;">
      <div class="q-pa-lg">
        <IconText style="padding-bottom: 45px; font-size: 30px;"  icon="user" class="hl-color-1">{{ $t('profile') }}</IconText>
        <div class="tx-color-1">
          <p>TODO:</p>
          <ul>
            <li>Rakenna infot työkokemuksiin</li>
            <li>Koulutusosio työkokemusten alapuolelle</li>
            <li>Profiiliosion teksti</li>
            <li>Yhteystiedot-sivulle sposti + iconlinkit someihin + github</li>
            <li>Siistimpi fontti</li>
            <li>CV-osion jälkeen Projects-tabi, jossa koodausprojektien esittelyä</li>
          </ul>
        </div>
      </div>
      <!-- Timeline of Experiences Rendering -->
      <WorkExperiences />
    </div>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Avatar from 'components/Avatar.vue'
import Skills from 'components/Skills.vue'
import IconText from 'components/IconText.vue'
import WorkExperiences from 'components/WorkExperiences.vue'

@Component({
  components: { Avatar, WorkExperiences, Skills, IconText }
})
export default class PageIndex extends Vue {
}
</script>

<style>
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
