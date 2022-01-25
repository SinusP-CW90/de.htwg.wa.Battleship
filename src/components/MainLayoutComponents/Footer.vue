<template>
  <q-footer reveal elevated class="bg-grey-8 text-white">
    <q-toolbar>
      <q-toolbar-title>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
        </q-avatar>
        {{info}}
      </q-toolbar-title>
    </q-toolbar>
  </q-footer>
</template>

<script>
import BattleshipGame from "pages/BattleshipGame.vue";

export default {
  name: "Footer",
  components: {

  },
  data() {
    return {
      info: "current State: Play "//BattleshipGame.probs

    };
  },
}
</script>

<style scoped>

</style>
