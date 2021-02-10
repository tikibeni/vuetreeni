<template>
  <q-page class="pageContainer">
    <transition
      appear
      enter-active-class="animated fadeIn"
      >
      <!-- LEFT COLUMN CONTAINER: Avatar + Skills -->
      <div class="leftContainer bg-color-2" >
        <Avatar />
        <Skills :skills-list="skillsList" :title="skillTitle"/>
      </div>
    </transition>
    <transition
      appear
      enter-active-class="animated fadeIn anim-slow"
      >
      <!-- RIGHT COLUMN CONTAINER: Profile + Work + Education -->
      <div class="rightContainer bg-color-1" style="padding-left: 40px; padding-right: 40px;">
        <Profile :title="profileTitle" :info="profileInfo" key="profile"/>
        <WorkExperiences :experience-list="experienceList" :title="experienceTitle" key="work"/>
        <Education :title="educationTitle" :description="educationInfo" key="education"/>
      </div>
    </transition>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Avatar from 'components/utils/Avatar.vue'
import Skills from 'components/Skills.vue'
import Profile from 'components/Profile.vue'
import Education from 'components/Education.vue'
import IconText from 'components/utils/IconText.vue'
import WorkExperiences from 'components/WorkExperiences.vue'

@Component({
  components: { Avatar, WorkExperiences, Skills, Profile, Education, IconText }
})
export default class PageIndex extends Vue {
  skillTitle = this.$t('skills')
  skillsList = this.$t('skills_info')
  experienceTitle = this.$t('experience')
  experienceList = this.$t('experience_info')
  profileTitle = this.$t('profile')
  profileInfo = this.$t('profile_info')
  educationTitle = this.$t('education')
  educationInfo = this.$t('education_info')

  // TODO: Current localisation-updating-implementation is horrible
  // FIXME with Vuex store state
  // FIXME Lint error about unbound method
  mounted () {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    setInterval(this.updateLocalisation, 1000)
  }

  updateLocalisation () {
    this.skillTitle = this.$t('skills')
    this.skillsList = this.$t('skills_info')
    this.experienceTitle = this.$t('experience')
    this.experienceList = this.$t('experience_info')
    this.profileTitle = this.$t('profile')
    this.profileInfo = this.$t('profile_info')
    this.educationTitle = this.$t('education')
    this.educationInfo = this.$t('education_info')
  }
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

  .anim-slow {
    -webkit-animation-duration: 1s;
  }
</style>
