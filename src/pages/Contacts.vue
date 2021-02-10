<template>
  <q-page class="contactPageContainer bg-color-1">
    <q-card style="padding: 50px;">
      <transition
        appear
        enter-active-class="animated fadeInLeft"
      >
        <IconText icon="far fa-envelope" class="hl-color-1" style="font-size: 30px;">
          <a class="hl-color-1" href="mailto:benjamin.blinnikka@gmail.com" target="_blank">Gmail</a>
        </IconText>
      </transition>
      <transition
        appear
        enter-active-class="animated fadeInLeft fadeInSlower0"
      >
        <IconText icon="fab fa-github" class="hl-color-1" style="font-size: 30px;">
          <a class="hl-color-1" href="https://github.com/tikibeni" target="_blank">GitHub</a>
        </IconText>
      </transition>
      <transition
        appear
        enter-active-class="animated fadeInLeft fadeInSlower1"
      >
        <IconText icon="fab fa-linkedin-in" class="hl-color-1" style="font-size: 30px;">
          <a class="hl-color-1" href="https://www.linkedin.com/in/tikibeni/" target="_blank">LinkedIn</a>
        </IconText>
      </transition>
      <transition
        appear
        enter-active-class="animated fadeInLeft fadeInSlower2"
      >
        <IconText icon="fab fa-facebook-f" class="hl-color-1" style="font-size: 30px;">
          <a class="hl-color-1" href="https://www.facebook.com/BeniFIN4" target="_blank">Facebook</a>
        </IconText>
      </transition>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import IconText from 'components/utils/IconText.vue'

@Component({
  components: { IconText }
})

export default class Contacts extends Vue {
}
</script>

<style>
.contactPageContainer {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.fadeInSlower0 {
  animation-delay: 0.2s;
}

.fadeInSlower1 {
  animation-delay: 0.4s;
}

.fadeInSlower2 {
  animation-delay: 0.6s;
}
</style>
