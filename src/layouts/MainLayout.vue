<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="toolbar-color">
        <q-btn @click="changeLanguage()" class="hl-color-1"> {{ $t('lang') }} </q-btn>
        <div style="position: absolute; left: 50%; top: 4px; cursor: pointer;" @click="goToRoot()">
          <div class="scaleToScreen" style="position: relative; left: -50%;">
            <IconText icon="mug-hot" class="hl-color-1">Benjamin Blinnikka</IconText>
          </div>
        </div>
        <q-space />
        <ToolbarButton :button-name="$t('contacts')" link-to="/contacts" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view v-on:update-language="console.log('KIELI MUUTTUI')" />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ToolbarButton from 'components/ToolbarButton.vue'
import IconText from 'components/IconText.vue'

@Component({
  components: { ToolbarButton, IconText }
})
export default class MainLayout extends Vue {
  // Initializes created component with dark mode
  created () {
    this.$q.dark.set(true)
  }

  // Handler for the link within title
  goToRoot () {
    if (this.$router.currentRoute.fullPath !== '/') {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.$router.push('/')
    }
  }

  // Handler for the language-button
  changeLanguage () {
    console.log(this.$i18n.locale)
    if (this.$i18n.locale === 'en-us') {
      this.$i18n.locale = 'fi'
    } else {
      this.$i18n.locale = 'en-us'
    }

    // TODO LANGUAGE-CHANGE
    // Ilmeisesti allaoleva emittaa tasan parentille.
    this.$emit('changelanguage')
  }
}
</script>

<!-- Alla tekstin sovittaminen näyttöön. Noin 600px kohalla on Chromella ongelmaleveys -->
<!-- Tarvitaan toinen breakpointti mobiilille. -->
<style scoped>
@media screen and (min-width: 605px) {
  .scaleToScreen {
    font-size: 30px;
    top: auto;
  }
}
@media screen and (max-width: 605px) {
  .scaleToScreen {
    font-size: 20px;
    top: 7px;
  }
}
@media screen and (max-width: 470px) {
  .scaleToScreen {
    font-size: 15px;
  }
}
</style>
