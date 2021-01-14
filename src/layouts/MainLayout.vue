<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Vueharkka
        </q-toolbar-title>
        <ToolbarButton button-name="Yhteystiedot" link-to="/contacts" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ToolbarButton from 'components/ToolbarButton.vue'

@Component({
  components: { ToolbarButton }
})
export default class MainLayout extends Vue {
  // Tätä ei voi jättää tyhjäksi
}
</script>
